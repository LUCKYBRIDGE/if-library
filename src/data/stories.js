import { adventureApprovedStories } from './source/reviewMain002ApprovedSource.js';
import { reviewMain003OnggojibSource } from './source/reviewMain003OnggojibSource.js';

const reviewMain002Source = adventureApprovedStories['review-main-002'];

const IMAGE_ROOT = './images/adventure/';

const CHARACTER_ROOT = `${IMAGE_ROOT}characters/`;
const GENERATED_CHARACTER_ROOT = `${CHARACTER_ROOT}generated/`;
const ONGGOJIB_CHARACTER_ROOT = `${CHARACTER_ROOT}onggojib/`;
const ONGGOJIB_BACKGROUND_ROOT = `${IMAGE_ROOT}backgrounds/onggojib/`;

const turtleSprite = `${GENERATED_CHARACTER_ROOT}adventure_turtle_unified_720x900.png`;
const turtleChildSprite = `${GENERATED_CHARACTER_ROOT}adventure_turtle_child_unified_720x900.png`;
const rabbitSprite = `${GENERATED_CHARACTER_ROOT}adventure_rabbit_white_unified_720x900.png`;
const dragonKingSprite = `${GENERATED_CHARACTER_ROOT}adventure_dragonking_unified_720x900.png`;
const dragonKingYoungSprite = `${GENERATED_CHARACTER_ROOT}adventure_dragonking_young_unified_720x900.png`;
const dragonKingRecoveredSprite = `${GENERATED_CHARACTER_ROOT}adventure_dragonking_recovered_unified_720x900.png`;
const physicianSprite = `${GENERATED_CHARACTER_ROOT}adventure_physician_unified_720x900.png`;

const onggojibWifeSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_wife_pixel.png`;
const onggojibWifeResolvedSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_wife_resolved_pixel.png`;
const onggojibWifeConcernedSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_wife_concerned_pixel.png`;
const onggojibRealSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_real_pixel.png`;
const onggojibRealAngrySprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_real_angry_pixel.png`;
const onggojibRealRemorseSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_real_remorse_pixel.png`;
const onggojibRealExiledSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_real_exiled_pixel.png`;
const onggojibRealBorrowedSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_real_borrowed_pixel.png`;
const onggojibDoubleSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_double_real_source_pixel.png`;
const onggojibDoubleGentleSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_double_blue_gentle_pixel.png`;
const onggojibDoubleOfferingSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_double_blue_offering_pixel.png`;
const onggojibMagistrateSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_magistrate_pixel.png`;
const onggojibMagistrateCommandSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_magistrate_command_pixel.png`;
const onggojibPosolSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_posol_pixel.png`;
const onggojibStrangerHiddenSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_stranger_hidden_pixel.png`;
const onggojibChildSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_child_pixel.png`;
const onggojibSecondChildSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_second_child_pixel.png`;
const onggojibSecondChildHesitantSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_second_child_hesitant_pixel.png`;
const onggojibYoungestChildSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_youngest_child_pixel.png`;
const onggojibYoungestChildCautiousSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_youngest_child_cautious_pixel.png`;
const onggojibHouseholdServantSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_servant_household_pixel.png`;
const onggojibServantInjuredSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_servant_injured_pixel.png`;
const onggojibWorkerSprite = `${ONGGOJIB_CHARACTER_ROOT}onggojib_worker_woodcutter_v2_pixel.png`;

const backgroundAssets = {
  'palace-hall-dim': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_palace_welcome.png`,
  'palace-hall-flashback': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_flashback_rescue.png`,
  'palace-hall-dark': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_palace_trap.png`,
  'barren-land-hill': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_grassland.png`,
  'dawn-sandy-shore': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_shore_escape.png`,
  'winter-snowing-shore': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_river_winter.png`,
  'palace-hall-gold': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_palace.png`,
  'palace-hall-very-dim': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_palace_confession.png`,
  'shore-choice': `${IMAGE_ROOT}backgrounds/adventure_rabbit_turtle_bg_shore.png`,
};

const scenePlaceByBg = {
  'palace-hall-dim': '용궁 대청',
  'palace-hall-flashback': '회상 속 바닷가',
  'palace-hall-dark': '용궁 대청',
  'barren-land-hill': '황량한 육지 언덕',
  'dawn-sandy-shore': '육지 모래톱',
  'winter-snowing-shore': '육지 강가',
  'palace-hall-gold': '용궁 대청',
  'palace-hall-very-dim': '어두운 용궁 대청',
  'shore-choice': '육지 물가',
};

const characterAssets = {
  주인공: {
    side: 'right',
    facing: 'left',
    alt: '자라 주인공',
    variants: {
      default: turtleSprite,
      palace: turtleSprite,
      shore: turtleSprite,
      ashamed: turtleSprite,
      resolve: turtleSprite,
      child: turtleChildSprite,
    },
  },
  토끼: {
    side: 'left',
    facing: 'right',
    alt: '토끼',
    variants: {
      default: rabbitSprite,
      palace: rabbitSprite,
      shore: rabbitSprite,
      escape: rabbitSprite,
      truth: rabbitSprite,
      herb: rabbitSprite,
    },
  },
  용왕: {
    side: 'left',
    facing: 'left',
    alt: '용왕',
    scale: 1.1,
    variants: {
      default: dragonKingSprite,
      sick: dragonKingSprite,
      critical: dragonKingSprite,
      young: dragonKingYoungSprite,
      recovered: dragonKingRecoveredSprite,
      command: dragonKingSprite,
    },
  },
  의관: {
    side: 'left',
    facing: 'right',
    alt: '용궁 의관',
    variants: {
      default: physicianSprite,
      worried: physicianSprite,
    },
  },
};

const routeDefaults = {
  start: {
    title: '1막: 용궁 대청',
    scenePlace: '용궁 대청',
    sceneTime: '저녁, 육지로 떠나기 전',
    defaultBg: 'palace-hall-dim',
  },
  'obey-route': {
    title: '첫마디: 용궁 잔치',
    scenePlace: '황량한 육지 언덕',
    sceneTime: '겨울 저녁',
    defaultBg: 'barren-land-hill',
  },
  'hesitate-route': {
    title: '첫마디: 도움 요청',
    scenePlace: '황량한 육지 언덕',
    sceneTime: '겨울 저녁',
    defaultBg: 'barren-land-hill',
  },
  palace: {
    title: '2막: 초대가 함정으로 바뀌는 순간',
    scenePlace: '용궁 대청',
    sceneTime: '토끼가 도착한 직후',
    defaultBg: 'palace-hall-dark',
  },
  'shield-route': {
    title: '선택 결과: 살리기 위한 거짓',
    scenePlace: '용궁 대청',
    sceneTime: '물문을 나서기 전',
    defaultBg: 'palace-hall-dark',
  },
  shoreAfterShield: {
    title: '3막: 육지 모래톱',
    scenePlace: '육지 모래톱',
    sceneTime: '새벽, 육지에 돌아온 직후',
    defaultBg: 'dawn-sandy-shore',
  },
  'ending-1': {
    title: '마지막 장면으로 가는 길',
    scenePlace: '용궁 대청',
    sceneTime: '며칠 뒤 저녁',
    defaultBg: 'palace-hall-gold',
  },
  'ending-2': {
    title: '마지막 장면',
    scenePlace: '육지 강가',
    sceneTime: '수개월 뒤 겨울',
    defaultBg: 'winter-snowing-shore',
  },
  'ending-3': {
    title: '마지막 장면',
    scenePlace: '어두운 용궁 대청',
    sceneTime: '다음 날 새벽',
    defaultBg: 'palace-hall-very-dim',
  },
};

const sceneTextOverrides = {
  'palace-welcome-1':
    '나는 용궁 대청에서 용왕님을 모시는 자라였다. 어두워진 용궁 대청에 조개등 불빛이 켜졌다. 나는 약사발을 들고 누워 계신 용왕님께 다가갔다. 첫날에 올린 해초 삶은 물도, 둘째 날에 올린 조개가루 약도 효과가 없었다. 용왕님의 얼굴은 이틀 전보다 훨씬 어둡고 파리했다.',
  'palace-welcome-3':
    "나는 어릴 때 큰비에 휩쓸려 짠물 가득한 바다로 떠내려왔다. 숨이 막혀 등껍질을 웅크리고 있을 때, 젊은 용왕님이 호위들을 물리고 내 앞에 무릎을 낮추셨다. 전하께서는 차가운 내 앞발을 두 손으로 감싸 쥐고, 자신의 비늘로 만든 '바다의 숨결(용궁 패)'을 내 목에 걸어 주셨다.",
  'palace-welcome-4':
    '그럼 이곳에서는 서두르지 않아도 된다. 네가 본 것을 천천히, 있는 그대로 말해 다오. 잘 보이려고 꾸미지 않아도 좋다. 작은 목소리라도 내가 끝까지 듣겠다.',
  'palace-welcome-4-thought':
    '그날 이후 용왕님은 내 말을 재촉하지 않았다. 내가 더듬거리면 기다려 주셨고, 작은 사실 하나를 말해도 고개를 끄덕여 주셨다. 그래서 나는 전하 앞에서는 숨거나 꾸미지 않아도 된다고 믿게 되었다.',
};

