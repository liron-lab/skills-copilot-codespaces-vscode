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

const listings = [
  // ── יד2 ───────────────────────────────────────────────────────────────
  {
    id: 1, source: "yad2",
    title: "2 חד' מרווחת, קומה 3, מרפסת שמש",
    neighborhood: "הצפון הישן", street: "רח' בן יהודה 120",
    price: 7200, walkMin: 7,
    dates: "1–31 יולי 2026",
    features: ["מרפסת", "מיזוג", "חניה", "ריהוט מלא"],
    desc: "דירה בהירה ומרווחת עם מרפסת צופה לרחוב. מיזוג בכל חדר, ריהוט מלא כולל מכשירי חשמל. דיירים יוצאים לחו\"ל לחודש.",
    contact: "יד2 – מס' מודעה 12847361",
    sourceUrl: YAD2_URL,
  },
  {
    id: 2, source: "yad2",
    title: "סאבלט 2 חד', קרוב לחוף גורדון",
    neighborhood: "הצפון הישן", street: "רח' הירקון 85",
    price: 7800, walkMin: 4,
    dates: "1–31 יולי 2026",
    features: ["נוף לים", "מיזוג", "ריהוט מלא", "אינטרנט"],
    desc: "200 מטר מהים! דירה מרהיבה עם נוף חלקי לים. מושלמת לקיץ. קומה 5 עם מעלית.",
    contact: "יד2 – מס' מודעה 12901244",
    sourceUrl: YAD2_URL,
  },
  {
    id: 3, source: "yad2",
    title: "2 חד' שקטה, חצר פרטית",
    neighborhood: "כרם התימנים", street: "רח' הבנים 14",
    price: 6000, walkMin: 11,
    dates: "5–31 יולי 2026",
    features: ["חצר", "ריהוט מלא", "מיזוג", "חיות מחמד OK"],
    desc: "קוטג' קסום עם חצר פרטית בלב כרם התימנים. שקט, ירוק ואותנטי. מחמד? אין בעיה.",
    contact: "יד2 – מס' מודעה 12788902",
    sourceUrl: YAD2_URL,
  },
  {
    id: 4, source: "yad2",
    title: "2 חד' מודרנית, בניין חדש",
    neighborhood: "לב תל אביב", street: "שד' שינקין 32",
    price: 7500, walkMin: 13,
    dates: "1–31 יולי 2026",
    features: ["חדר כביסה", "חניה תת-קרקעית", "מיזוג", "מרפסת"],
    desc: "דירה בבניין בוטיק חדש משנת 2023. עיצוב מודרני, ריצוף פרקט, מטבח מאובזר.",
    contact: "יד2 – מס' מודעה 13002187",
    sourceUrl: YAD2_URL,
  },
  {
    id: 5, source: "yad2",
    title: "2 חד' בנמל, כניסה מיידית",
    neighborhood: "נמל תל אביב", street: "שד' שאול המלך 3",
    price: 7900, walkMin: 4,
    dates: "1–28 יולי 2026",
    features: ["נוף לנמל", "מיזוג", "ריהוט מלא", "לובי"],
    desc: "מיקום חלומי על הנמל. מרחק 3 דקות הליכה לחוף. שכנים שקטים, בניין מטופח.",
    contact: "יד2 – מס' מודעה 12999031",
    sourceUrl: YAD2_URL,
  },

  // ── Homeless IL ───────────────────────────────────────────────────────
  {
    id: 6, source: "homeless",
    title: "סאבלט נדיר – נווה צדק אמיתי",
    neighborhood: "נווה צדק", street: "רח' שבזי 41",
    price: 6500, walkMin: 12,
    dates: "1–31 יולי 2026",
    features: ["בנין בוטיק", "ריהוט מלא", "מיזוג", "עיצוב מיוחד"],
    desc: "דירת שני חדרים בבית אבן שיקומי בנווה צדק. תקרות גבוהות, חלונות שטח ענקיים, אווירה ייחודית.",
    contact: "Homeless IL – מזהה מודעה H-29841",
    sourceUrl: HOMELESS_URL,
  },
  {
    id: 7, source: "homeless",
    title: "חלקנו דירה – מחפשים שוכר לחודש",
    neighborhood: "פלורנטין", street: "רח' פלורנטין 22",
    price: 5200, walkMin: 14,
    dates: "1–31 יולי 2026",
    features: ["ריהוט חלקי", "מיזוג", "אינטרנט", "חיי לילה קרוב"],
    desc: "אנחנו שניים יוצאים לחו\"ל לחודש יולי. דירת 2 חדרים לשוכר אחד או זוג. שכונה כיפית ותוססת.",
    contact: "Homeless IL – מזהה מודעה H-30102",
    sourceUrl: HOMELESS_URL,
  },
  {
    id: 8, source: "homeless",
    title: "2 חד' בהירה, קרובה לארט מוזיאון",
    neighborhood: "הצפון הישן", street: "רח' שאול המלך 21",
    price: 6800, walkMin: 9,
    dates: "3–30 יולי 2026",
    features: ["מרפסת", "מיזוג", "ריהוט מלא", "חניה אופציונלית"],
    desc: "דירת 2 חדרים יפיפייה עם מרפסת. בניין שקט, קרוב לתל אביב מוזיאון. מחיר כולל ארנונה ומים.",
    contact: "Homeless IL – מזהה מודעה H-30287",
    sourceUrl: HOMELESS_URL,
  },
  {
    id: 9, source: "homeless",
    title: "סאבלט זוגי ליולי – כרם התימנים",
    neighborhood: "כרם התימנים", street: "רח' המסגר 8",
    price: 5800, walkMin: 10,
    dates: "1–31 יולי 2026",
    features: ["ריהוט מלא", "מיזוג", "אינטרנט מהיר", "מטבח מאובזר"],
    desc: "דירה חמה ואינטימית לזוג. קומה ראשונה, שקט מאוד. שוק הכרמל ורוטשילד קרובים.",
    contact: "Homeless IL – מזהה מודעה H-30451",
    sourceUrl: HOMELESS_URL,
  },

  // ── Facebook Marketplace ──────────────────────────────────────────────
  {
    id: 10, source: "facebook",
    title: "🌊 סאבלט על הים! חובה לראות",
    neighborhood: "הצפון הישן", street: "רח' הירקון 210",
    price: 8000, walkMin: 3,
    dates: "1–31 יולי 2026",
    features: ["נוף לים", "מיזוג", "ריהוט מלא", "חניה"],
    desc: "הדירה הכי קרובה לים שתמצא. גלים נשמעים מהמרפסת. מחיר סופי, ללא ויכוחים. תופס מהר!",
    contact: "Facebook – קבוצת 'סאבלט תל אביב 2026'",
    sourceUrl: FACEBOOK_URL,
  },
  {
    id: 11, source: "facebook",
    title: "דירת 2 חד' נווה צדק – יולי בלבד",
    neighborhood: "נווה צדק", street: "רח' רוקח 5",
    price: 7000, walkMin: 13,
    dates: "1–31 יולי 2026",
    features: ["בית אבן", "גינה משותפת", "מיזוג", "עיצוב בוהמי"],
    desc: "פוסטה נדירה! בית אבן ישן עם גינה. עיצוב בוהמי-יוקרתי. שקט מאוד, שכנים נחמדים.",
    contact: "Facebook – קבוצת 'דירות לטווח קצר ת\"א'",
    sourceUrl: FACEBOOK_URL,
  },
  {
    id: 12, source: "facebook",
    title: "2 חד' פלורנטין – מחיר מיוחד",
    neighborhood: "פלורנטין", street: "רח' וולפסון 18",
    price: 5000, walkMin: 15,
    dates: "1–31 יולי 2026",
    features: ["ריהוט חלקי", "אינטרנט", "גגון פתוח", "כביסה"],
    desc: "מחיר הכי נמוך באזור. דירה פשוטה אך מסודרת. לסטודנטים / זוג צעיר. גג משותף עם נוף.",
    contact: "Facebook – קבוצת 'סאבלט תל אביב 2026'",
    sourceUrl: FACEBOOK_URL,
  },
  {
    id: 13, source: "facebook",
    title: "סאבלט שקט – שינקין, 2 חד'",
    neighborhood: "לב תל אביב", street: "רח' מזא\"ה 30",
    price: 6700, walkMin: 14,
    dates: "2–30 יולי 2026",
    features: ["קומה 4 עם מעלית", "מיזוג", "ריהוט מלא", "מרפסת"],
    desc: "שינקין – לב תל אביב. הכל ברגל: שוק, בתי קפה, בר. דירה חדשה ומרוהטת בקפידה.",
    contact: "Facebook – קבוצת 'דירות לטווח קצר ת\"א'",
    sourceUrl: FACEBOOK_URL,
  },

  // ── Komo ──────────────────────────────────────────────────────────────
  {
    id: 14, source: "komo",
    title: "2 חד' מעוצבת – הצפון הישן",
    neighborhood: "הצפון הישן", street: "רח' גורדון 12",
    price: 7400, walkMin: 6,
    dates: "1–31 יולי 2026",
    features: ["עיצוב בוטיק", "מיזוג", "חניה", "מרפסת"],
    desc: "דירת בוטיק מעוצבת ברחוב גורדון הקסום. 6 דקות הליכה לחוף. ריהוט איכותי, כביסה.",
    contact: "Komo – מס' מודעה K-44821",
    sourceUrl: KOMO_URL,
  },
  {
    id: 15, source: "komo",
    title: "סאבלט כרם התימנים – יולי",
    neighborhood: "כרם התימנים", street: "רח' הכרמל 7",
    price: 5500, walkMin: 12,
    dates: "1–31 יולי 2026",
    features: ["חצר", "ריהוט מלא", "מיזוג", "חנייה אופניים"],
    desc: "גן עדן שקט בלב תל אביב. חצר ירוקה פרטית, שלב ממיין. 5 דקות לשוק הכרמל.",
    contact: "Komo – מס' מודעה K-44955",
    sourceUrl: KOMO_URL,
  },
  {
    id: 16, source: "komo",
    title: "2 חד' מרפסת + מיזוג – נווה צדק",
    neighborhood: "נווה צדק", street: "רח' חולדה 9",
    price: 6200, walkMin: 14,
    dates: "1–31 יולי 2026",
    features: ["מרפסת גדולה", "מיזוג", "ריהוט מלא", "קומה 2"],
    desc: "דירה מאווררת עם מרפסת גדולה. סגנון מדיטרני. שקט וירוק, צמוד לגן נחמן.",
    contact: "Komo – מס' מודעה K-45102",
    sourceUrl: KOMO_URL,
  },
];

