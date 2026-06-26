const CRITERIA = {
  minPrice: 5000,
  maxPrice: 8000,
  rooms: 2,
  city: "תל אביב",
  monthLabel: "יולי 2026",
  walkMinutes: 15,
};

// Yad2 – sublet category: topArea=2 (Tel Aviv district), area=1, city=5000 (Tel Aviv)
// rooms param: 2-2, price: 5000-8000, property=sublets
const YAD2_URL =
  "https://www.yad2.co.il/realestate/sublets?topArea=2&area=1&city=5000" +
  "&rooms=2-2&price=" + CRITERIA.minPrice + "-" + CRITERIA.maxPrice +
  "&fromDate=01%2F07%2F2026&toDate=31%2F07%2F2026";

const FACEBOOK_URL =
  "https://www.facebook.com/marketplace/telaviv/propertyrentals" +
  "?minPrice=" + CRITERIA.minPrice +
  "&maxPrice=" + CRITERIA.maxPrice +
  "&exact=false";

const HOMELESS_URL =
  "https://www.homeless.co.il/rent/?city=%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" +
  "&rooms=2&maxprice=8000";

const KOMO_URL =
  "https://www.komo.co.il/apartments-for-rent/tel-aviv/?rooms=2&price_max=8000&sublet=1";

const platforms = [
  {
    name: "יד2 – סאבלט",
    icon: "🏠",
    color: "#e84545",
    description: "האתר הגדול בישראל לנדל\"ן. יש קטגוריית סאבלט ייעודית עם פילטרים לתאריכים.",
    tips: ["חפש בקטגוריה 'השכרה לטווח קצר'", "הגדר תאריכי כניסה ויציאה ליולי"],
    url: YAD2_URL,
    badge: "הכי מומלץ",
  },
  {
    name: "Homeless IL",
    icon: "🔑",
    color: "#2e7d32",
    description: "אתר ישראלי ייעודי לסאבלט ושיתוף דירות. מציאות רבות לחודש אחד.",
    tips: ["עדכן תאריכים ידנית בחיפוש", "צור קשר ישירות עם המשכירים"],
    url: HOMELESS_URL,
    badge: "מתמחה בסאבלט",
  },
  {
    name: "Facebook Marketplace",
    icon: "📘",
    color: "#1877f2",
    description: "קבוצות פייסבוק הן מקור מצוין. חפש גם בקבוצות: 'סאבלט תל אביב' ו-'דירות לטווח קצר ת\"א'.",
    tips: ["הצטרף לקבוצה: 'סאבלט תל אביב 2025-2026'", "פרסם מודעת 'מחפש' עצמאית"],
    url: FACEBOOK_URL,
    badge: null,
  },
  {
    name: "Komo.co.il",
    icon: "🔍",
    color: "#7b1fa2",
    description: "פלטפורמה לנדל\"ן עם אפשרות סינון לסאבלט. תוצאות נוספות שאינן ביד2.",
    tips: ["בחר 'טווח קצר' בסוג המגורים", "הוסף 'קרוב לים' בחיפוש הטקסטואלי"],
    url: KOMO_URL,
    badge: null,
  },
];

const neighborhoods = [
  {
    name: "הצפון הישן",
    icon: "🌊",
    walkTime: "5–10 דקות",
    priceRange: "6,500–8,000 ₪",
    vibe: "שקט, יוקרתי, קרוב לטיילת",
    streets: "הירקון, בן יהודה, דיזנגוף הצפוני",
    seaAccess: "גישה ישירה לחוף גורדון ומציצים",
    rating: 5,
  },
  {
    name: "נווה צדק",
    icon: "🏡",
    walkTime: "10–15 דקות",
    priceRange: "5,500–7,500 ₪",
    vibe: "בוהמי, אמנותי, שקט יחסית",
    streets: "שבזי, חולדה, שדרות ירושלים",
    seaAccess: "חוף הצפוני של יפו ו-Charles Clore",
    rating: 4,
  },
  {
    name: "כרם התימנים",
    icon: "🎨",
    walkTime: "10–12 דקות",
    priceRange: "5,000–7,000 ₪",
    vibe: "תוסס, מעורב, קרוב לשוק ולים",
    streets: "המסגר, הבנים, שדרות הרצל",
    seaAccess: "חוף Charles Clore וחוף הצפון",
    rating: 4,
  },
  {
    name: "לב תל אביב (שינקין)",
    icon: "🛍️",
    walkTime: "12–15 דקות",
    priceRange: "5,500–8,000 ₪",
    vibe: "פולשני, מסחרי, מרכזי",
    streets: "שינקין, בן יהודה הדרומי, ויצמן",
    seaAccess: "חוף Charles Clore",
    rating: 3,
  },
  {
    name: "פלורנטין (צפון)",
    icon: "🎭",
    walkTime: "13–15 דקות",
    priceRange: "5,000–6,500 ₪",
    vibe: "היפסטרי, גרפיטי, חיי לילה",
    streets: "פלורנטין, וולפסון, הפלמ\"ח",
    seaAccess: "חוף Charles Clore / ולנסיה",
    rating: 3,
  },
  {
    name: "נמל תל אביב (צפון הצפון)",
    icon: "⚓",
    walkTime: "3–5 דקות",
    priceRange: "7,000–8,000+ ₪",
    vibe: "פרמיום, מסעדות, שוק הנמל",
    streets: "הירקון צפוני, הנמל",
    seaAccess: "הנמל עצמו, חוף הצפוני",
    rating: 5,
  },
];

