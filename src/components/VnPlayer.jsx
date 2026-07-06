import { useEffect, useMemo, useRef, useState } from 'react';
import {
  createSaveData,
  getHasSavedGame,
  getSavedPositionLabel,
  getSaveSlotLabel,
  formatSavedAt,
  readSavedGame,
  readSaveSlots,
  roleLabels,
  SAVE_SLOT_AUTO,
  SAVE_SLOT_MANUAL,
  writeSavedGame,
} from '../lib/saveSlots.js';

const TEXT_SCALE_KEY = 'if-library-text-scale';
const TEXT_SCALE_MIN = 0.92;
const TEXT_SCALE_MAX = 1.18;
const TEXT_SCALE_STEP = 0.08;
const SCENE_INTRO_MS = 680;

function hasFinalConsonant(value) {
  const lastChar = Array.from(value).at(-1);
  if (!lastChar) return false;

  const code = lastChar.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return false;

  return (code - 0xac00) % 28 !== 0;
}

function getProtagonistName(value) {
  return value?.trim() || '자라';
}

function getProtagonistVocative(value) {
  const name = getProtagonistName(value);
  const lastChar = Array.from(name).at(-1);
  const code = lastChar?.charCodeAt(0);

  if (!code || code < 0xac00 || code > 0xd7a3) return name;

  return `${name}${hasFinalConsonant(name) ? '아' : '야'}`;
}

function getDisplaySpeaker(speaker, protagonistName) {
  return speaker === '주인공' ? getProtagonistName(protagonistName) : speaker;
}

function personalizeText(text, protagonistName) {
  if (!text) return text;

  const name = getProtagonistName(protagonistName);
  return text
    .replaceAll('자라 선생', `${name} 선생`)
    .replaceAll('자라야', getProtagonistVocative(name));
}

function clampTextScale(value) {
  return Math.min(TEXT_SCALE_MAX, Math.max(TEXT_SCALE_MIN, Math.round(value * 100) / 100));
}

function readTextScale() {
  if (typeof window === 'undefined') return 1;

  try {
    const value = Number(window.localStorage.getItem(TEXT_SCALE_KEY));
    if (!Number.isFinite(value)) return 1;
    return clampTextScale(value);
  } catch {
    return 1;
  }
}

