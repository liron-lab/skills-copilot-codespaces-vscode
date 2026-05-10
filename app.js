const shops = [
  {
    id: 1,
    name: "גלידת פלדמן",
    neighborhood: "פלורנטין",
    address: "רחוב פלורנטין 10, תל אביב",
    phone: "03-555-1001",
    hours: "ראשון–חמישי 11:00–23:00, שישי 10:00–15:00",
    kosher: ["mehadrin", "chalav-yisrael"],
    authority: "בד\"ץ העדה החרדית",
    flavors: "שוקולד, וניל, תות, פיסטוק, לימון",
    icon: "🍦",
    mapsQuery: "פלורנטין 10 תל אביב",
  },
  {
    id: 2,
    name: "ג'לטו רומא",
    neighborhood: "נווה צדק",
    address: "רחוב שבזי 23, נווה צדק, תל אביב",
    phone: "03-555-2002",
    hours: "יומי 10:00–24:00",
    kosher: ["rabbinate"],
    authority: "רבנות תל אביב",
    flavors: "ג'לטו איטלקי אמיתי: פרלינה, פיסטוק, מנגו, מוקה",
    icon: "🍨",
    mapsQuery: "שבזי 23 נווה צדק תל אביב",
  },
  {
    id: 3,
    name: "ארטיק פרווה",
    neighborhood: "לב תל אביב",
    address: "שדרות רוטשילד 45, תל אביב",
    phone: "03-555-3003",
    hours: "ראשון–שישי 09:00–22:00",
    kosher: ["mehadrin", "pareve"],
    authority: "בד\"ץ מהדרין",
    flavors: "ארטיקים, גלידה טבעונית, סורבה פירות",
    icon: "🧊",
    mapsQuery: "רוטשילד 45 תל אביב",
  },
  {
    id: 4,
    name: "גלידת הכרמל",
    neighborhood: "שוק הכרמל",
    address: "שוק הכרמל, דוכן 18, תל אביב",
    phone: "050-555-4004",
    hours: "ראשון–שישי 08:00–20:00",
    kosher: ["rabbinate", "chalav-yisrael"],
    authority: "רבנות תל אביב–יפו",
    flavors: "גלידה ביתית: שמנת, שוקולד מריר, קוקוס, קרמל",
    icon: "🍦",
    mapsQuery: "שוק הכרמל תל אביב",
  },
  {
    id: 5,
    name: "פרוסטי",
    neighborhood: "רמת אביב",
    address: "דרך נמיר 101, רמת אביב",
    phone: "03-555-5005",
    hours: "יומי 11:00–23:30",
    kosher: ["mehadrin"],
    authority: "בד\"ץ ירושלים",
    flavors: "קוקיז & קרים, בנאנה ספליט, קרמל מלוח, מנגו",
    icon: "🍧",
    mapsQuery: "דרך נמיר 101 רמת אביב",
  },
  {
    id: 6,
    name: "סורבה תל אביב",
    neighborhood: "יפו העתיקה",
    address: "רחוב יפת 55, יפו",
    phone: "03-555-6006",
    hours: "ראשון–שבת 10:00–22:00",
    kosher: ["rabbinate", "pareve"],
    authority: "רבנות יפו",
    flavors: "סורבה טבעי: תפוז, לימון, פסיפלורה, אבטיח",
    icon: "🍋",
    mapsQuery: "יפת 55 יפו תל אביב",
  },
  {
    id: 7,
    name: "בן & ג'ריס כשר",
    neighborhood: "הצפון הישן",
    address: "רחוב דיזנגוף 99, תל אביב",
    phone: "03-555-7007",
    hours: "ראשון–חמישי 12:00–24:00, שישי 11:00–14:30",
    kosher: ["mehadrin", "chalav-yisrael"],
    authority: "בד\"ץ מהדרין",
    flavors: "צ'אנקי מאנקי, צ'רי גרסיה, קוקי דו, פיש פוד",
    icon: "🍦",
    mapsQuery: "דיזנגוף 99 תל אביב",
  },
  {
    id: 8,
    name: "גלידרית האמנויות",
    neighborhood: "הצפון הישן",
    address: "רחוב גורדון 7, תל אביב",
    phone: "03-555-8008",
    hours: "יומי 10:00–23:00",
    kosher: ["rabbinate"],
    authority: "רבנות תל אביב",
    flavors: "טעמים יצירתיים: לבנדר-דבש, זיתים שחורים, מלון-בזיל",
    icon: "🎨",
    mapsQuery: "גורדון 7 תל אביב",
  },
  {
    id: 9,
    name: "קפה גלידה",
    neighborhood: "מרכז",
    address: "רחוב אלנבי 60, תל אביב",
    phone: "03-555-9009",
    hours: "ראשון–שישי 08:00–22:00",
    kosher: ["mehadrin", "chalav-yisrael"],
    authority: "בד\"ץ העדה החרדית",
    flavors: "אספרסו, קפה, שוקולד לבן, ווניל אפריקאי",
    icon: "☕",
    mapsQuery: "אלנבי 60 תל אביב",
  },
  {
    id: 10,
    name: "גלידת הים",
    neighborhood: "נמל תל אביב",
    address: "נמל תל אביב, חנות 5",
    phone: "050-555-1010",
    hours: "יומי 10:00–24:00",
    kosher: ["rabbinate", "pareve"],
    authority: "רבנות תל אביב–יפו",
    flavors: "מלון, קוקוס, פינה קולדה, תות ים",
    icon: "⚓",
    mapsQuery: "נמל תל אביב",
  },
  {
    id: 11,
    name: "גלידת ירקרק",
    neighborhood: "לב תל אביב",
    address: "שדרות בן גוריון 12, תל אביב",
    phone: "03-555-1111",
    hours: "ראשון–חמישי 11:00–22:00, שישי 10:00–14:00",
    kosher: ["mehadrin", "pareve"],
    authority: "בד\"ץ מהדרין",
    flavors: "אבוקדו, מטה, ספירולינה, שמן זית-לימון",
    icon: "🥑",
    mapsQuery: "בן גוריון 12 תל אביב",
  },
  {
    id: 12,
    name: "מר גלידה",
    neighborhood: "בבלי",
    address: "רחוב יהושע בן נון 8, בבלי, תל אביב",
    phone: "03-555-1212",
    hours: "ראשון–שישי 12:00–23:00",
    kosher: ["rabbinate", "chalav-yisrael"],
    authority: "רבנות תל אביב",
    flavors: "גלידת שמנת, בציר, פירות יבשים, חלבה",
    icon: "🍦",
    mapsQuery: "יהושע בן נון 8 תל אביב",
  },
];