const reviewCueOverrides = {
  'palace-welcome-3': {
    transition: 'blur-to-flashback',
    screenDirection: '화면이 뿌옇게 흐려지며 과거 회상 스틸컷으로 전환',
    visualMode: 'flashback',
  },
  'palace-welcome-5': {
    transition: 'return-to-present',
    screenDirection: '회상에서 현실 대청 화면으로 복귀',
  },
  'episode-main-obey-6': {
    cutscene: '토끼가 자라의 등에 타는 컷씬 연출',
    screenDirection: '토끼가 자라의 등에 타는 컷씬 연출',
  },
  'episode-main-hesitate-6': {
    cutscene: '토끼가 자라의 뒤로 조심스럽게 올라타는 연출',
    screenDirection: '토끼가 자라의 뒤로 조심스럽게 올라타는 연출',
  },
  'shore-arrive-4': {
    cutscene: '토끼 스프라이트가 투명해지며 빠르게 숲쪽으로 퇴장',
    screenDirection: '토끼 스프라이트가 투명해지며 빠르게 숲쪽으로 퇴장',
  },
};

const endingReflections = {
  'ending-1': {
    decisionTitle: '진실을 말하고 토끼를 희생시킨 결말',
    decisions: [
      '토끼의 거짓말을 용왕 앞에서 바로잡았다.',
      '용왕의 생명과 신하의 정직을 지켰지만, 토끼가 살아날 마지막 기회를 막았다.',
    ],
    questions: [
      '자라가 용왕 앞에서 토끼가 “간을 빼두고 왔다”고 한 말이 거짓이라고 밝힌 것은 무엇을 지키려 한 선택이었을까?',
    ],
  },
  'ending-2': {
    decisionTitle: '왕을 속인 뒤 돌아가지 않은 결말',
    decisions: [
      '토끼를 살리기 위해 용왕을 속였다.',
      '실패와 처벌이 두려워 용궁으로 돌아가지 않고 스스로 추방을 택했다.',
    ],
    questions: [
      '자라가 토끼를 육지로 돌려보낸 뒤 용궁으로 돌아가지 않고 “바다의 숨결”을 버린 것은 책임을 진 행동일까, 책임을 피한 행동일까?',
    ],
  },
  'ending-3': {
    decisionTitle: '거짓을 자백하고 책임을 감당한 결말',
    decisions: [
      '토끼를 살리기 위해 용왕을 속였다.',
      '도망치지 않고 용궁으로 돌아가 거짓말과 실패를 직접 고백했다.',
    ],
    questions: [
      '용왕이 자라의 “바다의 숨결”을 거두고 강물로 보낸 것은 벌일까, 마지막 자비일까? 이야기의 어떤 말이나 행동이 그렇게 보이게 할까?',
    ],
  },
};

const choiceMetadata = {
  firstChoice: {
    id: 'first-choice',
    choiceType: 'light',
    choiceWeight: 'light',
    systemCue: '토끼 앞 첫마디 선택지 UI 등장. 핵심 결말 분기는 아님.',
    label: '첫마디 선택',
    scenePlace: '황량한 육지 언덕',
    sceneTime: '겨울 저녁',
    bg: 'barren-land-hill',
    characterRouteKey: 'obey-route',
    options: {
      obey: {
        choiceType: 'light',
        shortText: '용궁 잔치의 손님으로 초대한다고 말한다.',
        reason: '잔치 초대로 토끼가 따라올 명분을 만든다.',
        cost: '목적을 숨긴다.',
        lingeringEmotion: '말이 부드러울수록 숨긴 사실이 무겁다.',
      },
      hesitate: {
        choiceType: 'light',
        shortText: '병든 이를 도와달라고 말한다.',
        reason: '병든 이를 돕자는 부탁으로 말을 꺼낸다.',
        cost: '간이 필요하다는 사실은 말하지 못한다.',
        lingeringEmotion: '진실에 가까운 말이어도 숨긴 사실이 남는다.',
      },
    },
  },
  palace: {
    id: 'palace-testimony',
    choiceType: 'dilemma',
    choiceWeight: 'core',
    systemCue: '화면에 선택지 UI 등장. 배경 음악이 서서히 페이드아웃 되며 무음 처리.',
    label: '증언 선택',
    options: {
      truth: {
        choiceType: 'dilemma',
        shortText: '토끼의 말은 거짓입니다.',
        reason: '용왕에게 평생 약속한 정직과 신하의 책임을 지킨다.',
        cost: '내 한마디로 토끼가 살아날 마지막 기회를 막는다.',
        helps: ['용왕', '수중 세계'],
        hurts: ['토끼', '자라의 양심'],
        lingeringEmotion: '공로와 죄책감이 함께 남는다.',
        notCorrectAnswer: true,
      },
      shield: {
        choiceType: 'dilemma',
        shortText: '토끼의 말은 진실입니다.',
        reason: '토끼가 억울하게 죽지 않도록 거짓말에 맞춰 시간을 번다.',
        cost: '용왕이 가장 믿는 내 증언으로 용왕을 직접 속인다.',
        helps: ['토끼'],
        hurts: ['용왕', '자라와 용궁의 신뢰'],
        lingeringEmotion: '살렸다는 안도와 배신했다는 무게가 동시에 남는다.',
        notCorrectAnswer: true,
      },
    },
  },
  shoreAfterShield: {
    id: 'shore-responsibility',
    choiceType: 'dilemma',
    choiceWeight: 'core',
    systemCue: '화면에 마지막 분기 선택지 UI 등장.',
    label: '책임 선택',
    options: {
      exile: {
        choiceType: 'dilemma',
        shortText: '용궁으로 돌아가지 않는다',
        reason: '처벌을 피하고 토끼를 살린 선택을 끝까지 감추려 한다.',
        cost: '용왕에게 돌아가 설명할 기회를 스스로 버리고 바다의 숨결도 내려놓는다.',
        helps: ['자라의 생존'],
        hurts: ['용왕과의 관계', '자라의 소속감'],
        lingeringEmotion: '살아남지만 끝내 돌아가지 못한 부끄러움이 남는다.',
        notCorrectAnswer: true,
      },
      return: {
        choiceType: 'dilemma',
        shortText: '돌아가서 직접 고백한다',
        reason: '거짓 보고와 실패를 자기 입으로 말하며 선택의 책임을 진다.',
        cost: '처벌받을 수 있고, 바다에서 살 자격을 잃을 수 있다.',
        helps: ['자라의 양심', '마지막 신뢰의 가능성'],
        hurts: ['자라의 자리', '용왕의 기대'],
        lingeringEmotion: '상실은 크지만 도망치지 않았다는 무거운 평온이 남는다.',
        notCorrectAnswer: true,
      },
    },
  },
};

const roleByType = {
  narration: 'narration',
  dialogue: 'dialogue',
  thought: 'thought',
  action: 'action',
};

const maxCutLengthByRole = {
  dialogue: 58,
  thought: 60,
  action: 60,
  narration: 62,
};

