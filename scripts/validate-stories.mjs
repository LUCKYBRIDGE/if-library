import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { stories } from '../src/data/stories.js';

const requiredStoryFields = [
  'id',
  'title',
  'status',
  'category',
  'originalWork',
  'motive',
  'sourceRespect',
  'studentGoal',
  'dilemmaFocus',
  'choiceWeight',
  'startLocation',
  'routes',
  'reflectionQuestions',
];

const requiredBeatFields = ['id', 'role', 'speaker', 'text'];
const requiredChoiceFields = ['id', 'prompt', 'choiceType', 'systemCue', 'options'];

const errors = [];

function getProtectedTextBalance(text) {
  let singleQuoteOpen = false;
  let doubleQuoteOpen = false;
  let parenDepth = 0;

  for (const char of text) {
    if (char === "'" || char === '‘' || char === '’') singleQuoteOpen = !singleQuoteOpen;
    if (char === '"' || char === '“' || char === '”') doubleQuoteOpen = !doubleQuoteOpen;
    if (char === '(' || char === '（') parenDepth += 1;
    if ((char === ')' || char === '）') && parenDepth > 0) parenDepth -= 1;
  }

  return { singleQuoteOpen, doubleQuoteOpen, parenDepth };
}

for (const story of stories) {
  for (const field of requiredStoryFields) {
    if (story[field] == null || story[field] === '') {
      errors.push(`${story.id || 'unknown'} is missing ${field}`);
    }
  }

  if (story.status === 'approved') {
    errors.push(`${story.id} must not be approved yet`);
  }

  if (!story.playable) continue;

  const routeEntries = Object.entries(story.routes || {});
  if (routeEntries.length === 0) {
    errors.push(`${story.id} has no playable routes`);
  }

  for (const [routeKey, route] of routeEntries) {
    for (const beat of route.beats || []) {
      for (const field of requiredBeatFields) {
        if (beat[field] == null) {
          errors.push(`${story.id}/${routeKey}/${beat.id} is missing ${field}`);
        }
      }

      const balance = getProtectedTextBalance(beat.text || '');
      if (balance.singleQuoteOpen || balance.doubleQuoteOpen || balance.parenDepth > 0) {
        errors.push(`${story.id}/${routeKey}/${beat.id} splits quoted or parenthesized text`);
      }

      const isLandOrShoreBeat =
        ['barren-land-hill', 'dawn-sandy-shore', 'shore-choice', 'winter-snowing-shore'].includes(
          beat.bg,
        ) || /육지|언덕|물가|모래톱|강가/.test(beat.scenePlace || '');
      const hasDragonKing = (beat.characters || []).some((character) => character.name === '용왕');
      if (isLandOrShoreBeat && hasDragonKing) {
        errors.push(`${story.id}/${routeKey}/${beat.id} shows 용왕 on a land or shore scene`);
      }
    }

    for (let index = 0; index < (route.beats || []).length - 1; index += 1) {
      const beat = route.beats[index];
      const nextBeat = route.beats[index + 1];
      if (beat.sourceBeatId !== nextBeat.sourceBeatId) continue;

      const beatEndsCleanly = /[.!?…'")］」』]$/.test(beat.text);
      if (!beatEndsCleanly && nextBeat.text.length < 10) {
        errors.push(`${story.id}/${routeKey}/${beat.id} leaves a too-short trailing cut`);
      }
    }

    if (route.choice) {
      for (const field of requiredChoiceFields) {
        if (route.choice[field] == null) {
          errors.push(`${story.id}/${routeKey} choice is missing ${field}`);
        }
      }

      for (const option of route.choice.options || []) {
        if (!option.id || !option.text || !option.nextRoute) {
          errors.push(`${story.id}/${routeKey} has an incomplete option`);
        }
        if (!option.reason || !option.cost || !option.lingeringEmotion) {
          errors.push(`${story.id}/${routeKey}/${option.id} lacks dilemma metadata`);
        }
      }
    }

    if (route.nextRoute && !story.routes[route.nextRoute]) {
      errors.push(`${story.id}/${routeKey} points to missing route ${route.nextRoute}`);
    }

    if (route.ending && !route.ending.title) {
      errors.push(`${story.id}/${routeKey} ending has no title`);
    }

    if (route.ending) {
      if (!route.ending.reflection?.decisionTitle) {
        errors.push(`${story.id}/${routeKey} ending has no reflection decision title`);
      }
      if ((route.ending.reflection?.decisions || []).length < 1) {
        errors.push(`${story.id}/${routeKey} ending has no reflection decision recap`);
      }
      const reflectionQuestions = route.ending.reflection?.questions || [];
      if (reflectionQuestions.length < 1) {
        errors.push(`${story.id}/${routeKey} ending needs at least one reflection question`);
      }
      reflectionQuestions.forEach((question, index) => {
        if (typeof question !== 'string' || question.trim().length === 0) {
          errors.push(`${story.id}/${routeKey} ending reflection question ${index + 1} is blank`);
        }
      });
    }
  }

  for (const assetPath of Object.values(story.assets?.backgrounds || {})) {
    if (!existsSync(resolve('public', assetPath.replace(/^\//, '')))) {
      errors.push(`${story.id} missing background asset ${assetPath}`);
    }
  }

  for (const sprite of Object.values(story.assets?.characters || {})) {
    for (const assetPath of Object.values(sprite.variants || {})) {
      if (!existsSync(resolve('public', assetPath.replace(/^\//, '')))) {
        errors.push(`${story.id} missing sprite asset ${assetPath}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${stories.length} stories and their playable route data.`);