const filterMap = {
  mehadrin:       { label: "מהדרין",     cls: "badge-mehadrin"  },
  rabbinate:      { label: "רבנות",      cls: "badge-rabbinate" },
  "chalav-yisrael":{ label: "חלב ישראל", cls: "badge-chalav"    },
  pareve:         { label: "פרווה",      cls: "badge-pareve"    },
};

let activeFilter = "all";
let searchTerm   = "";

function buildCard(shop) {
  const badges = shop.kosher.map(k => {
    const { label, cls } = filterMap[k];
    return `<span class="badge ${cls}">${label}</span>`;
  }).join("");

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}`;

  return `
    <article class="card">
      <div class="card-header">
        <span class="card-icon">${shop.icon}</span>
        <div>
          <div class="card-name">${shop.name}</div>
          <div class="card-neighborhood">${shop.neighborhood}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-row"><span class="icon">📍</span><span>${shop.address}</span></div>
        <div class="card-row"><span class="icon">📞</span><span>${shop.phone}</span></div>
        <div class="card-row"><span class="icon">🕐</span><span>${shop.hours}</span></div>
        <div class="card-row"><span class="icon">✡️</span><span>${shop.authority}</span></div>
        <div class="card-row"><span class="icon">🍨</span><span>${shop.flavors}</span></div>
        <div class="badge-row">${badges}</div>
      </div>
      <div class="card-footer">
        <a class="map-link" href="${mapsUrl}" target="_blank" rel="noopener">פתח במפה ↗</a>
      </div>
    </article>
  `;
}

function render() {
  const term = searchTerm.trim().toLowerCase();

  const filtered = shops.filter(shop => {
    const matchesFilter =
      activeFilter === "all" || shop.kosher.includes(activeFilter);

    const searchable = [shop.name, shop.neighborhood, shop.address, shop.flavors, shop.authority]
      .join(" ").toLowerCase();
    const matchesSearch = !term || searchable.includes(term);

    return matchesFilter && matchesSearch;
  });

  const grid = document.getElementById("cardsGrid");
  const empty = document.getElementById("emptyState");
  const count = document.getElementById("resultsCount");

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
    count.textContent = "";
  } else {
    empty.classList.add("hidden");
    grid.innerHTML = filtered.map(buildCard).join("");
    count.textContent = `נמצאו ${filtered.length} גלידריות`;
  }
}

document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value;
  render();
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  });
});

render();