function splitTextIntoCuts(text, role) {
  const maxLength = maxCutLengthByRole[role] || 96;
  const hardMaxLength = maxLength + 8;
  const minTailLength = 10;
  if (!text || text.length <= maxLength) return [text];

  const packPieces = (pieces) => {
    const chunks = [];
    let current = '';

    for (const piece of pieces.map((value) => value.trim()).filter(Boolean)) {
      const next = current ? `${current} ${piece}` : piece;
      if (current && next.length > maxLength && piece.length >= minTailLength) {
        chunks.push(current);
        current = piece;
      } else {
        current = next;
      }
    }

    if (current) chunks.push(current);

    for (let index = chunks.length - 2; index >= 0; index -= 1) {
      const next = chunks[index + 1];
      const merged = `${chunks[index]} ${next}`;
      if (next.length < minTailLength && merged.length <= hardMaxLength) {
        chunks.splice(index, 2, merged);
      }
    }

    return chunks;
  };

  const polishCutBoundaries = (cuts) =>
    cuts.map((cut, index) =>
      index < cuts.length - 1 ? cut.replace(/[,，、;:]$/, '...') : cut,
    );

  const tokenizeByProtectedWords = (value) => {
    const tokens = [];
    let token = '';
    let singleQuoteOpen = false;
    let doubleQuoteOpen = false;
    let parenDepth = 0;

    const pushToken = () => {
      if (token.trim()) tokens.push(token.trim());
      token = '';
    };

    for (const char of value) {
      const isProtected = singleQuoteOpen || doubleQuoteOpen || parenDepth > 0;

      if (/\s/.test(char) && !isProtected) {
        pushToken();
        continue;
      }

      token += char;

      if (char === "'" || char === '‘' || char === '’') singleQuoteOpen = !singleQuoteOpen;
      if (char === '"' || char === '“' || char === '”') doubleQuoteOpen = !doubleQuoteOpen;
      if (char === '(' || char === '（') parenDepth += 1;
      if ((char === ')' || char === '）') && parenDepth > 0) parenDepth -= 1;
    }

    pushToken();
    return tokens;
  };

  const splitByClauseBoundaries = (value) => {
    const clauses = [];
    let current = '';
    let singleQuoteOpen = false;
    let doubleQuoteOpen = false;
    let parenDepth = 0;

    const isOutsideProtectedText = () => !singleQuoteOpen && !doubleQuoteOpen && parenDepth === 0;

    for (const char of value) {
      current += char;

      if (char === "'" || char === '‘' || char === '’') singleQuoteOpen = !singleQuoteOpen;
      if (char === '"' || char === '“' || char === '”') doubleQuoteOpen = !doubleQuoteOpen;
      if (char === '(' || char === '（') parenDepth += 1;
      if ((char === ')' || char === '）') && parenDepth > 0) parenDepth -= 1;

      if (/[,:;，、]/.test(char) && isOutsideProtectedText()) {
        clauses.push(current.trim());
        current = '';
      }
    }

    if (current.trim()) clauses.push(current.trim());
    return clauses;
  };

  const splitLongPiece = (value) => {
    const clauses = splitByClauseBoundaries(value);
    const clausePieces = clauses.flatMap((clause) =>
      clause.length > hardMaxLength ? packPieces(tokenizeByProtectedWords(clause)) : [clause],
    );
    return packPieces(clausePieces);
  };

  const splitIntoSentences = (value) => {
    const sentences = [];
    let start = 0;
    let singleQuoteOpen = false;
    let doubleQuoteOpen = false;
    let parenDepth = 0;

    const pushSentence = (endIndex) => {
      const sentence = value.slice(start, endIndex).trim();
      if (sentence) sentences.push(sentence);
      start = endIndex;
      while (/\s/.test(value[start])) start += 1;
    };

    for (let index = 0; index < value.length; index += 1) {
      const char = value[index];
      const previous = value[index - 1] || '';

      if (char === "'" || char === '‘' || char === '’') singleQuoteOpen = !singleQuoteOpen;
      if (char === '"' || char === '“' || char === '”') doubleQuoteOpen = !doubleQuoteOpen;
      if (char === '(' || char === '（') parenDepth += 1;
      if ((char === ')' || char === '）') && parenDepth > 0) parenDepth -= 1;

      const closesQuotedSentence =
        /['"”’)]/.test(char) &&
        /[.!?…]/.test(previous) &&
        !singleQuoteOpen &&
        !doubleQuoteOpen &&
        parenDepth === 0;
      const endsSentence =
        /[.!?…]/.test(char) && !singleQuoteOpen && !doubleQuoteOpen && parenDepth === 0;

      if (endsSentence || closesQuotedSentence) {
        let endIndex = index + 1;
        while (/['"”’)]/.test(value[endIndex])) endIndex += 1;
        if (/\s|$/.test(value[endIndex] || '')) {
          pushSentence(endIndex);
          index = endIndex;
        }
      }
    }

    const tail = value.slice(start).trim();
    if (tail) sentences.push(tail);
    return sentences;
  };

  const sentencePieces = splitIntoSentences(text).flatMap((sentence) =>
    sentence.length > hardMaxLength ? splitLongPiece(sentence) : [sentence],
  );

  return polishCutBoundaries(packPieces(sentencePieces));
}

function textWithoutLeadingAction(text) {
  const match = text.match(/^\(([^)]+)\)\s*(.*)$/);
  if (!match) return null;
  return {
    action: match[1],
    dialogue: match[2],
  };
}

function createSegments(scene) {
  if (scene.segments) return scene.segments;

  if (scene.type === 'dialogue') {
    const split = textWithoutLeadingAction(scene.text);
    if (split) {
      return [
        { type: 'description', text: split.action },
        { type: 'dialogue', speaker: scene.speaker, text: split.dialogue },
      ];
    }
  }

  return [
    {
      type:
        scene.type === 'thought'
          ? 'thought'
          : scene.type === 'action'
            ? 'description'
            : scene.type,
      speaker: scene.speaker,
      text: scene.text,
    },
  ];
}

function inferVariant(character, scene, routeKey) {
  const expression = scene.expression || '';

  if (character === '주인공') {
    if (scene.flashback || expression.includes('young-turtle')) return 'child';
    if (expression.includes('resolve') || expression.includes('earnestly')) return 'resolve';
    if (
      expression.includes('ashamed') ||
      expression.includes('bitter') ||
      expression.includes('clenched') ||
      expression.includes('trembling') ||
      expression.includes('eyes-closed') ||
      routeKey?.startsWith('ending')
    ) {
      return 'ashamed';
    }
    if (routeKey === 'shoreAfterShield') return 'shore';
    if (routeKey === 'palace' || routeKey === 'shield-route' || routeKey === 'start') return 'palace';
    return 'default';
  }

  if (character === '토끼') {
    if (
      expression.includes('bloodshot') ||
      expression.includes('teary') ||
      expression.includes('shocked') ||
      routeKey === 'palace'
    ) {
      return 'palace';
    }
    if (expression.includes('stopping') || expression.includes('escape')) return 'escape';
    if (routeKey === 'shoreAfterShield') return 'shore';
    return 'default';
  }

  if (character === '용왕') {
    if (scene.flashback || expression.includes('young')) return 'young';
    if (routeKey === 'ending-1' || expression.includes('recovered')) return 'recovered';
    if (
      expression.includes('critical') ||
      expression.includes('deep-pain') ||
      expression.includes('command') ||
      routeKey === 'palace'
    ) {
      return 'critical';
    }
    return 'sick';
  }

  if (character === '의관') return 'worried';

  return 'default';
}

function characterEntry(character, scene, routeKey, isActive = false) {
  const base = characterAssets[character];
  const variant = inferVariant(character, scene, routeKey);
  return {
    name: character,
    side: base?.side || 'left',
    facing: base?.variantFacings?.[variant] || base?.facing || 'right',
    variant,
    active: isActive,
  };
}

function getSceneCharacterContext(scene, routeKey) {
  if (scene.bg === 'barren-land-hill') return 'obey-route';
  if (scene.bg === 'dawn-sandy-shore' || scene.bg === 'shore-choice') return 'shoreAfterShield';
  if (scene.bg === 'winter-snowing-shore') return 'ending-2';
  return routeKey;
}

function inferCharacters(scene, routeKey) {
  const characterContext = getSceneCharacterContext(scene, routeKey);

  if (scene.flashback) {
    const isRapportMemory = [
      'palace-welcome-3',
      'palace-welcome-3-dialogue',
      'palace-welcome-3-response',
      'palace-welcome-4',
    ].includes(scene.id);
    return [
      characterEntry('용왕', scene, characterContext, isRapportMemory || scene.speaker === '용왕'),
      characterEntry(
        '주인공',
        scene,
        characterContext,
        isRapportMemory || scene.speaker === '주인공' || scene.type === 'thought',
      ),
    ];
  }

  if (scene.speaker === '의관') {
    return [
      characterEntry('의관', scene, characterContext, true),
      characterEntry('주인공', scene, characterContext, false),
    ];
  }

  if (scene.speaker === '용왕') {
    return [
      characterEntry('용왕', scene, characterContext, true),
      characterEntry('주인공', scene, characterContext, false),
    ];
  }

  if (scene.speaker === '토끼') {
    return [
      characterEntry('토끼', scene, characterContext, true),
      characterEntry('주인공', scene, characterContext, false),
    ];
  }

  if (scene.speaker === '주인공' || scene.type === 'thought') {
    const leftCharacter =
      characterContext === 'start' || characterContext === 'shield-route' ? '용왕' : '토끼';
    return [
      characterEntry(leftCharacter, scene, characterContext, false),
      characterEntry('주인공', scene, characterContext, true),
    ];
  }

  if (characterContext === 'start' || characterContext === 'ending-3') {
    return [
      characterEntry('용왕', scene, characterContext, false),
      characterEntry('주인공', scene, characterContext, false),
    ];
  }

  if (characterContext === 'ending-2') {
    return [characterEntry('주인공', scene, characterContext, false)];
  }

  return [
    characterEntry('토끼', scene, characterContext, false),
    characterEntry('주인공', scene, characterContext, false),
  ];
}

function normalizeSceneBeat(scene, routeKey, index) {
  const fallbackBg = routeDefaults[routeKey]?.defaultBg || 'palace-hall-dim';
  const cue = reviewCueOverrides[scene.id] || {};
  const bg = scene.bg || fallbackBg;
  const role = roleByType[scene.type] || scene.type || 'narration';
  const text = sceneTextOverrides[scene.id] || scene.text;

  return {
    id: scene.id || `${routeKey}-${index + 1}`,
    role,
    type: scene.type,
    speaker: scene.speaker || (role === 'thought' ? '속생각' : '해설'),
    text,
    sourceText: scene.text,
    segments: createSegments({
      ...scene,
      text,
    }),
    bg,
    bgImage: backgroundAssets[bg] || backgroundAssets[fallbackBg],
    scenePlace: cue.scenePlace || scene.scenePlace || scenePlaceByBg[bg] || routeDefaults[routeKey]?.scenePlace,
    sceneTime: cue.sceneTime || scene.sceneTime || routeDefaults[routeKey]?.sceneTime || '',
    bgm: scene.bgm || null,
    sfx: scene.sfx || null,
    expression: scene.expression || null,
    spriteVariant: scene.expression || null,
    characters: inferCharacters(scene, routeKey),
    visualMode: cue.visualMode || (scene.flashback ? 'flashback' : 'present'),
    transition: cue.transition || null,
    screenDirection: cue.screenDirection || null,
    cutscene: cue.cutscene || null,
    systemCue: cue.systemCue || null,
    sourceFields: {
      hasBackground: Boolean(scene.bg),
      hasBgm: Boolean(scene.bgm),
      hasSfx: Boolean(scene.sfx),
      hasExpression: Boolean(scene.expression),
      hasScreenDirection: Boolean(cue.screenDirection),
    },
  };
}

function splitBeatForDisplay(beat) {
  const cuts = splitTextIntoCuts(beat.text, beat.role);
  if (cuts.length === 1) return [beat];

  return cuts.map((text, index) => ({
    ...beat,
    id: `${beat.id}-cut-${index + 1}`,
    text,
    segments: createSegments({
      type: beat.type,
      speaker: beat.speaker,
      text,
    }),
    cutIndex: index + 1,
    cutTotal: cuts.length,
    sourceBeatId: beat.id,
    scenePlace: beat.scenePlace,
    sceneTime: beat.sceneTime,
    sfx: index === 0 ? beat.sfx : null,
    systemCue: index === 0 ? beat.systemCue : null,
  }));
}

function normalizeSceneBeats(scene, routeKey, index) {
  return splitBeatForDisplay(normalizeSceneBeat(scene, routeKey, index));
}

function normalizeChoice(sourceChoice, key) {
  const metadata = choiceMetadata[key];

  return {
    id: metadata.id,
    label: metadata.label,
    prompt: sourceChoice.prompt,
    beforeText: sourceChoice.prompt,
    choiceType: metadata.choiceType,
    choiceWeight: metadata.choiceWeight,
    systemCue: metadata.systemCue,
    scenePlace: metadata.scenePlace || null,
    sceneTime: metadata.sceneTime || null,
    bg: metadata.bg || null,
    characterRouteKey: metadata.characterRouteKey || null,
    options: sourceChoice.options.map((option) => ({
      id: option.id,
      text: option.text,
      nextRoute: option.nextStep,
      ...metadata.options[option.id],
    })),
  };
}

function createChoiceIntroBeats(choice, routeKey) {
  const fallbackBg = routeDefaults[routeKey]?.defaultBg || 'palace-hall-dim';
  const bg = choice.bg || fallbackBg;
  const characterRouteKey = choice.characterRouteKey || routeKey;
  const introBeat = {
    id: `${choice.id}-before`,
    role: 'narration',
    type: 'narration',
    speaker: '선택 전 문장',
    text: choice.beforeText,
    sourceText: choice.beforeText,
    segments: createSegments({
      type: 'narration',
      speaker: '선택 전 문장',
      text: choice.beforeText,
    }),
    bg,
    bgImage: backgroundAssets[bg] || backgroundAssets[fallbackBg],
    scenePlace: choice.scenePlace || scenePlaceByBg[bg] || routeDefaults[routeKey]?.scenePlace,
    sceneTime: choice.sceneTime || routeDefaults[routeKey]?.sceneTime || '',
    bgm: null,
    sfx: null,
    expression: null,
    spriteVariant: null,
    characters: inferCharacters(
      {
        type: 'narration',
        speaker: '해설',
      },
      characterRouteKey,
    ),
    visualMode: 'present',
    transition: null,
    screenDirection: null,
    cutscene: null,
    systemCue: choice.systemCue,
    sourceFields: {
      hasBackground: false,
      hasBgm: false,
      hasSfx: false,
      hasExpression: false,
      hasScreenDirection: false,
    },
  };

  return splitBeatForDisplay(introBeat);
}

function normalizeEnding(ending, routeKey) {
  if (!ending) return null;

  const fallbackBg = routeDefaults[routeKey]?.defaultBg || 'palace-hall-dim';
  const bg = ending.bg || fallbackBg;
  const endingCharacters = inferCharacters(
    {
      type: 'narration',
      speaker: routeKey === 'ending-2' ? '주인공' : '용왕',
      expression: ending.expression,
    },
    routeKey,
  );
  const endingBaseBeat = {
    id: `${routeKey}-final-scene`,
    role: 'narration',
    type: 'narration',
    speaker: '해설',
    text: ending.text,
    sourceText: ending.text,
    segments: createSegments({
      type: 'narration',
      speaker: '해설',
      text: ending.text,
    }),
    bg,
    bgImage: backgroundAssets[bg] || backgroundAssets[fallbackBg],
    scenePlace: routeDefaults[routeKey]?.scenePlace || null,
    sceneTime: routeDefaults[routeKey]?.sceneTime || '',
    bgm: ending.bgm || null,
    sfx: ending.sfx || null,
    expression: ending.expression || null,
    spriteVariant: ending.expression || null,
    characters: endingCharacters,
    visualMode: 'present',
    transition: null,
    screenDirection: '마지막 장면을 여러 beat로 나누어 표시',
    cutscene: null,
    systemCue: null,
    sourceFields: {
      hasBackground: Boolean(ending.bg),
      hasBgm: Boolean(ending.bgm),
      hasSfx: Boolean(ending.sfx),
      hasExpression: Boolean(ending.expression),
      hasScreenDirection: true,
    },
  };

  return {
    title: ending.title,
    location: ending.location,
    label: '마지막 장면',
    text: ending.text,
    beats: splitBeatForDisplay(endingBaseBeat),
    bg,
    bgImage: backgroundAssets[bg] || backgroundAssets[fallbackBg],
    bgm: ending.bgm || null,
    sfx: ending.sfx || null,
    expression: ending.expression || null,
    characters: endingCharacters,
    reflection: endingReflections[routeKey] || null,
  };
}

function buildRoute(routeKey, sourceRoute, choiceKey = null) {
  const defaults = routeDefaults[routeKey] || {};
  const ending = normalizeEnding(sourceRoute?.ending, routeKey);
  const choice = choiceKey && sourceRoute?.choice ? normalizeChoice(sourceRoute.choice, choiceKey) : null;
  const sceneBeats = (sourceRoute?.scenes || []).flatMap((scene, index) =>
    normalizeSceneBeats(scene, routeKey, index),
  );
  const choiceIntroBeats = choice ? createChoiceIntroBeats(choice, routeKey) : [];

  return {
    key: routeKey,
    title: defaults.title || routeKey,
    scenePlace: defaults.scenePlace || reviewMain002Source.startLocation,
    sceneTime: defaults.sceneTime || '',
    recordSummary: sourceRoute?.summary || null,
    beats: ending ? [...sceneBeats, ...ending.beats] : [...sceneBeats, ...choiceIntroBeats],
    choice,
    nextRoute: sourceRoute?.nextStep || null,
    ending,
  };
}

function buildReviewMain002Story() {
  const startChoice = normalizeChoice(reviewMain002Source.firstChoice, 'firstChoice');
  const routes = {
    start: {
      ...routeDefaults.start,
      key: 'start',
      recordSummary: null,
      beats: [
        ...reviewMain002Source.startScenes.flatMap((scene, index) =>
          normalizeSceneBeats(scene, 'start', index),
        ),
        ...createChoiceIntroBeats(startChoice, 'start'),
      ],
      choice: startChoice,
      nextRoute: null,
      ending: null,
    },
    'obey-route': buildRoute('obey-route', reviewMain002Source.routes['obey-route']),
    'hesitate-route': buildRoute('hesitate-route', reviewMain002Source.routes['hesitate-route']),
    palace: buildRoute('palace', reviewMain002Source.routes.palace, 'palace'),
    'shield-route': buildRoute('shield-route', reviewMain002Source.routes['shield-route']),
    shoreAfterShield: buildRoute(
      'shoreAfterShield',
      reviewMain002Source.routes.shoreAfterShield,
      'shoreAfterShield',
    ),
    'ending-1': buildRoute('ending-1', reviewMain002Source.routes['ending-1']),
    'ending-2': buildRoute('ending-2', reviewMain002Source.routes['ending-2']),
    'ending-3': buildRoute('ending-3', reviewMain002Source.routes['ending-3']),
  };

  return {
    id: reviewMain002Source.id,
    title: reviewMain002Source.title,
    status: reviewMain002Source.status,
    approvalStatus: reviewMain002Source.status,
    playable: true,
    category: reviewMain002Source.category,
    originalWork: '토끼전 / 별주부전 / 수궁가',
    motive: reviewMain002Source.motive,
    icon: '🐢',
    thumbnail: backgroundAssets['palace-hall-dim'],
    role: '자라',
    startLocation: reviewMain002Source.startLocation,
    startRoute: 'start',
    description:
      '병든 용왕을 살려야 하는 자라가 토끼를 속여 데려오라는 명령을 받고, 은혜와 생명의 무게 사이에서 흔들리는 원작 각색 체험형 미연시.',
    sourceRespect:
      '용왕의 병, 자라의 심부름, 토끼의 간, 토끼의 말재주, 수궁의 환대와 반전을 원작 핵심 장면으로 보존한다.',
    activityHref: '../ifstory01-activity/',
    studentGoal:
      '학생이 자라의 자리에서 명령, 속임수, 정직, 자비, 책임 사이를 직접 선택하게 한다.',
    dilemmaFocus: [
      '은혜를 갚기 위해 다른 생명을 해쳐도 되는가?',
      '정직은 언제나 옳은가?',
      '누군가를 살리기 위한 거짓말은 용서될 수 있는가?',
      '명령과 양심이 부딪힐 때 무엇을 선택할 것인가?',
    ],
    choiceWeight: 'light < relationship < dilemma',
    choiceType: ['light', 'dilemma'],
    sourcePriority: [
      '/Users/baekjiyun/Downloads/adventureApprovedStories (1).js',
      '/Users/baekjiyun/Downloads/review-main-002-story-review-copy (1).md',
      '/Users/baekjiyun/Desktop/WAN/apps/weapon-reinforce/src/data/adventureApprovedStories.js',
    ],
    sourceReviewScript: {
      path: 'src/data/source/reviewMain002ReviewCopy.md',
      copiedFrom: '/Users/baekjiyun/Downloads/review-main-002-story-review-copy (1).md',
      preservedFields: [
        '[배경]',
        '[BGM]',
        '[SFX]',
        '[표정]',
        '[화면 연출]',
        '[시스템]',
        '대사',
        '해설',
        '지문',
        '속생각',
        '선택 전 문장',
        '기록 요약',
        '마지막 장면',
      ],
    },
    assets: {
      backgrounds: backgroundAssets,
      characters: characterAssets,
    },
    routes,
    scenes: Object.values(routes).flatMap((route) => route.beats),
    choices: [
      routes.start.choice,
      routes.palace.choice,
      routes.shoreAfterShield.choice,
    ],
    endings: {
      'ending-1': routes['ending-1'].ending,
      'ending-2': routes['ending-2'].ending,
      'ending-3': routes['ending-3'].ending,
    },
    reflectionQuestions: [
      '나라면 용왕 앞에서 토끼가 “간을 빼두고 왔다”고 한 말이 거짓이라고 밝힐까, 그 말에 맞춰 줄까? 그 까닭은 무엇일까?',
    ],
  };
}

const onggojibBackgroundAssets = {
  'ong-winter-courtyard': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_winter_courtyard_pixel.png`,
  'ong-warm-room': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_warm_room_pixel.png`,
  'ong-magistrate-yard': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_magistrate_yard_pixel.png`,
  'ong-snow-road': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_snow_village_road_pixel.png`,
  'ong-spring-room': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_spring_room_pixel.png`,
  'ong-spring-courtyard': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_spring_courtyard_pixel.png`,
  'ong-reconciliation-blue-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_reconciliation_blue_cg_pixel.png`,
  'ong-reconciliation-borrowed-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_reconciliation_borrowed_cg_pixel.png`,
  'ong-gate-stranger-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_gate_stranger_cg_pixel.png`,
  'ong-wood-chopping-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_wood_chopping_cg_pixel.png`,
  'ong-kind-father-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_kind_father_cg_pixel.png`,
  'ong-court-child-choice-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_court_child_choice_cg_pixel.png`,
  'ong-child-distance-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_child_distance_cg_pixel.png`,
  'ong-broken-celadon-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_broken_celadon_cg_pixel.png`,
  'ong-child-fever-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_child_fever_cg_pixel.png`,
  'ong-exiled-mirror-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_exiled_mirror_cg_pixel.png`,
  'ong-child-carry-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_child_carry_cg_pixel.png`,
  'ong-open-gate-kindness-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_open_gate_kindness_cg_pixel.png`,
  'ong-servant-water-basin-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_servant_water_basin_cg_pixel.png`,
  'ong-servant-lamp-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_servant_lamp_cg_pixel.png`,
  'ong-confession-folded-coat-cg': `${ONGGOJIB_BACKGROUND_ROOT}onggojib_confession_folded_coat_cg_pixel.png`,
};

const onggojibScenePlaceByBg = {
  'ong-winter-courtyard': '옹고집 저택 마당',
  'ong-warm-room': '안방',
  'ong-magistrate-yard': '관아 마당',
  'ong-snow-road': '눈 내리는 관아 밖',
  'ong-spring-room': '봄 아침 안방',
  'ong-spring-courtyard': '봄 햇살이 드는 대문 앞',
  'ong-reconciliation-blue-cg': '봄 아침 안방',
  'ong-reconciliation-borrowed-cg': '봄 아침 안방',
  'ong-gate-stranger-cg': '옹고집 저택 대문',
  'ong-wood-chopping-cg': '옹고집 저택 마당',
  'ong-kind-father-cg': '안방',
  'ong-court-child-choice-cg': '관아 마당',
  'ong-child-distance-cg': '옹고집 저택 마당',
  'ong-broken-celadon-cg': '대청마루',
  'ong-child-fever-cg': '겨울밤 안방',
  'ong-exiled-mirror-cg': '눈 내리는 길',
  'ong-child-carry-cg': '옹고집 저택 마당',
  'ong-open-gate-kindness-cg': '옹고집 저택 대문',
  'ong-servant-water-basin-cg': '대청마루',
  'ong-servant-lamp-cg': '대청마루',
  'ong-confession-folded-coat-cg': '봄 아침 안방',
};

function makeOnggojibSpriteOverrides(ids, bg, characters, extra = {}) {
  return ids.map((id) => [id, { bg, characters, ...extra }]);
}

const onggojibVisualOverrides = Object.fromEntries([
  ...makeOnggojibSpriteOverrides(
    [
      'ong-open-1c',
      'ong-open-2a',
      'ong-open-3a',
      'ong-open-3a-2',
      'ong-open-3b-1',
      'ong-open-3c',
      'ong-open-3c-1',
    ],
    'ong-winter-courtyard',
    [
      { name: '낯선 사내', side: 'left', active: true },
      { name: '진짜 옹고집', side: 'right', variant: 'angry', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'ong-open-2',
      'ong-open-2c',
      'ong-open-2d',
      'ong-open-3b',
      'ong-open-3d',
    ],
    'ong-winter-courtyard',
    [
      { name: '낯선 사내', side: 'left', active: false },
      { name: '진짜 옹고집', side: 'right', variant: 'angry', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'ong-open-2b',
      'ong-open-3',
      'ong-open-3a-1',
      'ong-open-3c-2',
      'ong-open-3e',
    ],
    'ong-winter-courtyard',
    [
      { name: '낯선 사내', side: 'left', active: false },
      { name: '부인', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'ong-open-8',
      'ong-open-8-1',
      'ong-open-8-2',
      'ong-open-8c',
      'ong-open-8c-1',
      'ong-open-8c-3',
      'ong-open-8c-4',
      'ong-open-8e',
    ],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: true },
      { name: '아이', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-8a', 'ong-open-8b', 'ong-open-8b-1'],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: true },
      { name: '하인', side: 'right', variant: 'injured', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'fake-route-4',
      'fake-route-5',
      'fake-route-6',
      'fake-route-6a',
      'fake-route-6b',
      'fake-route-7',
      'fake-route-7a',
      'fake-route-7b',
      'fake-route-8',
      'fake-route-9',
      'fake-route-10',
      'fake-route-10a',
      'fake-route-11',
      'fake-route-12',
      'fake-route-13',
      'fake-route-14',
      'fake-route-15',
      'fake-route-15a',
      'fake-route-15b',
      'fake-route-16',
    ],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: true },
      { name: '진짜 옹고집', side: 'right', variant: 'angry', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['fake-route-17'],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '가짜 옹고집', side: 'right', variant: 'offering', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['fake-route-18'],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '가짜 옹고집', side: 'right', variant: 'offering', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'fake-route-18b',
      'fake-route-18c',
      'fake-route-18f',
      'fake-route-18g-1',
      'fake-route-18g-4',
      'fake-route-18g-6',
    ],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: true },
      { name: '가짜 옹고집', side: 'right', variant: 'gentle', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'fake-route-18d',
      'fake-route-18e',
      'fake-route-18g',
      'fake-route-18g-2',
      'fake-route-18g-3',
      'fake-route-18g-5',
      'fake-route-18i',
    ],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '가짜 옹고집', side: 'right', variant: 'gentle', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'fake-route-18a',
      'fake-route-18h',
      'fake-route-18j',
    ],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '가짜 옹고집', side: 'right', variant: 'gentle', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['fake-route-18k'],
    'ong-winter-courtyard',
    [{ name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false }],
  ),
  ...makeOnggojibSpriteOverrides(
    ['fake-route-18l'],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '부인', side: 'right', variant: 'concerned', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'a-child-scene-1',
      'a-child-scene-2',
      'a-child-scene-3',
      'atonement-child-before',
      'a-child-wait-1',
      'a-child-wait-2',
      'a-child-wait-3',
      'a-child-reach-1',
      'a-child-reach-2',
      'a-child-reach-3',
    ],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: true },
      { name: '막내', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'a-servant-scene-1a',
      'a-servant-scene-2',
      'a-servant-scene-3',
      'atonement-vase-before',
      'a-vase-care-1',
      'a-vase-care-2',
      'a-vase-care-3',
      'a-vase-care-4',
      'a-vase-care-4a',
      'a-vase-care-5',
      'a-vase-anger-1',
      'a-vase-anger-2',
      'a-vase-anger-3',
      'a-vase-anger-4',
      'a-vase-anger-5',
    ],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: true },
      { name: '하인', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'a-final-1',
      'a-final-2',
      'a-final-3',
      'a-final-4',
      'a-final-5',
      'a-final-5a',
      'a-final-6',
      'a-final-7',
    ],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: true },
      { name: '막내', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['b-final-6', 'b-final-6a', 'b-final-6b'],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: true },
      { name: '낯선 사내', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'b-final-7c',
      'b-final-8',
      'b-final-8a',
      'b-final-8aa',
      'b-final-8ab',
      'b-final-8ac',
      'b-final-8b',
      'b-final-8c',
      'b-final-8d',
    ],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: true },
      { name: '부인', side: 'right', variant: 'resolved', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-1b-1'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '막내', side: 'right', variant: 'cautious', scale: 0.88, active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-1b-2', 'ong-open-1b-2b'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: true },
      { name: '막내', side: 'right', variant: 'cautious', scale: 0.88, active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-1b-3', 'ong-open-1b-3b'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '하인', side: 'right', variant: 'injured', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-1b-3a', 'ong-open-1b-3a-2', 'ong-open-1b-3a-3'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: true },
      { name: '하인', side: 'right', variant: 'injured', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-1b-3a-1'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '하인', side: 'center', variant: 'injured', scale: 0.86, active: false },
      { name: '부인', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-8', 'ong-open-8-1', 'ong-open-8-2'],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-8c', 'ong-open-8c-1'],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: false },
      { name: '둘째', side: 'right', variant: 'hesitant', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-8c-3'],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: true },
      { name: '둘째', side: 'right', variant: 'hesitant', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-open-8c-4', 'ong-open-8e'],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: false },
      { name: '둘째', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-return-4', 'real-route-1a', 'real-route-1b', 'real-route-5', 'real-route-6', 'real-route-9'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '부인', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-return-5', 'ong-court-4'],
    'ong-magistrate-yard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: true },
      { name: '가짜 옹고집', side: 'right', variant: 'gentle', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-court-1b', 'ong-court-5b', 'ong-court-7', 'wife-testimony-before'],
    'ong-magistrate-yard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '부인', side: 'right', variant: 'resolved', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-court-2'],
    'ong-magistrate-yard',
    [
      { name: '사또', side: 'left', variant: 'command', active: true },
      { name: '부인', side: 'right', variant: 'resolved', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-court-3'],
    'ong-magistrate-yard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '가짜 옹고집', side: 'right', variant: 'gentle', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-court-5'],
    'ong-magistrate-yard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '가짜 옹고집', side: 'right', variant: 'gentle', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-route-2', 'real-route-4', 'real-route-4a'],
    'ong-magistrate-yard',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: true },
      { name: '부인', side: 'right', variant: 'resolved', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-route-7', 'real-route-10', 'real-route-11', 'real-loop-3', 'real-loop-4'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-route-12', 'real-route-13'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '둘째', side: 'right', variant: 'hesitant', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-loop-5', 'real-loop-6'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: true },
      { name: '하인', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-loop-7', 'real-loop-7a', 'real-loop-11', 'real-loop-11a', 'wife-testimony-repeat-before'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '부인', side: 'right', variant: 'resolved', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-loop-8a'],
    'ong-warm-room',
    [
      { name: '둘째', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-loop-9', 'real-loop-9a', 'real-loop-9b', 'real-loop-9c', 'real-loop-9e'],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: true },
      { name: '둘째', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-loop-9f', 'real-loop-9g'],
    'ong-warm-room',
    [
      { name: '가짜 옹고집', side: 'left', variant: 'gentle', active: false },
      { name: '부인', side: 'right', variant: 'resolved', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['fake-route-19', 'fake-route-19a', 'fake-route-19b'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '막내', side: 'right', variant: 'cautious', scale: 0.86, active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['fake-route-21', 'fake-route-23'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '부인', side: 'right', variant: 'concerned', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['b-meal-act-2'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: false },
      { name: '둘째', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['b-before-confession-1'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: false },
      { name: '둘째', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['b-before-confession-2'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: false },
      { name: '부인', side: 'right', variant: 'resolved', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['b-final-6b'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: false },
      { name: '낯선 사내', side: 'right', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    [
      'fake-route-18m',
      'fake-route-18n',
      'fake-route-18q',
      'fake-route-22',
      'fake-route-22a',
      'fake-route-23a',
      'fake-route-23b',
      'fake-route-23c',
    ],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'exiled', active: false },
      { name: '부인', side: 'right', variant: 'concerned', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['b-final-7', 'b-final-7b', 'b-final-7d'],
    'ong-warm-room',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'remorse', active: false },
      { name: '부인', side: 'right', variant: 'concerned', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-return-4'],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '부인', side: 'right', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['ong-return-5'],
    'ong-winter-courtyard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: true },
      { name: '가짜 옹고집', side: 'right', variant: 'gentle', active: false },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-route-1a', 'real-route-1b'],
    'ong-magistrate-yard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '부인', side: 'right', variant: 'resolved', active: true },
    ],
  ),
  ...makeOnggojibSpriteOverrides(
    ['real-loop-11', 'real-loop-11a', 'wife-testimony-repeat-before'],
    'ong-magistrate-yard',
    [
      { name: '진짜 옹고집', side: 'left', variant: 'angry', active: false },
      { name: '부인', side: 'right', variant: 'resolved', active: true },
    ],
  ),
]);

const onggojibCharacterAssets = {
  부인: {
    side: 'right',
    facing: 'right',
    alt: '옹고집의 부인',
    variants: {
      default: onggojibWifeSprite,
      resolved: onggojibWifeResolvedSprite,
      concerned: onggojibWifeConcernedSprite,
    },
  },
  '진짜 옹고집': {
    side: 'left',
    facing: 'right',
    alt: '진짜 옹고집',
    variants: {
      default: onggojibRealSprite,
      angry: onggojibRealAngrySprite,
      remorse: onggojibRealRemorseSprite,
      exiled: onggojibRealExiledSprite,
      borrowed: onggojibRealBorrowedSprite,
    },
  },
  '가짜 옹고집': {
    side: 'right',
    facing: 'right',
    alt: '가짜 옹고집',
    variants: {
      default: onggojibDoubleSprite,
      gentle: onggojibDoubleGentleSprite,
      offering: onggojibDoubleOfferingSprite,
    },
  },
  사또: {
    side: 'left',
    facing: 'right',
    alt: '사또',
    variants: {
      default: onggojibMagistrateSprite,
      command: onggojibMagistrateCommandSprite,
    },
  },
  포졸: {
    side: 'right',
    facing: 'left',
    alt: '포졸',
    variants: {
      default: onggojibPosolSprite,
    },
  },
  '낯선 사내': {
    side: 'left',
    facing: 'right',
    scale: 0.98,
    alt: '얼굴을 가린 낯선 사내',
    variants: {
      default: onggojibStrangerHiddenSprite,
    },
  },
  아이: {
    side: 'right',
    facing: 'left',
    scale: 1,
    alt: '옹고집의 아이',
    variants: {
      default: onggojibChildSprite,
    },
  },
  막내: {
    side: 'right',
    facing: 'left',
    scale: 1,
    alt: '옹고집의 막내',
    variants: {
      default: onggojibYoungestChildSprite,
      cautious: onggojibYoungestChildCautiousSprite,
    },
  },
  둘째: {
    side: 'right',
    facing: 'left',
    scale: 1,
    alt: '옹고집의 둘째',
    variants: {
      default: onggojibSecondChildSprite,
      hesitant: onggojibSecondChildHesitantSprite,
    },
  },
  하인: {
    side: 'right',
    facing: 'left',
    scale: 0.92,
    alt: '옹고집 집의 하인',
    variants: {
      default: onggojibHouseholdServantSprite,
      injured: onggojibServantInjuredSprite,
    },
  },
  일꾼: {
    side: 'right',
    facing: 'left',
    scale: 0.94,
    alt: '장작을 패러 온 일꾼',
    variants: {
      default: onggojibWorkerSprite,
    },
  },
};

function getOnggojibRouteDefaults(routeKey, sourceRoute = null) {
  if (routeKey === 'start') {
    return {
      title: '아내의 대답',
      scenePlace: '옹고집 저택 마당',
      sceneTime: '겨울밤',
      defaultBg: 'ong-winter-courtyard',
    };
  }

  return {
    title: sourceRoute?.title || routeKey,
    scenePlace: sourceRoute?.scenePlace || reviewMain003OnggojibSource.startLocation,
    sceneTime: sourceRoute?.sceneTime || '',
    defaultBg: sourceRoute?.defaultBg || 'ong-winter-courtyard',
  };
}

function normalizeOnggojibCharacter(character) {
  const base = onggojibCharacterAssets[character.name] || {};
  return {
    name: character.name,
    side: character.side || base.side || 'left',
    facing: character.facing || base.facing || 'right',
    variant: character.variant || 'default',
    scale: character.scale || base.scale || 1,
    active: Boolean(character.active),
  };
}

function normalizeOnggojibCharacters(characters = []) {
  return characters.map(normalizeOnggojibCharacter);
}

function applyOnggojibVisualOverride(beat, defaults) {
  const override = onggojibVisualOverrides[beat.id];
  if (!override) return beat;

  const fallbackBg = defaults.defaultBg || 'ong-winter-courtyard';
  const bg = override.bg || beat.bg || fallbackBg;

  return {
    ...beat,
    bg,
    bgImage: onggojibBackgroundAssets[bg] || beat.bgImage || onggojibBackgroundAssets[fallbackBg],
    scenePlace: override.scenePlace || onggojibScenePlaceByBg[bg] || beat.scenePlace,
    characters: Array.isArray(override.characters)
      ? normalizeOnggojibCharacters(override.characters)
      : beat.characters,
    visualMode: override.visualMode || beat.visualMode,
    transition: override.transition || beat.transition,
    screenDirection: override.screenDirection || beat.screenDirection,
  };
}

function normalizeOnggojibSceneBeat(scene, routeKey, index, defaults) {
  const fallbackBg = defaults.defaultBg || 'ong-winter-courtyard';
  const bg = scene.bg || fallbackBg;
  const role = roleByType[scene.type] || scene.type || 'narration';

  const beat = {
    id: scene.id || `${routeKey}-${index + 1}`,
    role,
    type: scene.type,
    speaker: scene.speaker || (role === 'thought' ? '속생각' : '해설'),
    text: scene.text,
    sourceText: scene.text,
    segments: createSegments(scene),
    bg,
    bgImage: onggojibBackgroundAssets[bg] || onggojibBackgroundAssets[fallbackBg],
    scenePlace: scene.scenePlace || onggojibScenePlaceByBg[bg] || defaults.scenePlace,
    sceneTime: scene.sceneTime || defaults.sceneTime || '',
    bgm: scene.bgm || null,
    sfx: scene.sfx || null,
    expression: scene.expression || null,
    spriteVariant: scene.expression || null,
    characters: normalizeOnggojibCharacters(scene.characters || []),
    visualMode: scene.visualMode || (scene.flashback ? 'flashback' : 'present'),
    transition: scene.transition || null,
    screenDirection: scene.screenDirection || null,
    cutscene: scene.cutscene || null,
    systemCue: scene.systemCue || null,
    sourceFields: {
      hasBackground: Boolean(scene.bg),
      hasBgm: Boolean(scene.bgm),
      hasSfx: Boolean(scene.sfx),
      hasExpression: Boolean(scene.expression),
      hasScreenDirection: Boolean(scene.screenDirection),
    },
  };

  return applyOnggojibVisualOverride(beat, defaults);
}

function normalizeOnggojibSceneBeats(scene, routeKey, index, defaults) {
  return splitBeatForDisplay(normalizeOnggojibSceneBeat(scene, routeKey, index, defaults));
}

function normalizeOnggojibChoice(sourceChoice) {
  return {
    id: sourceChoice.id,
    label: sourceChoice.label,
    prompt: sourceChoice.prompt,
    beforeText: sourceChoice.prompt,
    choiceType: sourceChoice.choiceType,
    choiceWeight: sourceChoice.choiceWeight,
    systemCue: sourceChoice.systemCue,
    scenePlace: sourceChoice.scenePlace || null,
    sceneTime: sourceChoice.sceneTime || null,
    bg: sourceChoice.bg || null,
    characters: normalizeOnggojibCharacters(sourceChoice.characters || []),
    options: sourceChoice.options.map((option) => ({
      id: option.id,
      text: option.text,
      shortText: option.shortText || option.text,
      nextRoute: option.nextStep,
      reason: option.reason,
      cost: option.cost,
      helps: option.helps || [],
      hurts: option.hurts || [],
      lingeringEmotion: option.lingeringEmotion,
      disabled: Boolean(option.disabled),
      disabledReason: option.disabledReason || null,
    })),
  };
}

function createOnggojibChoiceIntroBeats(choice, routeKey, defaults) {
  const fallbackBg = defaults.defaultBg || 'ong-winter-courtyard';
  const bg = choice.bg || fallbackBg;
  const introBeat = {
    id: `${choice.id}-before`,
    role: 'narration',
    type: 'narration',
    speaker: '선택 전 문장',
    text: choice.beforeText,
    sourceText: choice.beforeText,
    segments: createSegments({
      type: 'narration',
      speaker: '선택 전 문장',
      text: choice.beforeText,
    }),
    bg,
    bgImage: onggojibBackgroundAssets[bg] || onggojibBackgroundAssets[fallbackBg],
    scenePlace: choice.scenePlace || onggojibScenePlaceByBg[bg] || defaults.scenePlace,
    sceneTime: choice.sceneTime || defaults.sceneTime || '',
    bgm: null,
    sfx: null,
    expression: null,
    spriteVariant: null,
    characters: choice.characters,
    visualMode: 'present',
    transition: null,
    screenDirection: null,
    cutscene: null,
    systemCue: choice.systemCue,
    sourceFields: {
      hasBackground: false,
      hasBgm: false,
      hasSfx: false,
      hasExpression: false,
      hasScreenDirection: false,
    },
  };

  return splitBeatForDisplay(applyOnggojibVisualOverride(introBeat, defaults));
}

function normalizeOnggojibEnding(ending, routeKey, defaults) {
  if (!ending) return null;

  const fallbackBg = defaults.defaultBg || 'ong-winter-courtyard';
  const bg = ending.bg || fallbackBg;
  const endingCharacters = normalizeOnggojibCharacters(ending.characters || []);
  const endingBaseBeat = {
    id: `${routeKey}-final-scene`,
    role: 'narration',
    type: 'narration',
    speaker: '해설',
    text: ending.text,
    sourceText: ending.text,
    segments: createSegments({
      type: 'narration',
      speaker: '해설',
      text: ending.text,
    }),
    bg,
    bgImage: onggojibBackgroundAssets[bg] || onggojibBackgroundAssets[fallbackBg],
    scenePlace: defaults.scenePlace || onggojibScenePlaceByBg[bg],
    sceneTime: defaults.sceneTime || '',
    bgm: ending.bgm || null,
    sfx: ending.sfx || null,
    expression: ending.expression || null,
    spriteVariant: ending.expression || null,
    characters: endingCharacters,
    visualMode: 'present',
    transition: null,
    screenDirection: '마지막 장면을 여러 beat로 나누어 표시',
    cutscene: null,
    systemCue: null,
    sourceFields: {
      hasBackground: Boolean(ending.bg),
      hasBgm: Boolean(ending.bgm),
      hasSfx: Boolean(ending.sfx),
      hasExpression: Boolean(ending.expression),
      hasScreenDirection: true,
    },
  };

  return {
    title: ending.title,
    location: ending.location,
    label: '마지막 장면',
    text: ending.text,
    beats: splitBeatForDisplay(endingBaseBeat),
    bg,
    bgImage: onggojibBackgroundAssets[bg] || onggojibBackgroundAssets[fallbackBg],
    bgm: ending.bgm || null,
    sfx: ending.sfx || null,
    expression: ending.expression || null,
    characters: endingCharacters,
    reflection: reviewMain003OnggojibSource.endingReflections[routeKey] || null,
  };
}

function buildOnggojibRoute(routeKey, sourceRoute) {
  const defaults = getOnggojibRouteDefaults(routeKey, sourceRoute);
  const ending = normalizeOnggojibEnding(sourceRoute?.ending, routeKey, defaults);
  const choice = sourceRoute?.choice ? normalizeOnggojibChoice(sourceRoute.choice) : null;
  const sceneBeats = (sourceRoute?.scenes || []).flatMap((scene, index) =>
    normalizeOnggojibSceneBeats(scene, routeKey, index, defaults),
  );
  const choiceIntroBeats = choice ? createOnggojibChoiceIntroBeats(choice, routeKey, defaults) : [];

  return {
    key: routeKey,
    title: defaults.title,
    scenePlace: defaults.scenePlace,
    sceneTime: defaults.sceneTime,
    recordSummary: sourceRoute?.recordSummary || null,
    beats: ending ? [...sceneBeats, ...ending.beats] : [...sceneBeats, ...choiceIntroBeats],
    choice,
    nextRoute: sourceRoute?.nextStep || null,
    ending,
  };
}

function buildOnggojibStory() {
  const startDefaults = getOnggojibRouteDefaults('start');
  const startChoice = normalizeOnggojibChoice(reviewMain003OnggojibSource.firstChoice);
  const routes = {
    start: {
      ...startDefaults,
      key: 'start',
      recordSummary: null,
      beats: [
        ...reviewMain003OnggojibSource.startScenes.flatMap((scene, index) =>
          normalizeOnggojibSceneBeats(scene, 'start', index, startDefaults),
        ),
        ...createOnggojibChoiceIntroBeats(startChoice, 'start', startDefaults),
      ],
      choice: startChoice,
      nextRoute: null,
      ending: null,
    },
  };

  for (const [routeKey, sourceRoute] of Object.entries(reviewMain003OnggojibSource.routes)) {
    routes[routeKey] = buildOnggojibRoute(routeKey, sourceRoute);
  }

  return {
    id: reviewMain003OnggojibSource.id,
    title: reviewMain003OnggojibSource.title,
    status: reviewMain003OnggojibSource.status,
    approvalStatus: reviewMain003OnggojibSource.status,
    playable: true,
    category: reviewMain003OnggojibSource.category,
    originalWork: reviewMain003OnggojibSource.originalWork,
    motive: reviewMain003OnggojibSource.motive,
    icon: '🏠',
    thumbnail: onggojibBackgroundAssets['ong-winter-courtyard'],
    role: reviewMain003OnggojibSource.role,
    defaultProtagonistName: reviewMain003OnggojibSource.defaultProtagonistName,
    usesCustomProtagonistName: reviewMain003OnggojibSource.usesCustomProtagonistName,
    startLocation: reviewMain003OnggojibSource.startLocation,
    startRoute: 'start',
    description:
      '아이 곁에 선 남편과 오래 함께 산 남편 사이에서, 부인과 옹고집의 선택을 따라가는 옹고집전 각색 미연시.',
    sourceRespect:
      '옹고집의 폭력, 또 다른 옹고집의 등장, 관아 판정, 도술적 응보, 가족 앞 속죄와 고백이라는 원작 핵심 갈등을 보존한다.',
    studentGoal:
      '학생이 부인의 판정과 옹고집의 변화 과정을 따라가며 진실, 안전, 속죄, 고백의 무게를 생각하게 한다.',
    dilemmaFocus: [
      '가족을 지키기 위해 진실을 숨길 수 있는가?',
      '가족이란 혈연인가, 행동인가?',
      '상처를 준 사람이 용서를 요구하지 않고 기다릴 수 있는가?',
      '옹고집은 왜 그날 받은 죽과 짚신을 오래 잊지 못했을까?',
    ],
    choiceWeight: 'relationship < dilemma',
    choiceType: ['relationship', 'dilemma'],
    sourcePriority: [
      '/Users/baekjiyun/Downloads/review-main-003-ong-ch1.md',
      '/Users/baekjiyun/Downloads/review-main-004-ong-ch2.md',
      '/Users/baekjiyun/Downloads/review-main-005-ong-ch2-b.md',
    ],
    assets: {
      backgrounds: onggojibBackgroundAssets,
      characters: onggojibCharacterAssets,
    },
    routes,
    scenes: Object.values(routes).flatMap((route) => route.beats),
    choices: Object.values(routes)
      .map((route) => route.choice)
      .filter(Boolean),
    endings: {
      'b-final-acts': routes['b-final-acts'].ending,
      'b-fake-warning': routes['b-fake-warning'].ending,
    },
    reflectionQuestions: [
      '부인은 왜 진실과 가족의 안전 사이에서 흔들렸을까?',
      '또 다른 옹고집이 건넨 죽과 짚신은 옹고집에게 어떤 변화를 남겼을까?',
      '옹고집의 변화는 어느 장면에서 가장 분명하게 드러났을까?',
      '내가 부인이었다면 관아에서 어떤 대답을 했을까?',
    ],
  };
}

const reviewMain001CatalogCard = {
  id: 'review-main-001',
  title: '비오는 주막의 검은 손님',
  status: 'review-candidate',
  approvalStatus: 'review-candidate',
  playable: false,
  category: 'bond-encounter',
  originalWork: '저승사자 설화와 주막 민속 이미지',
  motive: '주막 / 저승사자 / 이름을 빼앗기는 밤',
  icon: '🥣',
  thumbnail: `${IMAGE_ROOT}adventure_black_hat_reaper_tavern_opening.png`,
  role: '이름을 말하지 않는 나그네',
  startLocation: '고갯마루 주막 안 / 비 내리는 늦은 밤',
  description:
    '비 내리는 주막에서 주모가 보지 못하는 검은 갓의 선비와 마주하는 짧은 후보 이야기.',
  sourceRespect:
    '현재 런타임 후보만 catalog card로 연결하고, 세부 대본은 이번 분리 작업의 기본 플레이에 섞지 않는다.',
  studentGoal: '이야기가 어떤 원작·민속 이미지에서 출발하는지 확인한다.',
  dilemmaFocus: ['내 이름처럼 보이는 글씨 위에 먹물방울이 떨어지기 전 어떤 물건에 손댈 것인가?'],
  choiceWeight: 'catalog-only',
  choiceType: ['light', 'relationship'],
  startRoute: null,
  routes: {},
  reflectionQuestions: [],
};

export const stories = [buildReviewMain002Story(), buildOnggojibStory(), reviewMain001CatalogCard];

export const storyById = Object.fromEntries(stories.map((story) => [story.id, story]));
