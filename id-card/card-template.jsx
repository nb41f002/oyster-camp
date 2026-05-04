// =============================================================
// 識別證範本 React 元件 — IDCard
// v2: 學生用「綠竹筷勇者」形象；老師升級為 NPC 角色卡
// =============================================================

const TEAM_LABEL = {
  oyster: { cn: '🦪 鮮蚵勇者團', en: 'OYSTER HEROES · GRADE 1–4' },
  bamboo: { cn: '🎋 竹筍勇者團', en: 'BAMBOO HEROES · GRADE 5–6' },
  teacher: { cn: '📜 說書講師團', en: 'STORYTELLER GUILD · TEACHER' }
};

const SESSION_LABEL = {
  longgang: { cn: '龍崗 7/6–7/10', en: 'LONGGANG · WEEK 1' },
  baoxi: { cn: '保西 8/17–8/21', en: 'BAOXI · WEEK 2' }
};

// 學生班別 → 對應勇者形象（鮮蚵團 / 竹筍團 各一張）
const TEAM_HERO = {
  oyster: {
    img: 'assets/characters/team-oyster-hero.png',
    badgeCn: '鮮蚵勇者',
    badgeEn: 'OYSTER HERO'
  },
  bamboo: {
    img: 'assets/characters/team-bamboo-hero.png',
    badgeCn: '竹筍勇者',
    badgeEn: 'BAMBOO HERO'
  }
};

function cnNameClass(name) {
  const len = (name || '').replace(/\s/g, '').length;
  if (len >= 5) return 'is-very-long';
  if (len >= 4) return 'is-long';
  return '';
}

function QRCanvas({ text, size = 80 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.QRCode || !text) return;
    ref.current.innerHTML = '';
    new window.QRCode(ref.current, {
      text, width: size, height: size,
      colorDark: '#2F1B0C', colorLight: '#FFFBEA',
      correctLevel: window.QRCode.CorrectLevel.M
    });
  }, [text, size]);
  return <div ref={ref} />;
}

// =================== 學生卡 ===================
function StudentCard({ data }) {
  const {
    nameCn = '勇者姓名', nameEn = 'HERO NAME',
    team = 'oyster', session = 'longgang',
    seat = '', contact = '',
    qrUrl = 'https://nb41f002.github.io/oyster-camp/'
  } = data || {};
  const teamLbl = TEAM_LABEL[team] || TEAM_LABEL.oyster;
  const sessLbl = SESSION_LABEL[session] || SESSION_LABEL.longgang;

  return (
    <div className="id-card" data-team={team} data-role="hero">
      <div className="id-card__safe">
        <div className="id-card__band">
          <div className="id-card__band-left">
            <div className="id-card__band-cn">{teamLbl.cn}</div>
            <div className="id-card__band-en">{teamLbl.en}</div>
          </div>
          <div className="id-card__band-emoji">⚔️</div>
        </div>

        <div className="id-card__hero">
          <div className="id-card__hero-badge">
            {(TEAM_HERO[team] || TEAM_HERO.oyster).badgeCn}
            <span className="id-card__hero-badge-en">{(TEAM_HERO[team] || TEAM_HERO.oyster).badgeEn}</span>
          </div>
          <img className="id-card__mascot" src={(TEAM_HERO[team] || TEAM_HERO.oyster).img} alt={(TEAM_HERO[team] || TEAM_HERO.oyster).badgeCn} />
        </div>

        <div className="id-card__name-block">
          <div className="id-card__name-label">Hero Name · 勇者之名</div>
          <div className={`id-card__name-cn ${cnNameClass(nameCn)}`}>{nameCn || '\u00A0'}</div>
          <div className="id-card__name-en">{nameEn || '\u00A0'}</div>
        </div>

        <div className="id-card__footer">
          <div className="id-card__info">
            <div className="id-card__info-row">
              <span className="id-card__info-key">Camp</span>
              <span className="id-card__info-val">{sessLbl.cn}</span>
            </div>
            {seat &&
            <div className="id-card__info-row">
                <span className="id-card__info-key">座號</span>
                <span className="id-card__info-val">{seat}</span>
              </div>
            }
            {contact &&
            <div className="id-card__info-row">
                <span className="id-card__info-key">SOS</span>
                <span className="id-card__info-val">{contact}</span>
              </div>
            }
          </div>
          <div className="id-card__qr">
            <QRCanvas text={qrUrl} size={76} />
            <div className="id-card__qr-label">電子課表<br />SCHEDULE</div>
          </div>
        </div>
      </div>
    </div>);

}

