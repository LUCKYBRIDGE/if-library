import { useState } from 'react';
import {
  formatSavedAt,
  getHasSavedGame,
  getSavedPositionLabel,
  readUnlockedEndings,
  readSaveSlots,
  unlockEnding,
} from '../lib/saveSlots.js';

function normalizeProtagonistName(value) {
  return Array.from(value.replace(/\s/g, '')).slice(0, 4).join('');
}

function getDefaultProtagonistName(story) {
  return story.defaultProtagonistName || '자라';
}

function getNameStartHelp(story) {
  return story.nameHelp || `이름은 1-4글자까지 쓸 수 있습니다. 주인공은 ${story.role}입니다.`;
}

function usesCustomProtagonistName(story) {
  return story.usesCustomProtagonistName !== false;
}

function DilemmaList({ items }) {
  const visibleItems = items.slice(0, 2);

  return (
    <ul className="dilemma-list">
      {visibleItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function getStoryEndings(story) {
  return Object.entries(story.endings || {}).filter(([, ending]) => Boolean(ending));
}

function getUnlockedEndingKeys(story) {
  const unlockedEndings = new Set(readUnlockedEndings(story.id));

  for (const slot of readSaveSlots(story.id)) {
    const savedGame = slot.savedGame;
    const route = story.routes[savedGame?.routeKey];
    const beatIndex = Number(savedGame?.beatIndex);

    if (route?.ending && Number.isFinite(beatIndex) && beatIndex >= route.beats.length) {
      unlockedEndings.add(savedGame.routeKey);
    }
  }

  return unlockedEndings;
}

function NameStartModal({ story, name, onChangeName, onCancel, onStart }) {
  const canStart = name.length > 0;

  return (
    <div className="name-start-overlay" role="presentation">
      <form
        className="name-start-modal"
        aria-labelledby="name-start-title"
        onSubmit={(event) => {
          event.preventDefault();
          if (canStart) onStart();
        }}
      >
        <button
          className="ghost-button modal-close-button"
          type="button"
          onClick={onCancel}
          aria-label="닫기"
        >
          ×
        </button>
        <span className="role-pill">이야기 시작</span>
        <h2 id="name-start-title">{story.title}</h2>
        <label className="name-start-field">
          <span>주인공 이름</span>
          <input
            autoFocus
            maxLength={4}
            value={name}
            onChange={(event) => onChangeName(normalizeProtagonistName(event.target.value))}
            placeholder="4글자까지"
            aria-describedby="name-start-help"
          />
        </label>
        <p id="name-start-help">{getNameStartHelp(story)}</p>
        <button className="primary-button" type="submit" disabled={!canStart}>
          시작
        </button>
      </form>
    </div>
  );
}

export function EndingCollection({ story, onBack, onStart }) {
  const [, setUnlockRevision] = useState(0);
  const endings = getStoryEndings(story);
  const unlockedEndingKeys = getUnlockedEndingKeys(story);

  function forceUnlockEnding(routeKey) {
    unlockEnding(story.id, routeKey);
    setUnlockRevision((revision) => revision + 1);
  }

  return (
    <main className="library-screen ending-collection-screen">
      <section className="library-header ending-collection-header" aria-labelledby="ending-list-title">
        <div>
          <p className="eyebrow">엔딩 모음</p>
          <h1 id="ending-list-title">{story.title}</h1>
        </div>
        <div className="ending-collection-actions">
          <button className="ghost-button" type="button" onClick={onBack}>
            돌아가기
          </button>
          <button className="primary-button" type="button" onClick={onStart}>
            처음부터
          </button>
        </div>
      </section>

      <section className="ending-grid" aria-label="엔딩 목록">
        {endings.map(([key, ending], index) => {
          const isUnlocked = unlockedEndingKeys.has(key);

          return (
            <article className={`ending-card ${isUnlocked ? '' : 'is-locked'}`} key={key}>
              <div
                className="ending-card-media"
                style={{
                  backgroundImage: isUnlocked
                    ? `url(${ending.bgImage || story.thumbnail})`
                    : `url(${story.thumbnail})`,
                }}
                aria-hidden="true"
              />
              <div className="ending-card-body">
                <span className="role-pill">END {index + 1}</span>
                <h2>{isUnlocked ? ending.title : '미확인 엔딩'}</h2>
                <p className="ending-card-location">
                  {isUnlocked ? ending.location : '아직 도달하지 못했습니다'}
                </p>
                <p className="ending-card-text">
                  {isUnlocked
                    ? ending.summary || ending.text
                    : '이 결말에 도달하면 제목과 마지막 장면이 공개됩니다.'}
                </p>
                {!isUnlocked ? (
                  <button
                    className="ghost-button force-ending-button"
                    type="button"
                    onClick={() => forceUnlockEnding(key)}
                  >
                    엔딩 강제 보기
                  </button>
                ) : null}
                {isUnlocked && ending.reflection?.questions?.length ? (
                  <div className="ending-question-block">
                    <span>되돌아볼 질문</span>
                    <ul>
                      {ending.reflection.questions.slice(0, 2).map((question) => (
                        <li key={question}>{question}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export function StorySelector({ stories, onSelect, onOpenEndings }) {
  const [expandedStoryId, setExpandedStoryId] = useState(null);
  const [pendingStory, setPendingStory] = useState(null);
  const [protagonistName, setProtagonistName] = useState('자라');

  return (
    <main className="library-screen">
      <section className="library-header" aria-labelledby="library-title">
        <div>
          <p className="eyebrow">놀퀴즈 인터랙티브 소설</p>
          <h1 id="library-title">스토리 선택</h1>
        </div>
        <p className="library-summary">
          원작 속 인물이 되어 읽고, 선택하고, 마지막 장면으로 생각을 이어가는
          체험형 이야기 공간.
        </p>
      </section>

      <section className="story-grid" aria-label="스토리 목록">
        {stories.map((story) => {
          const isExpanded = expandedStoryId === story.id;
          const detailsId = `${story.id}-details`;

          return (
            <article className="story-card" key={story.id}>
              <div
                className="story-card-media"
                style={{ backgroundImage: `url(${story.thumbnail})` }}
                aria-hidden="true"
              />
              <div className="story-card-body">
                <div className="card-title-row">
                  <span className="story-icon" aria-hidden="true">
                    {story.icon}
                  </span>
                  <div>
                    <h2>{story.title}</h2>
                    <p>{story.originalWork}</p>
                  </div>
                </div>
                <p className="story-description">{story.description}</p>

                {isExpanded ? (
                  <div className="story-details" id={detailsId}>
                    <dl className="story-facts">
                      <div>
                        <dt>역할</dt>
                        <dd>{story.role}</dd>
                      </div>
                      <div>
                        <dt>시작</dt>
                        <dd>{story.startLocation}</dd>
                      </div>
                    </dl>
                    <div className="dilemma-block">
                      <span>핵심 질문</span>
                      <DilemmaList items={story.dilemmaFocus} />
                    </div>
                  </div>
                ) : null}

                <div className="story-card-actions">
                  <button
                    className="ghost-button story-toggle-button"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => setExpandedStoryId(isExpanded ? null : story.id)}
                  >
                    {isExpanded ? '접기' : '자세히'}
                  </button>
                  {getStoryEndings(story).length ? (
                    <button
                      className="ghost-button story-ending-button"
                      type="button"
                      onClick={() => onOpenEndings?.(story)}
                    >
                      엔딩 모음
                    </button>
                  ) : null}
                  <button
                    className="primary-button"
                    type="button"
                    disabled={!story.playable}
                    onClick={() => {
                      if (!usesCustomProtagonistName(story)) {
                        onSelect(story.id, getDefaultProtagonistName(story));
                        return;
                      }

                      setPendingStory(story);
                      setProtagonistName(getDefaultProtagonistName(story));
                    }}
                  >
                    {story.playable ? '시작' : '준비 중'}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {pendingStory ? (
        <NameStartModal
          story={pendingStory}
          name={protagonistName}
          onChangeName={setProtagonistName}
          onCancel={() => setPendingStory(null)}
          onStart={() => onSelect(pendingStory.id, protagonistName)}
        />
      ) : null}
    </main>
  );
}

export function SingleStoryStart({ story, onStart, onLoad, onOpenEndings }) {
  const [protagonistName, setProtagonistName] = useState(() => getDefaultProtagonistName(story));
  const canCustomizeName = usesCustomProtagonistName(story);
  const canStart = protagonistName.length > 0;
  const saveSlots = readSaveSlots(story.id);
  const hasSavedGame = getHasSavedGame(saveSlots);
  const hasEndings = getStoryEndings(story).length > 0;
  const startName = canCustomizeName ? protagonistName : getDefaultProtagonistName(story);

  return (
    <main
      className="library-screen single-story-screen"
      style={{ backgroundImage: `linear-gradient(rgba(21, 23, 26, 0.62), rgba(21, 23, 26, 0.88)), url(${story.thumbnail})` }}
    >
      {hasSavedGame ? (
        <section
          className="single-story-start resume-start-panel"
          aria-labelledby="single-story-title"
        >
          <span className="role-pill">저장된 기록</span>
          <h1 id="single-story-title">{story.title}</h1>
          <p>저장된 진행을 불러오거나, 새 이름으로 처음부터 다시 시작할 수 있습니다.</p>
          <div className="resume-slot-list">
            {saveSlots.map((slot) => (
              <button
                className="save-slot-button resume-slot-button"
                type="button"
                key={slot.id}
                onClick={() => slot.savedGame && onLoad?.(slot.savedGame)}
                disabled={!slot.savedGame || !onLoad}
              >
                <strong>{slot.label}</strong>
                <span>
                  {slot.savedGame
                    ? `${formatSavedAt(slot.savedGame.savedAt)} · ${getSavedPositionLabel(
                        slot.savedGame,
                        story,
                        slot.savedGame.protagonistName,
                      )}에서 이어하기`
                    : '저장 없음'}
                </span>
              </button>
            ))}
          </div>
          {canCustomizeName ? (
            <label className="name-start-field resume-name-field">
              <span>처음부터 시작할 이름</span>
              <input
                maxLength={4}
                value={protagonistName}
                onChange={(event) =>
                  setProtagonistName(normalizeProtagonistName(event.target.value))
                }
                placeholder="4글자까지"
                aria-describedby="single-story-help"
              />
            </label>
          ) : null}
          <p id="single-story-help">처음부터 시작하면 자동 저장 1은 새 진행으로 갱신됩니다.</p>
          <div className="single-story-actions">
            {hasEndings ? (
              <button className="ghost-button" type="button" onClick={onOpenEndings}>
                엔딩 모음
              </button>
            ) : null}
            <button
              className="primary-button"
              type="button"
              disabled={canCustomizeName && !canStart}
              onClick={() => onStart(startName)}
            >
              처음부터
            </button>
          </div>
        </section>
      ) : (
        <section className="single-story-start" aria-labelledby="single-story-title">
          <span className="role-pill">인터랙티브 소설</span>
          <h1 id="single-story-title">{story.title}</h1>
          <p>{story.description}</p>
          {canCustomizeName ? (
            <>
              <label className="name-start-field">
                <span>주인공 이름</span>
                <input
                  autoFocus
                  maxLength={4}
                  value={protagonistName}
                  onChange={(event) =>
                    setProtagonistName(normalizeProtagonistName(event.target.value))
                  }
                  placeholder="4글자까지"
                  aria-describedby="single-story-help"
                />
              </label>
              <p id="single-story-help">{getNameStartHelp(story)}</p>
            </>
          ) : null}
          <div className="single-story-actions">
            {hasEndings ? (
              <button className="ghost-button" type="button" onClick={onOpenEndings}>
                엔딩 모음
              </button>
            ) : null}
            <button
              className="primary-button"
              type="button"
              disabled={canCustomizeName && !canStart}
              onClick={() => onStart(startName)}
            >
              시작
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