const tips = [
  { icon: "📅", text: "יולי הוא חודש שיא. פרסם את הבקשה שלך לפחות 3–4 שבועות מראש – כלומר עכשיו." },
  { icon: "💬", text: "כתוב מודעת 'מחפש דירה' בכל הקבוצות: ציין תאריכים, מחיר, שכונה מועדפת, ופרטים עליך." },
  { icon: "🤝", text: "פנה ישירות לדיירים בפייסבוק – לפעמים הם מחפשים מישהו ולא פרסמו עדיין." },
  { icon: "📸", text: "לפני סגירת עסקה – בקש סיור וידאו או צ'אט לייב. אל תשלם מקדמה ללא אימות." },
  { icon: "📋", text: "גבה חוזה בכתב גם לסאבלט קצר מועד – גם מסמך פשוט עם תאריכים ומחיר מספיק." },
  { icon: "🗓️", text: "תאריכי גמישות? הצע כניסה ב-1 ביולי ויציאה ב-31 ביולי – חודש מלא מקל על המשכיר." },
  { icon: "🌍", text: "בדוק גם Airbnb לדירות לחודש שלם – לעיתים זול יותר ממה שחושבים." },
];

function renderPlatforms() {
  const grid = document.getElementById("platformsGrid");
  grid.innerHTML = platforms.map(p => `
    <a class="platform-card" href="${p.url}" target="_blank" rel="noopener"
       style="--accent: ${p.color}">
      <div class="platform-header">
        <span class="platform-icon">${p.icon}</span>
        <div>
          <div class="platform-name">${p.name}</div>
          ${p.badge ? `<span class="platform-badge">${p.badge}</span>` : ""}
        </div>
      </div>
      <p class="platform-desc">${p.description}</p>
      <ul class="platform-tips">
        ${p.tips.map(t => `<li>${t}</li>`).join("")}
      </ul>
      <div class="platform-cta">פתח חיפוש ↗</div>
    </a>
  `).join("");
}

function renderNeighborhoods() {
  const grid = document.getElementById("neighborhoodsGrid");
  grid.innerHTML = neighborhoods
    .sort((a, b) => b.rating - a.rating)
    .map(n => {
      const stars = "★".repeat(n.rating) + "☆".repeat(5 - n.rating);
      return `
        <article class="neighborhood-card">
          <div class="nb-header">
            <span class="nb-icon">${n.icon}</span>
            <div>
              <div class="nb-name">${n.name}</div>
              <div class="nb-stars">${stars}</div>
            </div>
          </div>
          <div class="nb-body">
            <div class="nb-row"><span class="nb-label">הליכה לים</span><span class="nb-value walk">${n.walkTime}</span></div>
            <div class="nb-row"><span class="nb-label">מחיר משוער</span><span class="nb-value price">${n.priceRange}</span></div>
            <div class="nb-row"><span class="nb-label">אווירה</span><span class="nb-value">${n.vibe}</span></div>
            <div class="nb-row"><span class="nb-label">רחובות</span><span class="nb-value">${n.streets}</span></div>
            <div class="nb-row"><span class="nb-label">גישה לחוף</span><span class="nb-value">${n.seaAccess}</span></div>
          </div>
          <a class="nb-map-btn"
             href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n.name + " תל אביב")}"
             target="_blank" rel="noopener">
            פתח במפה ↗
          </a>
        </article>
      `;
    }).join("");
}

function renderTips() {
  const list = document.getElementById("tipsList");
  list.innerHTML = tips.map(t => `
    <li class="tip-item">
      <span class="tip-icon">${t.icon}</span>
      <span>${t.text}</span>
    </li>
  `).join("");
}

renderPlatforms();
renderNeighborhoods();
renderTips();