// =================== 老師 NPC 角色卡 ===================
function TeacherCard({ data }) {
  const {
    nameCn = '老師姓名', nameEn = 'TEACHER NAME',
    npc = 'guildMaster', // npc role id
    team = 'oyster',
    session = 'longgang',
    note = '',
    contact = '',
    qrUrl = 'https://nb41f002.github.io/oyster-camp/'
  } = data || {};
  const role = (window.NPC_ROLES || {})[npc] || (window.NPC_ROLES || {}).guildMaster;
  const sessLbl = SESSION_LABEL[session] || SESSION_LABEL.longgang;
  const teamLbl = team === 'all' ?
  { cn: '⚖️ 全班適用', en: 'ALL TEAMS' } :
  TEAM_LABEL[team] || TEAM_LABEL.oyster;

  return (
    <div className="id-card id-card--npc" data-team="teacher" data-role="teacher" data-npc={npc} data-session={session}>
      <div className="id-card__safe">
        {/* 校名角章 */}
        <div className="id-card__school-stamp">
          <span className="school-stamp-emoji">{session === 'longgang' ? '🏫' : '🏯'}</span>
          <span className="school-stamp-cn">{session === 'longgang' ? '龍崗國小' : '保西國小'}</span>
          <span className="school-stamp-date">{session === 'longgang' ? '7/6–7/10' : '8/17–8/21'}</span>
        </div>

        {/* 頂部：NPC 名稱 + emoji */}
        <div className="id-card__band id-card__band--npc">
          <div className="id-card__band-left">
            <div className="id-card__band-cn">
              <span className="npc-emoji">{role.emoji}</span> {role.cnName}
            </div>
            <div className="id-card__band-en">{role.enName}</div>
          </div>
        </div>

        {/* NPC 大頭像 */}
        <div className="id-card__npc-portrait">
          <img src={role.portrait + '?v=2'} alt={role.cnName} crossOrigin="anonymous" />
          <div className="npc-aura"></div>
        </div>

        {/* 老師姓名 */}
        <div className="id-card__name-block id-card__name-block--npc">
          <div className="id-card__name-label">飾演 · Performed by</div>
          <div className={`id-card__name-cn ${cnNameClass(nameCn)}`}>{nameCn}</div>
          <div className="id-card__name-en">{nameEn}</div>
        </div>

        {/* 角色設定 — 遊戲角色卡風格，大字體 */}
        <div className="id-card__lore">
          <div className="lore-title">
            <span className="lore-title-cn">📜 角色設定</span>
            <span className="lore-title-en">CHARACTER LORE</span>
          </div>
          <p className="lore-body">{role.setting}</p>
          {note &&
          <div className="lore-note">⚡ {note}</div>
          }
        </div>

        <div className="id-card__footer">
          <div className="id-card__info">
            <div className="id-card__info-row">
              <span className="id-card__info-key">Team</span>
              <span className="id-card__info-val">{teamLbl.cn}</span>
            </div>
            <div className="id-card__info-row">
              <span className="id-card__info-key">Camp</span>
              <span className="id-card__info-val">{sessLbl.cn}</span>
            </div>
            {contact &&
            <div className="id-card__info-row">
                <span className="id-card__info-key">Tel</span>
                <span className="id-card__info-val">{contact}</span>
              </div>
            }
          </div>
          <div className="id-card__qr">
            <QRCanvas text={qrUrl} size={76} />
            <div className="id-card__qr-label">電子課表<br />SCHEDULE</div>
          </div>
        </div>
      </div>
    </div>);

}

// =================== 統一入口 ===================
function IDCard({ data }) {
  const role = data && (data.role || (data.team === 'teacher' ? 'teacher' : 'hero'));
  if (role === 'teacher') return <TeacherCard data={data} />;
  return <StudentCard data={data} />;
}

// ===== 工具函式 =====
function normalizeCardData(raw) {
  const get = (...keys) => {
    for (const k of keys) {
      if (raw[k] != null && String(raw[k]).trim() !== '') return String(raw[k]).trim();
    }
    return '';
  };
  const teamRaw = get('班別', '組別', 'team').toLowerCase();
  let team = 'oyster';
  if (teamRaw.includes('竹') || teamRaw.includes('bamboo') || teamRaw.includes('高')) team = 'bamboo';else
  if (teamRaw.includes('蚵') || teamRaw.includes('oyster') || teamRaw.includes('低')) team = 'oyster';else
  if (teamRaw.includes('師') || teamRaw.includes('teach') || teamRaw.includes('all')) team = 'teacher';

  const roleRaw = get('身份', '身分', '角色', 'role').toLowerCase();
  const role = team === 'teacher' || roleRaw.includes('師') || roleRaw.includes('teach') ?
  'teacher' : 'hero';

  const sessRaw = get('梯次', '校區', 'session', '學校').toLowerCase();
  let session = 'longgang';
  if (sessRaw.includes('保西') || sessRaw.includes('baoxi') || sessRaw.includes('8/')) session = 'baoxi';

  // NPC 角色辨識
  const npcRaw = get('NPC', '飾演', 'npc').toLowerCase();
  let npc = 'guildMaster';
  if (npcRaw.includes('湯匙') || npcRaw.includes('御廚') || npcRaw.includes('boss')) npc = 'goldenSpoon';else
  if (npcRaw.includes('採購') || npcRaw.includes('market')) npc = 'marketExpert';else
  if (npcRaw.includes('總舖') || npcRaw.includes('總鋪') || npcRaw.includes('chef')) npc = 'masterChef';else
  if (npcRaw.includes('判官') || npcRaw.includes('judge')) npc = 'orderJudge';else
  if (npcRaw.includes('公會') || npcRaw.includes('guild')) npc = 'guildMaster';

  return {
    nameCn: get('中文姓名', '姓名', 'name', '中文名'),
    nameEn: get('英文名', '英文姓名', 'English Name', 'en'),
    team, role, session, npc,
    seat: get('座號', '編號', 'seat'),
    contact: get('緊急聯絡', '緊急聯絡電話', '聯絡電話', 'contact'),
    note: get('備註', 'note'),
    qrUrl: get('QR', 'QR Code', 'qr', 'url') || ''
  };
}

window.IDCard = IDCard;
window.StudentCard = StudentCard;
window.TeacherCard = TeacherCard;
window.normalizeCardData = normalizeCardData;
