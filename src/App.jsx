import { useState } from 'react';
import { stories } from './data/stories.js';
import { SingleStoryStart, StorySelector } from './components/StorySelector.jsx';
import { VnPlayer } from './components/VnPlayer.jsx';
import { createSaveData, SAVE_SLOT_AUTO, writeSavedGame } from './lib/saveSlots.js';

const DEFAULT_DIRECT_STORY_ID = 'review-main-002';
const DIRECT_STORY_PATHS = {
  ifstory01: 'review-main-002',
  onggojib: 'review-main-003',
};

function getDefaultProtagonistName(story) {
  return story?.defaultProtagonistName || '자라';
}

function getInitialDirectStoryId() {
  if (typeof window === 'undefined') return null;

  const path = window.location.pathname.replace(/\/+$/, '');
  const params = new URLSearchParams(window.location.search);
  const storyParam = params.get('story');

  if (storyParam) return storyParam;

  const pathKey = path.split('/').filter(Boolean).at(-1);
  return DIRECT_STORY_PATHS[pathKey] || null;
}

function shouldAutoplayDirectStory() {
  if (typeof window === 'undefined') return false;

  const params = new URLSearchParams(window.location.search);
  return params.get('play') === '1' || params.get('autoplay') === '1';
}

export default function App() {
  const [directStoryId] = useState(getInitialDirectStoryId);
  const directStory = stories.find((story) => story.id === (directStoryId || DEFAULT_DIRECT_STORY_ID));
  const [selectedStoryId, setSelectedStoryId] = useState(() => {
    if (directStoryId && shouldAutoplayDirectStory() && directStory?.playable) {
      return directStory.id;
    }

    return null;
  });
  const [protagonistName, setProtagonistName] = useState(() => getDefaultProtagonistName(directStory));
  const [initialSave, setInitialSave] = useState(null);
  const selectedStory = stories.find((story) => story.id === selectedStoryId);

  function startStory(story, nextProtagonistName) {
    const nextName = nextProtagonistName || getDefaultProtagonistName(story);

    try {
      writeSavedGame(
        story.id,
        SAVE_SLOT_AUTO,
        createSaveData({
          storyId: story.id,
          routeKey: story.startRoute,
          beatIndex: 0,
          history: [],
          slotId: SAVE_SLOT_AUTO,
          protagonistName: nextName,
        }),
      );
    } catch {
      // Starting the story should still work if local storage is unavailable.
    }

    setInitialSave(null);
    setProtagonistName(nextName);
    setSelectedStoryId(story.id);
  }

  function loadStory(story, savedGame) {
    setInitialSave(savedGame);
    setProtagonistName(savedGame?.protagonistName || getDefaultProtagonistName(story));
    setSelectedStoryId(story.id);
  }

  if (selectedStory) {
    return (
      <VnPlayer
        story={selectedStory}
        protagonistName={protagonistName}
        initialSave={initialSave}
        onExit={() => {
          setSelectedStoryId(null);
          setInitialSave(null);
          setProtagonistName(getDefaultProtagonistName(directStory));
        }}
      />
    );
  }

  if (directStoryId && directStory) {
    return (
      <SingleStoryStart
        story={directStory}
        onStart={(nextProtagonistName) => {
          startStory(directStory, nextProtagonistName);
        }}
        onLoad={(savedGame) => loadStory(directStory, savedGame)}
      />
    );
  }

  return (
    <StorySelector
      stories={stories.filter((story) => story.playable)}
      onSelect={(storyId, nextProtagonistName) => {
        const story = stories.find((item) => item.id === storyId);
        if (!story) return;
        startStory(story, nextProtagonistName);
      }}
    />
  );
}
