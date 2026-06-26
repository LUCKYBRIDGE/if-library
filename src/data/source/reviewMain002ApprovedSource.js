export const adventureApprovedStories = {
  "review-main-002": {
    id: "review-main-002",
    title: "토끼와 자라",
    status: "review-candidate",
    category: "folktale-adaptation",
    startLocation: "용궁 대청 / 저녁, 육지로 떠나기 전",
    motive: "토끼전/별주부전/수궁가",
    
    // 1막 시작 시나리오 (palace-welcome)
    startScenes: [
      {
        id: "palace-welcome-1",
        type: "narration",
        speaker: "해설",
        bg: "palace-hall-dim",
        bgm: "heavy-oriental-strings",
        sfx: "subtle-waves-loop",
        text: "어두워진 용궁 대청에 조개등 불빛이 켜졌다. 나는 약사발을 들고 누워 계신 용왕님께 다가갔다. 첫날에 올린 해초 삶은 물도, 둘째 날에 올린 조개가루 약도 효과가 없었다. 용왕님의 얼굴은 이틀 전보다 훨씬 어둡고 파리했다."
      },
      {
        id: "palace-welcome-2",
        type: "dialogue",
        speaker: "용왕",
        expression: "sick-grimace",
        sfx: "heavy-cough",
        text: "자라야, 숨이 차서 길게 말하기가 힘들구나. 이제 일반적인 약재로는 내 병을 고칠 수가 없다. 어의가 의학 책에서 찾아낸 마지막 처방뿐이다."
      },
      {
        id: "palace-welcome-3",
        type: "narration",
        speaker: "해설",
        flashback: true,
        bg: "palace-hall-flashback",
        bgm: "warm-gayageum",
        text: "나는 어릴 때 큰비에 휩쓸려 짠물 가득한 바다로 떠내려왔다. 숨이 막혀 등껍질을 웅크리고 있을 때, 젊은 용왕님이 호위들을 물리고 내 앞에 무릎을 낮추셨다. 전하께서는 차가운 내 앞발을 두 손으로 감싸 쥐고, 자신의 비늘로 만든 '바다의 숨결(용궁 패)'을 내 목에 걸어 주셨다."
      },
      {
        id: "palace-welcome-3-dialogue",
        type: "dialogue",
        speaker: "용왕",
        flashback: true,
        expression: "young-warm-smile",
        text: "이제 숨을 천천히 쉬어 보아라. 겁먹을 만했다. 낯선 바다에 혼자 떠내려왔으니 얼마나 무서웠겠느냐."
      },
      {
        id: "palace-welcome-3-response",
        type: "dialogue",
        speaker: "주인공",
        flashback: true,
        expression: "young-turtle-nod",
        text: "저... 저는 민물에서 왔습니다. 바다가 무섭습니다. 그래도 전하께서 잡아 주시니 조금 숨이 쉬어집니다."
      },
      {
        id: "palace-welcome-4",
        type: "dialogue",
        speaker: "용왕",
        flashback: true,
        expression: "young-warm-smile",
        text: "그럼 이곳에서는 서두르지 않아도 된다. 네가 본 것을 천천히, 있는 그대로 말해 다오. 잘 보이려고 꾸미지 않아도 좋다. 작은 목소리라도 내가 끝까지 듣겠다."
      },
      {
        id: "palace-welcome-4-thought",
        type: "thought",
        speaker: "주인공",
        flashback: true,
        expression: "young-turtle-nod",
        text: "그날 이후 용왕님은 내 말을 재촉하지 않았다. 내가 더듬거리면 기다려 주셨고, 작은 사실 하나를 말해도 고개를 끄덕여 주셨다. 그래서 나는 전하 앞에서는 숨거나 꾸미지 않아도 된다고 믿게 되었다."
      },
      {
        id: "palace-welcome-5",
        type: "action",
        speaker: "지문",
        bg: "palace-hall-dim",
        bgm: "tense-dark-theme",
        text: "어의가 바닥에 무거운 처방책을 넓게 펼쳤다. 처방책의 오래된 종이 위에는 '토끼의 간'이라는 글자가 붉게 적혀 있었다."
      },
      {
        id: "palace-welcome-5-dialogue",
        type: "dialogue",
        speaker: "의관",
        expression: "cold-resolute",
        text: "전하, 오래된 처방책에 따르면 육지 토끼의 간만이 전하의 병을 고칠 유일한 처방입니다. 오늘 밤 안에 간을 구해 쓰지 못하면, 전하의 심장이 멈추고 온몸의 피가 굳어 생명을 보존하기 어렵습니다."
      },
      {
        id: "palace-welcome-6",
        type: "dialogue",
        speaker: "용왕",
        expression: "pain-averted-look",
        text: "자라야, 네게 참으로 어려운 일을 맡긴다. 육지로 올라가 토끼를 찾아 데려오너라. 다만, 내 병이나 간이 필요하다는 사실은 절대 말하지 마라. 그가 겁을 먹고 도망칠 것이다. 용궁에서 큰 잔치가 열리며, 이 용궁 패를 가지면 물밑에서도 숨을 쉴 수 있다고만 전해라. 그래야 그가 의심 없이 너를 따라올 것이다."
      },
      {
        id: "palace-welcome-7",
        type: "dialogue",
        speaker: "주인공",
        expression: "shocked-frown",
        text: "용왕님, 제게 항상 두려워하지 말고 사실 그대로만 말하라고 가르치셨습니다. 그런데 지금은 토끼에게 목적을 속여서 데려오라 하십니다. 토끼는 자신이 죽을 줄도 모르고 저를 따라올 것입니다. 이 방법 외에 정말 다른 치료제는 없습니까?"
      },
      {
        id: "palace-welcome-8",
        type: "dialogue",
        speaker: "용왕",
        expression: "sad-eyes-closed",
        text: "다른 방법이 있었다면 내가 너에게 거짓말을 시켜 무고한 생명을 데려오게 했겠느냐. 내 병세가 깊어 이 나라를 다스릴 힘이 다해간다. 내가 죽으면 수중 세계 전체가 무너질 것이다. 너에게 이런 짐을 지워 미안하지만, 지금 나를 살릴 길은 오직 이것뿐이다."
      },
      {
        id: "palace-welcome-9",
        type: "thought",
        speaker: "주인공",
        expression: "head-down-clenched-fists",
        sfx: "heavy-cough-echo",
        text: "용왕님의 기침 소리가 커졌다. 내 목에는 나를 살려준 '바다의 숨결(용궁 패)'이 무겁게 걸려 있었다. 왕의 은혜에 보답하려면 평생 지켜온 솔직함을 버리고 무고한 토끼를 속여야 한다. 나는 대답 대신 패를 움켜쥐고 물문을 향해 몸을 돌렸다."
      },
      {
        id: "rabbit-encounter-1",
        type: "narration",
        speaker: "해설",
        bg: "barren-land-hill",
        bgm: "wind-ambient",
        sfx: "winter-wind-loop",
        text: "나는 용궁 패를 목에 걸고 물문을 넘었다. 갈대밭 너머 황량한 언덕에 이르자, 마른 풀을 뜯던 토끼가 고개를 들었다. 겨울바람이 지나가자 토끼의 긴 귀가 가볍게 떨렸다."
      }
    ],

    // 첫 선택지
    firstChoice: {
      prompt: "토끼가 나를 물끄러미 바라보았다. 나는 숨을 고르고 첫마디를 골랐다.",
      options: [
        {
          id: "obey",
          text: "용궁 잔치의 손님으로 초대한다고 말한다.",
          nextStep: "obey-route"
        },
        {
          id: "hesitate",
          text: "병든 이를 도와달라고 말한다.",
          nextStep: "hesitate-route"
        }
      ]
    },

    // 분기별 시나리오 데이터
    routes: {
      "obey-route": {
        summary: "나는 토끼를 용궁 잔치의 손님으로 초대했다. 토끼는 망설이다가도 따뜻한 대접이라는 말에 마음을 열었다.",
        scenes: [
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "forced-smile-warm-eyes",
            text: "토끼 선생, 용궁에서 작은 잔치가 열리오. 귀한 육지 손님을 모시고 싶어 내가 직접 찾아왔소. 따뜻한 처소와 먹을 것도 준비되어 있으니 함께 가지 않겠소?"
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "ears-perked-curious",
            text: "용궁 잔치라니 듣기만 해도 낯설고 신기하구려. 다만 나는 물속에서 숨을 쉴 수 없소. 바닷속까지 어떻게 간단 말이오?"
          },
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "pointing-token",
            text: "염려 마시오. 이 용궁 패를 나와 함께 쥐면 물속에서도 숨을 쉴 수 있소. 내가 천천히 안내할 테니 걱정하지 않아도 되오."
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "trusting-smile",
            text: "그렇다면 가보겠소. 이 추운 언덕을 벗어나 용궁의 손님이 된다니, 나쁘지 않은 이야기구려."
          },
          {
            type: "thought",
            speaker: "주인공",
            expression: "bitter-averted-look",
            text: "토끼가 내 등껍질 위로 올라탔다. 그의 가벼운 무게가 등에 닿자, 내가 끝내 말하지 않은 사실이 더 무겁게 느껴졌다."
          }
        ],
        nextStep: "palace"
      },
      "hesitate-route": {
        summary: "나는 병든 이를 도와달라고 부탁했다. 하지만 그 병을 고치는 데 토끼의 간이 필요하다는 말은 끝내 꺼내지 못했다.",
        scenes: [
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "stiff-face-grave",
            text: "토끼 선생, 용궁에 오래 앓는 분이 있소. 육지에서 지혜롭기로 이름난 선생께 도움을 청해야 한다 하여, 내가 직접 찾아왔소. 잠시 함께 가주지 않겠소?"
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "suspicious-tilt",
            text: "내가 그런 이름으로 불릴 만한지는 모르겠소만, 병든 이를 모른 체하기는 어렵소. 그런데 자라 선생의 얼굴이 영 밝지 않구려. 내가 알아야 할 일이 더 있소?"
          },
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "swallow-saliva-averted",
            text: "먼 길을 청해 미안하오. 다만 시간이 많지 않소. 이 용궁 패를 함께 쥐면 물속에서도 숨을 쉴 수 있으니, 길은 내가 책임지겠소."
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "shivering-anxious",
            text: "아직 마음이 놓이지는 않소. 그래도 병든 이를 돕는 일이라면 외면하기 어렵구려. 한 번 따라가 보겠소."
          },
          {
            type: "thought",
            speaker: "주인공",
            expression: "eyes-closed-resolved",
            text: "나는 고맙다는 말도 하지 못했다. 가장 중요한 사실을 숨긴 채 걷는 길은, 거짓말을 입 밖에 낸 길과 크게 다르지 않았다."
          }
        ],
        nextStep: "palace"
      },
      "palace": {
        scenes: [
          {
            type: "narration",
            speaker: "해설",
            bg: "palace-hall-dark",
            bgm: "intense-warning-percussion",
            sfx: "heavy-chains-dragging",
            text: "용궁 대청에 도착하자 조개등 불빛 아래 텅 빈 방석 하나만 놓여 있었다. 토끼가 기대한 환대도, 도움을 청하는 사람도 보이지 않았다. 토끼가 어리둥절해하며 방석에 앉자마자, 어둠 속에 숨어 있던 무장한 호위들이 밧줄과 그물을 들고 나타나 토끼를 둘러쌌다."
          },
          {
            type: "dialogue",
            speaker: "의관",
            expression: "urgent-shout",
            text: "전하, 자라가 약속대로 육지에서 토끼를 데려왔습니다. 하지만 전하의 맥박이 약해지고 있으니 지체할 시간이 없습니다. 어서 토끼를 묶고 간을 꺼내어 처방을 시작해야 합니다."
          },
          {
            type: "dialogue",
            speaker: "용왕",
            expression: "deep-pain-groan",
            text: "(깊은 신음을 내쉬며) 어쩔 수 없구나. 토끼 선생, 미안하다. 호위들은 저 토끼를 당장 묶어라. 나를 살릴 처방을 어서 시작하라."
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "shocked-dilated-pupils",
            text: "(사색이 되어 주변을 둘러보며) 자라 선생, 이게 어떻게 된 일이오? 분명 나를 귀한 손님으로 대접한다고 하지 않았소! 나를 묶어 간을 빼앗으려고 일부러 바다로 속여 데려온 것이오?"
          },
          {
            type: "dialogue",
            speaker: "용왕",
            expression: "command-eyes-wide",
            text: "자라야, 무엇 하느냐? 호위들을 도와 토끼를 묶어라!"
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "teary-desperate-face",
            text: "(결박당한 채 절박하게 소리친다) 전하, 제발 멈춰 주십시오! 제 간은 지금 몸속에 들어있지 않습니다. 거친 물살에 휩쓸려 간이 손상될까 봐, 육지의 바위 밑에 잎사귀로 싸서 안전하게 묻어두고 왔습니다!"
          },
          {
            type: "dialogue",
            speaker: "용왕",
            expression: "surprised-staring-turtle",
            text: "(이해할 수 없다는 듯) 살아있는 동물의 간이 어떻게 몸 밖에 있을 수 있느냐. 자라야, 너는 평생 내게 거짓말을 한 적이 없다. 네가 보기에 저 토끼의 말이 사실이냐?"
          },
          {
            type: "thought",
            speaker: "주인공",
            expression: "clenched-fists-sweating",
            text: "토끼의 말이 거짓말이라는 것은 나도 잘 안다. 내가 여기서 '거짓말입니다'라고 밝히면 용왕님은 살아나겠지만, 토끼는 이 자리에서 죽을 것이다. 반대로 '사실입니다'라고 거짓말을 하면 왕을 배신하게 되지만, 토끼를 구출할 기회를 얻을 수 있다. 왕의 목숨과 토끼의 생명, 그리고 나의 정직함 사이에서 나는 하나를 골라야 했다."
          }
        ],
        choice: {
          prompt: "용왕이 가장 정직하다고 믿는 나의 증언만을 기다리고 있다. 여기서 하는 말은 곧 토끼의 생사와 용왕의 신뢰를 가른다.",
          options: [
            {
              id: "truth",
              text: "토끼의 말이 거짓이라고 밝히고 용왕을 살릴 길을 연다.",
              nextStep: "ending-1"
            },
            {
              id: "shield",
              text: "토끼의 말에 맞춰 거짓 증언을 하고 육지로 나갈 시간을 번다.",
              nextStep: "shield-route"
            }
          ]
        }
      },
      "ending-1": {
        summary: "나는 왕의 목숨을 구하는 충성을 택하고 진실을 말했다. 토끼의 거짓을 폭로했고, 토끼는 대청 아래로 끌려갔으며 용왕은 병세에서 회복되었다.",
        scenes: [
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "head-turned-trembling-voice",
            text: "용왕님, 토끼의 말은 거짓입니다. 동물의 장기는 몸 밖으로 꺼내 둘 수 없습니다. 전하를 치료하기 위해 지금 어서 간을 꺼내셔야 합니다."
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "bloodshot-eyes-betrayal",
            text: "(원망 섞인 눈으로 나를 바라보며) 자라 선생... 당신의 정직한 눈빛을 믿고 여기까지 왔는데 결국 나를 죽이는구려. 거짓말까지 해가며 나를 속이고, 내가 살 수 있는 마지막 기회마저 당신 손으로 막아버렸소!"
          },
          {
            type: "action",
            speaker: "지문",
            bgm: "silence-low-cello-drone",
            expression: "eyes-closed-ears-blocked",
            text: "호위들이 바닥에 주저앉아 떨고 있는 토끼를 대청 아래 어두운 방으로 끌고 갔다. 끌려가는 토끼는 아무 말도 하지 않고 나를 매섭게 쳐다보았다."
          },
          {
            type: "thought",
            speaker: "주인공",
            text: "내가 한 행동이 정말 맞는 선택이었을까. 용왕님께 거짓 없이 진실을 말씀드려 신하의 의무는 다했다. 하지만 토끼가 끌려간 자리에 남은 텅 빈 방석을 보니 가슴이 답답했다. 내 신조를 지키기 위해 무고한 토끼를 죽게 만든 것이 정말 정의로운 일인가. 아무리 생각해도 답을 알 수 없었다."
          }
        ],
        ending: {
          title: "냉혹한 충성의 대가 (Ending 1)",
          location: "며칠 뒤 저녁, 용궁 대청",
          bg: "palace-hall-gold",
          bgm: "solemn-melancholic-strings",
          text: "용왕님의 병은 완전히 나았고, 용궁은 평화를 찾았다. 공로를 인정받은 내 목에는 왕실 황금 훈장이 걸렸다. 다른 신하들은 나를 가장 모범적인 신하라고 칭찬했다. 하지만 나는 매일 대청을 오갈 때마다 토끼가 앉았던 빈 방석을 보게 된다. '그 토끼를 죽게 놔둔 것이 정말 옳은 일이었을까'라는 죄책감은 사라지지 않고 나를 괴롭혔다. 왕을 살렸지만, 내 마음속의 양심은 평생 치유되지 않을 상처로 남았다."
        }
      },
      "shield-route": {
        summary: "나는 토끼를 살리기 위해 용왕 앞에서 거짓 증언을 했다. 토끼의 말을 무작정 믿기보다 직접 육지로 가 확인하고 돌아오겠다고 청했고, 용왕은 마지막 희망과 의심을 함께 품은 채 우리를 보내 주었다.",
        scenes: [
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "earnestly-bowing-head",
            text: "용왕님, 저는 육지 짐승의 몸을 다 알지 못합니다. 다만 토끼가 저토록 간절히 말하니, 지금 이 자리에서 죽이는 것보다 직접 확인해 보는 편이 낫습니다. 제가 토끼와 함께 육지로 가서 그 말이 사실인지 확인하고, 약이 될 것을 반드시 가져오겠습니다. 그러니 묶은 밧줄을 풀고 저희가 가게 해주십시오."
          },
          {
            type: "dialogue",
            speaker: "용왕",
            expression: "pondering-then-heavy-nod",
            text: "네가 그런 말까지 한다면, 지금은 그 말에 걸 수밖에 없구나. 그러나 그것이 거짓이거나 토끼를 놓쳐 약을 가져오지 못한다면, 너는 내 신뢰를 저버린 죄까지 함께 물을 것이다. 당장 다녀오너라."
          },
          {
            type: "action",
            speaker: "지문",
            sfx: "rope-loosening",
            expression: "shivering-legs-boarding",
            text: "호위들이 밧줄을 풀자, 토끼는 한동안 주저앉은 채 숨만 몰아쉬었다. 나는 눈을 마주치지 못하고 등을 낮췄다. 토끼는 떨리는 앞발로 내 등껍질을 붙잡았고, 우리는 용궁 문을 열고 급히 육지를 향해 헤엄쳐 올라갔다."
          },
          {
            type: "thought",
            speaker: "주인공",
            bg: "shore-choice",
            bgm: "urgent-chase-theme",
            text: "나는 용왕님을 속였다. 나를 살려 주고 믿어 준 군주에게 처음으로 큰 거짓말을 했다. 그런데 등 뒤에서 떨리는 토끼의 숨소리가 들릴 때마다, 그 거짓말이 오직 배신이라고만 말할 수 있는지 알 수 없었다. 차가운 물살 너머로 육지 물가가 가까워질수록, 용궁으로 돌아갈 길도 멀어지는 듯했다."
          }
        ],
        nextStep: "shoreAfterShield"
      },
      "shoreAfterShield": {
        scenes: [
          {
            type: "narration",
            speaker: "해설",
            bg: "dawn-sandy-shore",
            bgm: "wind-cello-solo",
            sfx: "waves-lapping",
            text: "육지 모래바닥에 닿자마자 토끼는 내 등에서 뛰어내렸다. 그러나 곧장 달아나지는 못했다. 젖은 털을 털어내는 앞발이 떨렸고, 그는 몇 걸음 물러나서야 겨우 숨을 골랐다."
          },
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "impatient-looking-forest",
            text: "토끼 선생, 간을 숨겨두었다는 바위가 어디요? 어서 약을 찾아야 하오. 내 목소리는 재촉하고 있었지만, 마음 한쪽에서는 이미 대답을 알고 있었다."
          },
          {
            type: "dialogue",
            speaker: "토끼",
            expression: "stopping-looking-back",
            text: "(숲 쪽으로 뛰어가려다 멈칫하며 자라를 본다) 자라 선생, 나를 속여 바다로 데려간 일은 아직도 원망스럽소. 하지만 용왕 앞에서 내 거짓말에 맞춰 목숨을 건질 틈을 만들어 준 것도 당신이오. 간을 꺼내 두었다는 내 말은 살기 위한 거짓말이었지만, 그 거짓을 믿어 준 척해 밧줄을 풀어준 일은 잊지 않겠소. 나는 도망쳐 내 가족들에게 돌아가겠소. 잘 있으시오."
          },
          {
            type: "action",
            speaker: "지문",
            expression: "sprite-fading-exit",
            text: "토끼는 몇 번이나 뒤를 돌아볼 듯하다가 끝내 고개를 돌리지 않았다. 수풀 속으로 뛰어든 뒤에는 마른 잎 흔들리는 소리만 남았다. 바닷바람이 불어와 모래에 찍힌 발자국을 조금씩 지웠고, 나는 그 자리에 혼자 남았다."
          },
          {
            type: "dialogue",
            speaker: "주인공",
            expression: "bowed-head-bitter-chuckle",
            text: "...나도 알고 있었소. 간을 꺼내 둘 수 없다는 것쯤은. 그런데도 그 말을 붙잡은 것은, 선생을 살리고 싶었기 때문이오."
          },
          {
            type: "thought",
            speaker: "주인공",
            bgm: "violin-slowing-down",
            text: "토끼의 목숨은 구했지만, 내 손에는 용왕님을 살릴 약이 없었다. 왕을 속인 죄, 임무를 실패한 벌, 그리고 나를 믿어 준 이를 배신했다는 사실이 한꺼번에 밀려왔다. 용궁으로 돌아가지 않고 이 육지에 숨어 살아야 할까, 아니면 돌아가 내 거짓말과 실패를 직접 고백해야 할까."
          }
        ],
        choice: {
          prompt: "숲속으로 사라진 토끼의 발자국 뒤로 찬 바람이 스친다. 용왕은 아직 나를 기다리고 있을 것이다. 나는 이제 내가 한 거짓말과 실패에 어떤 책임을 질 것인가.",
          options: [
            {
              id: "exile",
              text: "용궁으로 돌아가지 않고 육지에서 숨어 산다.",
              nextStep: "ending-2"
            },
            {
              id: "return",
              text: "용궁으로 돌아가 거짓말과 실패를 직접 고백한다.",
              nextStep: "ending-3"
            }
          ]
        }
      },
      "ending-2": {
        summary: "나는 왕을 기만했다는 부끄러움과 다가올 처벌의 두려움에 용궁으로 돌아가지 않기로 결심했다. 육지의 차가운 바람을 맞으며 평생을 죄책감 속에서 방랑했다.",
        ending: {
          title: "징표를 버린 방랑 (Ending 2)",
          location: "수개월 뒤 겨울, 황량한 육지 강가",
          bg: "winter-snowing-shore",
          bgm: "lonely-piano-solo",
          sfx: "winter-gale-loop",
          text: "나는 결국 용궁으로 돌아가지 않았다. 왕을 속이고 도망친 배신자가 왕의 은혜를 지니고 있을 자격은 없었다. 나는 내 목에 걸린 '바다의 숨결'을 뜯어내어 바다로 던져버렸다. 그 순간부터 바닷물은 나에게 숨 막히는 독이 되었고, 나는 영원히 짠물에 들어가지 못하는 몸이 되었다. 차가운 민물을 떠돌며, 나는 내가 잃어버린 신뢰와 두 번 다시 돌아갈 수 없는 바다를 그리워하며 평생을 방랑했다."
        }
      },
      "ending-3": {
        summary: "나는 내 선택의 결과에 책임을 지기 위해 용궁으로 돌아갔다. 숨을 거두기 직전인 용왕의 앞에서 거짓말과 실패를 솔직히 털어놓았고, 그의 마지막을 지켰다.",
        ending: {
          title: "거두어진 숨결 (Ending 3)",
          location: "다음 날 새벽, 어두운 용궁 대청",
          bg: "palace-hall-very-dim",
          bgm: "peaceful-orchestral-grief",
          expression: "king-fading-smile-take-token",
          text: "빈손으로 돌아와 거짓을 자백하는 나를 보며, 죽어가던 용왕님은 한참 동안 아무 말도 하지 않았다. 나는 벌을 내려 달라며 머리를 조아렸지만, 전하께선 지친 손으로 내 목에 걸린 '바다의 숨결'을 만졌다. '무고한 생명을 살리려 나를 속였구나. 네 죄는 가볍지 않다. 그러나 도망치지 않고 돌아온 마음까지 모른 척할 수는 없구나.' 전하께선 내 목에 걸어주셨던 징표를 조용히 거두어 가셨다. '내가 죽으면 저들이 너를 처형하려 할 것이다. 짠물을 벗어나 맑은 강물로 가거라. 이것이 네 벌이자, 내가 줄 수 있는 마지막 자비다.' 바다에서 살 수 없게 된 나는 용궁에서 쫓겨나 평생 민물에 살게 되었지만, 끝내 도망치지 않았다는 사실만은 마음속에 남았다."
        }
      }
    }
  }
};