function getFullscreenElement() {
  if (typeof document === 'undefined') return null;
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

async function requestFullscreen(element) {
  if (element.requestFullscreen) {
    await element.requestFullscreen();
    return;
  }

  if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

async function exitFullscreen() {
  if (document.exitFullscreen) {
    await document.exitFullscreen();
    return;
  }

  if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function getSpeakerToneClass(speaker = '', role = '') {
  if (role === 'narration' || speaker === '해설') return 'speaker-tone-narrator';
  if (role === 'thought' || speaker === '속생각' || speaker === '주인공') {
    return 'speaker-tone-protagonist';
  }
  if (speaker === '용왕') return 'speaker-tone-dragon';
  if (speaker === '토끼') return 'speaker-tone-amber';
  if (speaker === '의관') return 'speaker-tone-teal';
  if (speaker === '선택 전 문장') return 'speaker-tone-choice';
  return 'speaker-tone-neutral';
}

function getSpriteSource(story, character) {
  const config = story.assets.characters[character.name];
  if (!config) return null;
  return config.variants[character.variant] || config.variants.default;
}

function shouldMirrorSprite(story, character) {
  const config = story.assets.characters[character.name];
  const sourceFacing =
    character.facing ||
    config?.variantFacings?.[character.variant] ||
    config?.facing ||
    '';
  const targetFacing =
    character.side === 'left' ? 'right' : character.side === 'right' ? 'left' : sourceFacing;

  return Boolean(sourceFacing && targetFacing && sourceFacing !== targetFacing);
}

function getSpriteScale(story, character) {
  const config = story.assets.characters[character.name];
  const scale = Number(character.scale || config?.scale || 1);

  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

function StageCharacters({ story, characters = [] }) {
  return (
    <div className="character-layer" aria-hidden="true">
      {characters.map((character) => {
        const src = getSpriteSource(story, character);
        if (!src) return null;
        const isMirrored = shouldMirrorSprite(story, character);
        const scale = getSpriteScale(story, character);

        return (
          <img
            className={[
              'character-sprite',
              `character-${character.side}`,
              isMirrored ? 'is-mirrored' : '',
              character.active ? 'is-active' : 'is-dimmed',
            ].join(' ')}
            src={src}
            alt=""
            style={{ '--character-scale': scale }}
            key={`${character.name}-${character.side}-${character.variant}`}
          />
        );
      })}
    </div>
  );
}

function SegmentText({ beat, activeSpeaker, protagonistName }) {
  if (!beat?.segments?.length) {
    return (
      <p className={`line line-${beat?.role || 'narration'}`}>
        {personalizeText(beat?.text, protagonistName)}
      </p>
    );
  }

  return (
    <div className="segment-stack">
      {beat.segments.map((segment, index) => (
        <p
          className={`line line-${segment.type}`}
          key={`${segment.type}-${index}-${segment.text}`}
        >
          {segment.type === 'dialogue' &&
          segment.speaker &&
          getDisplaySpeaker(segment.speaker, protagonistName) !== activeSpeaker ? (
            <span className="inline-speaker">
              {getDisplaySpeaker(segment.speaker, protagonistName)}
            </span>
          ) : null}
          {personalizeText(segment.text, protagonistName)}
        </p>
      ))}
    </div>
  );
}

function DialogueBox({
  beat,
  onNext,
  onPrevious,
  onOpenHistory,
  onSave,
  onLoad,
  canGoBack,
  canOpenHistory,
  hasSavedGame,
  saveNotice,
  onDecreaseTextScale,
  onIncreaseTextScale,
  canDecreaseTextScale,
  canIncreaseTextScale,
  protagonistName,
  nextActionLabel,
}) {
  const label = roleLabels[beat?.role] || beat?.role || '장면';
  const rawSpeaker = beat?.role === 'thought' ? '속생각' : beat?.speaker || label;
  const speaker = getDisplaySpeaker(rawSpeaker, protagonistName);
  const toneClass = getSpeakerToneClass(rawSpeaker, beat?.role);
  const showNameplate = beat?.role === 'dialogue' && Boolean(speaker);

  return (
    <section
      className={[
        'dialogue-box',
        `role-${beat?.role || 'narration'}`,
        toneClass,
        showNameplate ? 'has-nameplate' : 'no-nameplate',
        beat?.visualMode ? `visual-mode-${beat.visualMode}` : '',
      ].join(' ')}
      aria-live="polite"
    >
      {showNameplate ? (
        <div className="dialogue-header">
          <div>
            <span className="role-pill">{speaker}</span>
          </div>
        </div>
      ) : null}
      <SegmentText
        beat={beat}
        activeSpeaker={showNameplate ? speaker : ''}
        protagonistName={protagonistName}
      />
      <div className="dialogue-footer">
        <div className="dialogue-save-actions">
          <button
            className="ghost-button vn-mini-button"
            type="button"
            onClick={onOpenHistory}
            disabled={!canOpenHistory}
          >
            지난 기록
          </button>
          <button className="ghost-button vn-mini-button" type="button" onClick={onSave}>
            저장
          </button>
          <button
            className="ghost-button vn-mini-button"
            type="button"
            onClick={onLoad}
            disabled={!hasSavedGame}
          >
            불러오기
          </button>
          <button
            className="ghost-button vn-mini-button text-scale-button"
            type="button"
            onClick={onDecreaseTextScale}
            disabled={!canDecreaseTextScale}
            aria-label="글자 작게"
          >
            가-
          </button>
          <button
            className="ghost-button vn-mini-button text-scale-button"
            type="button"
            onClick={onIncreaseTextScale}
            disabled={!canIncreaseTextScale}
            aria-label="글자 크게"
          >
            가+
          </button>
          {saveNotice ? <span className="save-notice">{saveNotice}</span> : null}
        </div>
        <div className="dialogue-actions">
          <button
            className="ghost-button vn-mini-button"
            type="button"
            onClick={onPrevious}
            disabled={!canGoBack}
          >
            이전
          </button>
          <button className="next-button vn-mini-button" type="button" onClick={onNext}>
            {nextActionLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

function ChoicePanel({ choice, onChoose, onOpenHistory, onPrevious, canOpenHistory, canGoBack }) {
  return (
    <section className="choice-panel role-choice" aria-labelledby={`${choice.id}-title`}>
      <div className="choice-header">
        <div>
          <h2 id={`${choice.id}-title`}>{choice.label}</h2>
        </div>
        <div className="choice-header-actions">
          <button
            className="ghost-button choice-history-button"
            type="button"
            onClick={onOpenHistory}
            disabled={!canOpenHistory}
          >
            지난 기록
          </button>
          <button
            className="ghost-button choice-history-button"
            type="button"
            onClick={onPrevious}
            disabled={!canGoBack}
          >
            이전
          </button>
        </div>
      </div>
      <div className="choice-options">
        {choice.options.map((option) => (
          <button
            className={[
              'choice-card',
              'is-simple-choice',
              option.disabled ? 'is-disabled-choice' : '',
            ].join(' ')}
            type="button"
            key={option.id}
            disabled={option.disabled}
            onClick={() => onChoose(option)}
          >
            <span className="choice-title">{option.shortText || option.text}</span>
            {option.disabledReason ? (
              <span className="choice-disabled-reason">{option.disabledReason}</span>
            ) : null}
          </button>
        ))}
      </div>
    </section>
  );
}

function EndingPanel({ ending, onRestart, onExit, onOpenReflection, activityHref }) {
  return (
    <section className="ending-panel role-narration" aria-labelledby="ending-title">
      <span className="role-pill">{ending.label}</span>
      <h2 id="ending-title">{ending.title}</h2>
      <p className="ending-location">{ending.location}</p>
      <div className="ending-actions">
        <button className="next-button" type="button" onClick={onOpenReflection}>
          생각해보기
        </button>
        {activityHref ? (
          <a className="ghost-button ending-activity-link" href={activityHref}>
            활동지
          </a>
        ) : null}
        <button className="ghost-button" type="button" onClick={onRestart}>
          처음부터
        </button>
        <button className="ghost-button" type="button" onClick={onExit}>
          목록
        </button>
      </div>
    </section>
  );
}

function ReflectionModal({ ending, fallbackQuestions, onClose, protagonistName }) {
  const reflection = ending?.reflection;
  const questions = reflection?.questions?.length ? reflection.questions : fallbackQuestions;
  const decisionTitle = personalizeText(
    reflection?.decisionTitle || '이 선택의 무게',
    protagonistName,
  );

  return (
    <div className="reflection-overlay" role="presentation">
      <section
        className="reflection-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reflection-title"
      >
        <div className="reflection-modal-header">
          <div>
            <span className="role-pill">생각해보기</span>
            <h2 id="reflection-title">{decisionTitle}</h2>
          </div>
          <button
            className="ghost-button modal-close-button"
            type="button"
            onClick={onClose}
            aria-label="닫기"
          >
            ×
          </button>
        </div>
        <div className="reflection-modal-body">
          {reflection?.decisions?.length ? (
            <section className="reflection-decision-block" aria-labelledby="reflection-decision-title">
              <h3 id="reflection-decision-title">이 결말로 이어진 선택</h3>
              <ul className="reflection-decisions">
                {reflection.decisions.map((decision) => (
                  <li key={decision}>{personalizeText(decision, protagonistName)}</li>
                ))}
              </ul>
            </section>
          ) : null}
          <section className="reflection-question-block" aria-labelledby="reflection-question-title">
            <h3 id="reflection-question-title">되돌아볼 질문</h3>
            <ol className="reflection-questions">
              {questions.map((question) => (
                <li key={question}>{personalizeText(question, protagonistName)}</li>
              ))}
            </ol>
          </section>
        </div>
      </section>
    </div>
  );
}

function SaveLoadPanel({ story, saveSlots, onLoadSlot, onClose, protagonistName }) {
  return (
    <section className="save-load-panel" role="dialog" aria-labelledby="save-load-title">
      <div className="save-load-header">
        <div>
          <span className="role-pill">불러오기</span>
          <h2 id="save-load-title">저장된 자리</h2>
        </div>
        <button
          className="ghost-button vn-mini-button modal-close-button"
          type="button"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
      </div>
      <div className="save-slot-list">
        {saveSlots.map((slot) => (
          <button
            className="save-slot-button"
            type="button"
            key={slot.id}
            onClick={() => onLoadSlot(slot.id)}
            disabled={!slot.savedGame}
          >
            <strong>{slot.label}</strong>
            <span>
              {slot.savedGame
                ? `${formatSavedAt(slot.savedGame.savedAt)} · ${getSavedPositionLabel(
                    slot.savedGame,
                    story,
                    protagonistName,
                  )}`
                : '저장 없음'}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function HistoryPanel({ history, onClose }) {
  return (
    <aside className="history-panel" aria-label="지난 기록">
      <div className="history-header">
        <h2>지난 기록</h2>
        <button
          className="ghost-button modal-close-button"
          type="button"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
      </div>
      {history.length === 0 ? (
        <p className="empty-history">아직 기록된 장면이 없습니다.</p>
      ) : (
        <ol>
          {history.map((entry) => (
            <li key={entry.id}>
              <span>{entry.label}</span>
              <p>{entry.text}</p>
            </li>
          ))}
        </ol>
      )}
    </aside>
  );
}

function buildEndingBeat(route) {
  if (!route.ending) return null;

  return {
    id: `${route.key}-ending-stage`,
    role: 'narration',
    speaker: '해설',
    text: route.ending.text,
    bg: route.ending.bg,
    bgImage: route.ending.bgImage,
    bgm: route.ending.bgm,
    sfx: route.ending.sfx,
    expression: route.ending.expression,
    characters: route.ending.characters,
  };
}

function getValidInitialSave(story, initialSave) {
  if (!initialSave || !story.routes[initialSave.routeKey]) return null;
  return initialSave;
}

function getInitialBeatIndex(story, initialSave) {
  const route = story.routes[initialSave?.routeKey];
  const savedBeatIndex = Number(initialSave?.beatIndex);

  if (!route || !Number.isFinite(savedBeatIndex)) return 0;
  return Math.min(Math.max(0, Math.trunc(savedBeatIndex)), route.beats.length);
}

export function VnPlayer({
  story,
  onExit,
  protagonistName: initialProtagonistName = '자라',
  initialSave = null,
}) {
  const validInitialSave = getValidInitialSave(story, initialSave);
  const [routeKey, setRouteKey] = useState(validInitialSave?.routeKey || story.startRoute);
  const [beatIndex, setBeatIndex] = useState(() => getInitialBeatIndex(story, validInitialSave));
  const [history, setHistory] = useState(() =>
    Array.isArray(validInitialSave?.history) ? validInitialSave.history : [],
  );
  const [protagonistName, setProtagonistName] = useState(
    validInitialSave?.protagonistName || initialProtagonistName,
  );
  const [showHistory, setShowHistory] = useState(false);
  const [showLoadPanel, setShowLoadPanel] = useState(false);
  const [showReflection, setShowReflection] = useState(false);
  const [, setSaveRevision] = useState(0);
  const [saveNotice, setSaveNotice] = useState('');
  const [textScale, setTextScale] = useState(readTextScale);
  const [isFullscreen, setIsFullscreen] = useState(() => Boolean(getFullscreenElement()));
  const [isSceneIntro, setIsSceneIntro] = useState(false);
  const introTimeoutRef = useRef(null);

  const route = story.routes[routeKey];
  const currentBeat = route.beats[beatIndex] || null;
  const isRouteComplete = beatIndex >= route.beats.length;
  const lastBeat = route.beats[route.beats.length - 1] || null;
  const endingBeat = useMemo(() => buildEndingBeat(route), [route]);
  const stageBeat = currentBeat || endingBeat || lastBeat;
  const isFlashback = stageBeat?.visualMode === 'flashback';
  const isRealityCrack = stageBeat?.transition === 'reality-crack';
  const displayedScenePlace = stageBeat?.scenePlace || route.scenePlace;
  const activeChoice = isRouteComplete ? route.choice : null;
  const activeEnding = isRouteComplete && !route.choice ? route.ending : null;
  const canContinue = Boolean(currentBeat && beatIndex + 1 < route.beats.length);
  const canGoBack = Boolean(currentBeat && beatIndex > 0);
  const canGoBackFromChoice = Boolean(activeChoice && route.beats.length > 0);
  const nextActionLabel = canContinue || !route.choice ? '다음' : '선택';
  const saveSlots = readSaveSlots(story.id);
  const hasSavedGame = getHasSavedGame(saveSlots);
  const canDecreaseTextScale = textScale > TEXT_SCALE_MIN;
  const canIncreaseTextScale = textScale < TEXT_SCALE_MAX;

  useEffect(() => {
    if (!saveNotice) return undefined;
    const timeoutId = window.setTimeout(() => setSaveNotice(''), 1500);
    return () => window.clearTimeout(timeoutId);
  }, [saveNotice]);

  useEffect(
    () => () => {
      if (introTimeoutRef.current) window.clearTimeout(introTimeoutRef.current);
    },
    [],
  );

  useEffect(() => {
    function syncFullscreenState() {
      setIsFullscreen(Boolean(getFullscreenElement()));
    }

    document.addEventListener('fullscreenchange', syncFullscreenState);
    document.addEventListener('webkitfullscreenchange', syncFullscreenState);

    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreenState);
      document.removeEventListener('webkitfullscreenchange', syncFullscreenState);
    };
  }, []);

  function refreshSaveSlots() {
    setSaveRevision((revision) => revision + 1);
  }

  function saveAutoPosition(nextRouteKey, nextBeatIndex, nextHistory) {
    try {
      writeSavedGame(
        story.id,
        SAVE_SLOT_AUTO,
        createSaveData({
          storyId: story.id,
          routeKey: nextRouteKey,
          beatIndex: nextBeatIndex,
          history: nextHistory,
          slotId: SAVE_SLOT_AUTO,
          protagonistName,
        }),
      );
      refreshSaveSlots();
    } catch {
      // Automatic save should not interrupt reading if local storage is unavailable.
    }
  }

  function appendHistoryEntry(currentHistory, entry) {
    return [
      ...currentHistory,
      {
        id: `${entry.id}-${currentHistory.length}`,
        ...entry,
      },
    ];
  }

  function startSceneIntro() {
    if (introTimeoutRef.current) window.clearTimeout(introTimeoutRef.current);
    setIsSceneIntro(true);
    introTimeoutRef.current = window.setTimeout(() => {
      setIsSceneIntro(false);
      introTimeoutRef.current = null;
    }, SCENE_INTRO_MS);
  }

  function goToRoute(nextRouteKey, nextHistory = history) {
    saveAutoPosition(nextRouteKey, 0, nextHistory);
    setRouteKey(nextRouteKey);
    setBeatIndex(0);
    setHistory(nextHistory);
    setShowLoadPanel(false);
    setShowReflection(false);
    startSceneIntro();
  }

  function handleNext() {
    if (currentBeat) {
      const nextHistory = appendHistoryEntry(history, {
        id: currentBeat.id,
        label:
          getDisplaySpeaker(currentBeat.speaker, protagonistName) ||
          roleLabels[currentBeat.role],
        text: personalizeText(currentBeat.text, protagonistName),
      });
      const nextBeatIndex = beatIndex + 1;

      if (nextBeatIndex >= route.beats.length && route.nextRoute) {
        goToRoute(route.nextRoute, nextHistory);
        return;
      }

      saveAutoPosition(routeKey, nextBeatIndex, nextHistory);
      setHistory(nextHistory);
      setBeatIndex(nextBeatIndex);
      return;
    }

    if (route.nextRoute) {
      goToRoute(route.nextRoute);
    }
  }

  function handleStageTap(event) {
    if (!currentBeat) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (
      target.closest(
        'button, a, input, textarea, select, .dialogue-footer, .save-load-panel, .history-panel',
      )
    ) {
      return;
    }

    const tapX = Number.isFinite(event.clientX) ? event.clientX : window.innerWidth;
    if (tapX >= window.innerWidth / 2) {
      handleNext();
    } else {
      handlePrevious();
    }
  }

  function handlePrevious() {
    if (activeChoice) {
      const nextBeatIndex = Math.max(0, route.beats.length - 1);
      const nextHistory = history.length > 0 ? history.slice(0, -1) : history;

      saveAutoPosition(routeKey, nextBeatIndex, nextHistory);
      setHistory(nextHistory);
      setBeatIndex(nextBeatIndex);
      return;
    }

    if (!currentBeat || beatIndex <= 0) return;
    const nextBeatIndex = Math.max(0, beatIndex - 1);
    const nextHistory = history.length > 0 ? history.slice(0, -1) : history;

    saveAutoPosition(routeKey, nextBeatIndex, nextHistory);
    setHistory(nextHistory);
    setBeatIndex(nextBeatIndex);
  }

  function handleSave() {
    try {
      writeSavedGame(
        story.id,
        SAVE_SLOT_MANUAL,
        createSaveData({
          storyId: story.id,
          routeKey,
          beatIndex,
          history,
          slotId: SAVE_SLOT_MANUAL,
          protagonistName,
        }),
      );
      refreshSaveSlots();
      setSaveNotice('기본 저장됨');
    } catch {
      setSaveNotice('저장 실패');
    }
  }

  function handleLoad(slotId) {
    const savedGame = readSavedGame(story.id, slotId);
    const savedRoute = story.routes[savedGame?.routeKey];

    if (!savedGame || !savedRoute) {
      refreshSaveSlots();
      setSaveNotice('저장 없음');
      return;
    }

    const savedBeatIndex = Number(savedGame.beatIndex);
    const nextBeatIndex = Number.isFinite(savedBeatIndex)
      ? Math.min(Math.max(0, Math.trunc(savedBeatIndex)), savedRoute.beats.length)
      : 0;

    setRouteKey(savedGame.routeKey);
    setBeatIndex(nextBeatIndex);
    setProtagonistName(savedGame.protagonistName || protagonistName);
    setHistory(Array.isArray(savedGame.history) ? savedGame.history : []);
    setShowHistory(false);
    setShowLoadPanel(false);
    setShowReflection(false);
    refreshSaveSlots();
    setSaveNotice(`${getSaveSlotLabel(slotId)} 불러옴`);
    startSceneIntro();
  }

  async function toggleFullscreen() {
    try {
      if (getFullscreenElement()) {
        await exitFullscreen();
        return;
      }

      await requestFullscreen(document.documentElement);
    } catch {
      // Some in-app browsers block fullscreen; the button remains harmless.
    }
  }

  function updateTextScale(delta) {
    setTextScale((current) => {
      const next = clampTextScale(current + delta);
      try {
        window.localStorage.setItem(TEXT_SCALE_KEY, String(next));
      } catch {
        // Text size is still applied for this session when local storage is unavailable.
      }
      return next;
    });
  }

  function handleChoice(option) {
    if (!activeChoice) return;
    if (option.disabled) return;
    const nextRoute = story.routes[option.nextRoute];
    const selectedText = option.shortText || option.text;
    let nextHistory = appendHistoryEntry(history, {
      id: `${activeChoice.id}-${option.id}`,
      label: '선택',
      text: personalizeText(selectedText, protagonistName),
    });
    if (nextRoute?.recordSummary) {
      nextHistory = appendHistoryEntry(nextHistory, {
        id: `${option.nextRoute}-summary`,
        label: '기록 요약',
        text: personalizeText(nextRoute.recordSummary, protagonistName),
      });
    }
    setHistory(nextHistory);
    setShowLoadPanel(false);
    setShowHistory(false);
    goToRoute(option.nextRoute, nextHistory);
  }

  function restartStory() {
    saveAutoPosition(story.startRoute, 0, []);
    setRouteKey(story.startRoute);
    setBeatIndex(0);
    setHistory([]);
    setShowHistory(false);
    setShowLoadPanel(false);
    setShowReflection(false);
    startSceneIntro();
  }

  return (
    <main className="vn-screen">
      <div
        className={[
          'vn-stage',
          isFlashback ? 'is-flashback' : '',
          isRealityCrack ? 'is-reality-crack' : '',
          isSceneIntro ? 'is-scene-intro' : '',
        ].join(' ')}
        onClick={handleStageTap}
        style={{
          '--vn-text-scale': textScale,
        }}
      >
        <div
          className="stage-backdrop"
          style={{ backgroundImage: `url(${stageBeat?.bgImage})` }}
        />
        <div className="stage-scrim" />
        <header className="vn-topbar">
          <button
            className="ghost-button fullscreen-button"
            type="button"
            onClick={toggleFullscreen}
            aria-pressed={isFullscreen}
          >
            {isFullscreen ? '창 모드' : '전체 화면'}
          </button>
          <button className="ghost-button" type="button" onClick={onExit}>
            목록
          </button>
        </header>
        <div className="vn-location-badge">{displayedScenePlace}</div>
        {isFlashback ? <div className="vn-flashback-badge">회상 중</div> : null}

        <StageCharacters story={story} characters={stageBeat?.characters} />

        {showLoadPanel ? (
          <SaveLoadPanel
            story={story}
            saveSlots={saveSlots}
            onLoadSlot={handleLoad}
            onClose={() => setShowLoadPanel(false)}
            protagonistName={protagonistName}
          />
        ) : null}

        <div className="vn-content">
          {currentBeat ? (
            <DialogueBox
              beat={currentBeat}
              canGoBack={canGoBack}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onOpenHistory={() => setShowHistory(true)}
              onSave={handleSave}
              onLoad={() => setShowLoadPanel(true)}
              canOpenHistory={history.length > 0}
              hasSavedGame={hasSavedGame}
              saveNotice={saveNotice}
              onDecreaseTextScale={() => updateTextScale(-TEXT_SCALE_STEP)}
              onIncreaseTextScale={() => updateTextScale(TEXT_SCALE_STEP)}
              canDecreaseTextScale={canDecreaseTextScale}
              canIncreaseTextScale={canIncreaseTextScale}
              protagonistName={protagonistName}
              nextActionLabel={nextActionLabel}
            />
          ) : null}

          {activeEnding ? (
            <EndingPanel
              ending={activeEnding}
              onRestart={restartStory}
              onExit={onExit}
              onOpenReflection={() => setShowReflection(true)}
              activityHref={story.activityHref}
            />
          ) : null}
        </div>

        {activeChoice ? (
          <div className="choice-overlay" onClick={(event) => event.stopPropagation()}>
            <ChoicePanel
              choice={activeChoice}
              onChoose={handleChoice}
              onPrevious={handlePrevious}
              onOpenHistory={() => setShowHistory(true)}
              canOpenHistory={history.length > 0}
              canGoBack={canGoBackFromChoice}
            />
          </div>
        ) : null}
      </div>

      {showReflection ? (
        <ReflectionModal
          ending={activeEnding}
          fallbackQuestions={story.reflectionQuestions}
          onClose={() => setShowReflection(false)}
          protagonistName={protagonistName}
        />
      ) : null}

      {showHistory ? (
        <HistoryPanel history={history} onClose={() => setShowHistory(false)} />
      ) : null}
    </main>
  );
}