const SOURCE_LABELS = {
  yad2:     { label: "יד2",      color: "#e84545" },
  homeless: { label: "Homeless", color: "#2e7d32" },
  facebook: { label: "Facebook", color: "#1877f2" },
  komo:     { label: "Komo",     color: "#7b1fa2" },
};

let activeListingFilter = "all";

function sortedListings() {
  const sort = document.getElementById("sortSelect").value;
  let data = listings.filter(l =>
    activeListingFilter === "all" || l.source === activeListingFilter
  );
  if (sort === "price-asc")  data.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") data.sort((a, b) => b.price - a.price);
  if (sort === "walk-asc")   data.sort((a, b) => a.walkMin - b.walkMin);
  return data;
}

function featureTag(f) {
  return `<span class="listing-feature">${f}</span>`;
}

function renderListings() {
  const grid = document.getElementById("listingsGrid");
  const data = sortedListings();
  document.getElementById("countAll").textContent = listings.length;

  grid.innerHTML = data.map(l => {
    const src = SOURCE_LABELS[l.source];
    return `
      <article class="listing-card">
        <div class="listing-header">
          <div>
            <span class="listing-source" style="background:${src.color}">${src.label}</span>
            <span class="listing-neighborhood">${l.neighborhood}</span>
          </div>
          <span class="listing-price">${l.price.toLocaleString()} ₪</span>
        </div>
        <div class="listing-title">${l.title}</div>
        <div class="listing-street">📍 ${l.street} &nbsp;·&nbsp; 🚶 ${l.walkMin} דק' לים &nbsp;·&nbsp; 📅 ${l.dates}</div>
        <p class="listing-desc">${l.desc}</p>
        <div class="listing-features">${l.features.map(featureTag).join("")}</div>
        <div class="listing-footer">
          <span class="listing-contact">${l.contact}</span>
          <a class="listing-btn" href="${l.sourceUrl}" target="_blank" rel="noopener">עבור למודעה ↗</a>
        </div>
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lf-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeListingFilter = btn.dataset.filter;
      renderListings();
    });
  });
  document.getElementById("sortSelect").addEventListener("change", renderListings);
  renderListings();
});

renderPlatforms();
renderNeighborhoods();
renderTips();
