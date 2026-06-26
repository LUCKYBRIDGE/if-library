import { useState } from 'react';
import { stories } from './data/stories.js';
import { SingleStoryStart, StorySelector } from './components/StorySelector.jsx';
import { VnPlayer } from './components/VnPlayer.jsx';

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
  const selectedStory = stories.find((story) => story.id === selectedStoryId);

  if (selectedStory) {
    return (
      <VnPlayer
        story={selectedStory}
        protagonistName={protagonistName}
        onExit={() => {
          setSelectedStoryId(null);
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
          setProtagonistName(nextProtagonistName || getDefaultProtagonistName(directStory));
          setSelectedStoryId(directStory.id);
        }}
      />
    );
  }

  return (
    <StorySelector
      stories={stories.filter((story) => story.playable)}
      onSelect={(storyId, nextProtagonistName) => {
        setProtagonistName(nextProtagonistName || '자라');
        setSelectedStoryId(storyId);
      }}
    />
  );
}
