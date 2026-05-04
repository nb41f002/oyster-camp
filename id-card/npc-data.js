// =============================================================
// 老師 NPC 角色資料 + 固定老師名單
// =============================================================

// NPC 角色設定
const NPC_ROLES = {
  guildMaster: {
    id: 'guildMaster',
    emoji: '👑',
    cnName: '公會長',
    enName: 'GUILD MASTER',
    portrait: 'assets/characters/teacher-guild-master.png',
    setting: '府城傳說守護者，召集勇者公會的領袖，每當小蚵人陷入危機便指引勇者前進。',
    settingEn: 'Guardian of Tainan legends · Leader of the Hero Guild',
    costume: '白色長袍 + 金邊披風 + 珠寶頭飾，手持蚌殼法杖',
    color: 'gold',
  },
  goldenSpoon: {
    id: 'goldenSpoon',
    emoji: '🥄',
    cnName: '金湯匙御廚',
    enName: 'GOLDEN-SPOON BOSS',
    portrait: 'assets/characters/teacher-golden-spoon.png',
    setting: '驕傲自大的御膳總管，手持金湯匙霸佔傳說食譜；其實是刀子嘴豆腐心的 Boss。',
    settingEn: 'Haughty royal chef · The big bad boss with a soft heart',
    costume: '金色盔甲 + 黃金湯匙 + 皇冠兜帽',
    color: 'boss',
  },
  marketExpert: {
    id: 'marketExpert',
    emoji: '🏪',
    cnName: '採購專家',
    enName: 'MARKET EXPERT',
    portrait: 'assets/characters/teacher-market-expert.png',
    setting: '府城最熟市集的傳奇人物，認識每一位攤販與食材秘密產地。',
    settingEn: 'Tainan market legend · Knows every vendor & secret source',
    costume: '堅固夾克 + 皮帶背包 + 計量天平',
    color: 'leaf',
  },
  masterChef: {
    id: 'masterChef',
    emoji: '🍳',
    cnName: '總舖師傳人',
    enName: 'MASTER CHEF HEIR',
    portrait: 'assets/characters/teacher-master-chef.png',
    setting: '辦桌文化傳承者，料理的靈魂在於把故事說進人心。',
    settingEn: 'Heir of banquet culture · Cooking is storytelling',
    costume: '高廚師帽 + 繡海鮮圖案圍裙',
    color: 'fire',
  },
  orderJudge: {
    id: 'orderJudge',
    emoji: '📊',
    cnName: '秩序判官',
    enName: 'ORDER JUDGE',
    portrait: 'assets/characters/teacher-order-judge.png',
    setting: '公正嚴明的競賽裁判，掌管積分與排名；神情嚴肅但內心溫暖。',
    settingEn: 'Fair-minded judge · Strict but warm-hearted',
    costume: '捲髮假髮 + 規則之書 + 黃金法槌',
    color: 'judge',
  },
};

// 老師 → NPC 角色 + 任教班別 + 梯次 對應表
// 結構：teacher 名字 → 不同 (session, team) 下擔任的 NPC
const TEACHER_ASSIGNMENTS = [
  // 公會長：朱慧容（鮮蚵）、葉容辰（竹筍）— 兩週同
  { name: '朱慧容', en: 'CHU HUI-JUNG',  npc: 'guildMaster', team: 'oyster', sessions: ['longgang','baoxi'] },
  { name: '葉容辰', en: 'YEH JUNG-CHEN', npc: 'guildMaster', team: 'bamboo', sessions: ['longgang','baoxi'] },

  // 金湯匙御廚 — 龍崗：陳睿玲擔任（兼任秩序判官）；保西：徐威鈞（鮮蚵）、蔡家修（竹筍）
  { name: '陳睿玲', en: 'CHEN JUI-LING', npc: 'goldenSpoon', team: 'all', sessions: ['longgang'] },
  { name: '徐威鈞', en: 'HSU WEI-CHUN',  npc: 'goldenSpoon', team: 'oyster', sessions: ['baoxi'] },
  { name: '蔡家修', en: 'TSAI CHIA-HSIU',npc: 'goldenSpoon', team: 'bamboo', sessions: ['baoxi'] },

  // 採購專家：謝沛妤（鮮蚵）、楊碧芳（竹筍）— 兩週同
  { name: '謝沛妤', en: 'HSIEH PEI-YU',  npc: 'marketExpert', team: 'oyster', sessions: ['longgang','baoxi'] },
  { name: '楊碧芳', en: 'YANG PI-FANG',  npc: 'marketExpert', team: 'bamboo', sessions: ['longgang','baoxi'] },

  // 總舖師傳人：黃端玲（鮮蚵）、李岱融（竹筍）— 兩週同
  { name: '黃端玲', en: 'HUANG TUAN-LING', npc: 'masterChef', team: 'oyster', sessions: ['longgang','baoxi'] },
  { name: '李岱融', en: 'LEE TAI-JUNG',    npc: 'masterChef', team: 'bamboo', sessions: ['longgang','baoxi'] },

  // 秩序判官：陳睿玲（龍崗 + 保西 兩梯次都擔任）
  { name: '陳睿玲', en: 'CHEN JUI-LING', npc: 'orderJudge', team: 'all', sessions: ['longgang','baoxi'] },
];

window.NPC_ROLES = NPC_ROLES;
window.TEACHER_ASSIGNMENTS = TEACHER_ASSIGNMENTS;
