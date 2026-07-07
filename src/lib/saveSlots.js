export const roleLabels = {
  narration: '해설',
  dialogue: '대사',
  thought: '속생각',
  action: '지문',
};

export const SAVE_VERSION = 1;
export const SAVE_SLOT_MANUAL = 'manual';
export const SAVE_SLOT_AUTO = 'auto-1';
export const SAVE_SLOTS = [
  { id: SAVE_SLOT_MANUAL, label: '기본 저장' },
  { id: SAVE_SLOT_AUTO, label: '자동 저장 1' },
];

function getSaveKey(storyId, slotId = SAVE_SLOT_MANUAL) {
  if (slotId === SAVE_SLOT_MANUAL) {
    return `if-library-save:${storyId}`;
  }

  return `if-library-save:${storyId}:${slotId}`;
}

function getEndingUnlockKey(storyId) {
  return `if-library-endings:${storyId}`;
}

export function createSaveData({ storyId, routeKey, beatIndex, history, slotId, protagonistName }) {
  return {
    version: SAVE_VERSION,
    storyId,
    slotId,
    routeKey,
    beatIndex,
    history,
    protagonistName: protagonistName?.trim() || '자라',
    savedAt: new Date().toISOString(),
  };
}

export function readUnlockedEndings(storyId) {
  if (typeof window === 'undefined') return [];

  try {
    const value = window.localStorage.getItem(getEndingUnlockKey(storyId));
    if (!value) return [];

    const parsedValue = JSON.parse(value);
    if (!Array.isArray(parsedValue)) return [];

    return parsedValue.filter((routeKey) => typeof routeKey === 'string');
  } catch {
    return [];
  }
}

export function unlockEnding(storyId, routeKey) {
  if (typeof window === 'undefined' || !routeKey) return;

  const unlockedEndings = new Set(readUnlockedEndings(storyId));
  unlockedEndings.add(routeKey);
  window.localStorage.setItem(
    getEndingUnlockKey(storyId),
    JSON.stringify([...unlockedEndings]),
  );
}

export function writeSavedGame(storyId, slotId, saveData) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(getSaveKey(storyId, slotId), JSON.stringify(saveData));
}

export function readSavedGame(storyId, slotId = SAVE_SLOT_MANUAL) {
  if (typeof window === 'undefined') return null;

  try {
    const value = window.localStorage.getItem(getSaveKey(storyId, slotId));
    if (!value) return null;

    const savedGame = JSON.parse(value);
    if (
      savedGame?.version !== SAVE_VERSION ||
      savedGame?.storyId !== storyId ||
      typeof savedGame?.routeKey !== 'string'
    ) {
      return null;
    }

    return savedGame;
  } catch {
    return null;
  }
}

export function readSaveSlots(storyId) {
  return SAVE_SLOTS.map((slot) => ({
    ...slot,
    savedGame: readSavedGame(storyId, slot.id),
  }));
}

export function getHasSavedGame(saveSlots) {
  return saveSlots.some((slot) => Boolean(slot.savedGame));
}

export function formatSavedAt(value) {
  if (!value) return '저장 없음';

  const savedAt = new Date(value);
  if (Number.isNaN(savedAt.getTime())) return '저장됨';

  return new Intl.DateTimeFormat('ko-KR', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(savedAt);
}

export function getSaveSlotLabel(slotId) {
  return SAVE_SLOTS.find((slot) => slot.id === slotId)?.label || '저장';
}

function getDisplaySpeaker(speaker, protagonistName) {
  return speaker === '주인공' ? protagonistName?.trim() || '자라' : speaker;
}

export function getSavedPositionLabel(savedGame, story, protagonistName) {
  const route = story.routes[savedGame?.routeKey];
  if (!route) return '이야기 위치';

  const beatIndex = Number(savedGame.beatIndex);
  if (!Number.isFinite(beatIndex) || beatIndex >= route.beats.length) {
    return route.choice ? '선택 앞' : '결말 앞';
  }

  const beat = route.beats[Math.max(0, Math.trunc(beatIndex))];
  return getDisplaySpeaker(beat?.speaker, protagonistName) || roleLabels[beat?.role] || '장면';
}
