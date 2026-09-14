/* =========================================================
   PRIME ESTATES — SCRIPT.JS
   All interactive functionality: property data, search & filter,
   load more, details modal, favorites (localStorage), testimonial
   slider, form submission (Formspree), mobile nav, smooth scroll.
   ========================================================= */

/* ---------------------------------------------------------
   1. PROPERTY DATA
   To customise: edit or add objects to this array. Every
   section (featured, all properties, search) reads from here.
--------------------------------------------------------- */
const PROPERTIES = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "DHA Lahore",
    category: "villa",
    purpose: "sale",
    price: 85000000,
    priceLabel: "PKR 85,000,000",
    beds: 5,
    baths: 6,
    area: "1 Kanal",
    featured: true,
    description: "A statement villa set on a full kanal in DHA, with soaring double-height living spaces, a private lawn, and finishes chosen for a family that entertains often.",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Swimming Pool", "Garden", "Gym", "Air Conditioning", "CCTV", "Balcony"],
    agent: "Ali Ahmed"
  },
  {
    id: 2,
    title: "Modern Family House",
    location: "Bahria Town Lahore",
    category: "house",
    purpose: "sale",
    price: 35000000,
    priceLabel: "PKR 35,000,000",
    beds: 4,
    baths: 4,
    area: "10 Marla",
    featured: true,
    description: "A well-planned 10 Marla home in a gated community, close to parks and schools, with a functional layout for a growing family.",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Garden", "Balcony", "Air Conditioning", "CCTV"],
    agent: "Sana Malik"
  },
  {
    id: 3,
    title: "Luxury Apartment",
    location: "Gulberg Lahore",
    category: "apartment",
    purpose: "sale",
    price: 18000000,
    priceLabel: "PKR 18,000,000",
    beds: 3,
    baths: 3,
    area: "1,500 sq. ft.",
    featured: true,
    description: "A bright, centrally located apartment in the heart of Gulberg, walking distance to Liberty Market and MM Alam Road dining.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Gym", "Balcony", "Air Conditioning", "CCTV"],
    agent: "Bilal Chaudhry"
  },
  {
    id: 4,
    title: "Modern Apartment",
    location: "Johar Town Lahore",
    category: "apartment",
    purpose: "rent",
    price: 80000,
    priceLabel: "PKR 80,000 / Month",
    beds: 2,
    baths: 2,
    area: "1,200 sq. ft.",
    featured: true,
    description: "A move-in ready two-bedroom apartment in a well-maintained block, ideal for a small family or working professionals.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Balcony", "Air Conditioning"],
    agent: "Sana Malik"
  },
  {
    id: 5,
    title: "Family Home",
    location: "Model Town Lahore",
    category: "house",
    purpose: "rent",
    price: 150000,
    priceLabel: "PKR 150,000 / Month",
    beds: 4,
    baths: 4,
    area: "10 Marla",
    featured: true,
    description: "A tree-lined street in Model Town frames this comfortable 10 Marla rental, with a lawn front and back and generous natural light.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Garden", "CCTV"],
    agent: "Ali Ahmed"
  },
  {
    id: 6,
    title: "Luxury Penthouse",
    location: "DHA Phase 6 Lahore",
    category: "apartment",
    purpose: "sale",
    price: 45000000,
    priceLabel: "PKR 45,000,000",
    beds: 4,
    baths: 5,
    area: "3,000 sq. ft.",
    featured: true,
    description: "A top-floor penthouse with wraparound terraces, panoramic views of DHA Phase 6, and premium finishes throughout.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560449017-7d1a6f6b3b9e?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Swimming Pool", "Gym", "Balcony", "Air Conditioning", "CCTV"],
    agent: "Bilal Chaudhry"
  },
  {
    id: 7,
    title: "Contemporary Bungalow",
    location: "Cavalry Ground Lahore",
    category: "house",
    purpose: "sale",
    price: 62000000,
    priceLabel: "PKR 62,000,000",
    beds: 5,
    baths: 5,
    area: "1 Kanal",
    description: "A single-storey bungalow reimagined with clean lines and an open kitchen, set on a quiet cul-de-sac.",
    images: [
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Garden", "Gym", "CCTV"],
    agent: "Ayesha Raza"
  },
  {
    id: 8,
    title: "Cozy Studio Apartment",
    location: "Garden Town Lahore",
    category: "apartment",
    purpose: "rent",
    price: 55000,
    priceLabel: "PKR 55,000 / Month",
    beds: 1,
    baths: 1,
    area: "650 sq. ft.",
    description: "A compact, well-lit studio close to markets and transport links — a smart choice for a single professional.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Air Conditioning"],
    agent: "Sana Malik"
  },
  {
    id: 9,
    title: "Elegant Corner House",
    location: "Wapda Town Lahore",
    category: "house",
    purpose: "sale",
    price: 41000000,
    priceLabel: "PKR 41,000,000",
    beds: 4,
    baths: 4,
    area: "12 Marla",
    description: "A corner plot brings extra light and a wraparound garden to this recently renovated family home.",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Garden", "Balcony", "CCTV"],
    agent: "Ayesha Raza"
  },
  {
    id: 10,
    title: "Skyline Business Suite",
    location: "Main Boulevard Gulberg",
    category: "commercial",
    purpose: "rent",
    price: 220000,
    priceLabel: "PKR 220,000 / Month",
    beds: 0,
    baths: 2,
    area: "2,400 sq. ft.",
    description: "A fitted-out office suite on Main Boulevard, with meeting rooms, a reception area, and dedicated parking bays.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "CCTV", "Air Conditioning"],
    agent: "Bilal Chaudhry"
  },
  {
    id: 11,
    title: "Retail Plaza Shop",
    location: "Barkat Market Lahore",
    category: "commercial",
    purpose: "sale",
    price: 28000000,
    priceLabel: "PKR 28,000,000",
    beds: 0,
    baths: 1,
    area: "900 sq. ft.",
    description: "A ground-floor retail unit on a high-footfall market street, suited to a flagship store or showroom.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Security", "CCTV"],
    agent: "Ali Ahmed"
  },
  {
    id: 12,
    title: "Garden View Villa",
    location: "DHA Phase 5 Lahore",
    category: "villa",
    purpose: "rent",
    price: 280000,
    priceLabel: "PKR 280,000 / Month",
    beds: 5,
    baths: 5,
    area: "1 Kanal",
    description: "A fully furnished villa with a landscaped garden and covered patio, ready for immediate move-in.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Swimming Pool", "Garden", "Gym", "Balcony", "Air Conditioning", "CCTV"],
    agent: "Ayesha Raza"
  },
  {
    id: 13,
    title: "Compact Apartment",
    location: "Township Lahore",
    category: "apartment",
    purpose: "sale",
    price: 9500000,
    priceLabel: "PKR 9,500,000",
    beds: 2,
    baths: 2,
    area: "950 sq. ft.",
    description: "An entry-level apartment in a family-friendly society, a practical first step onto the property ladder.",
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Air Conditioning"],
    agent: "Sana Malik"
  },
  {
    id: 14,
    title: "Executive Villa",
    location: "EME Society Lahore",
    category: "villa",
    purpose: "sale",
    price: 55000000,
    priceLabel: "PKR 55,000,000",
    beds: 6,
    baths: 6,
    area: "1 Kanal",
    description: "A commanding double-storey villa with a home office, guest wing, and a basement designed for entertaining.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752734-2a0cd53c6a37?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Parking", "Security", "Garden", "Gym", "Balcony", "Air Conditioning", "CCTV"],
    agent: "Bilal Chaudhry"
  }
];

const AGENTS = [
  {
    name: "Ali Ahmed",
    title: "Senior Property Consultant",
    desc: "Over 12 years helping families find homes across DHA and Bahria Town.",
    phone: "+923001234567",
    email: "ali.ahmed@primeestates.com",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Sana Malik",
    title: "Residential Sales Manager",
    desc: "Specialises in apartments and family homes in Johar Town and Gulberg.",
    phone: "+923001234568",
    email: "sana.malik@primeestates.com",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Bilal Chaudhry",
    title: "Commercial & Investment Advisor",
    desc: "Guides investors toward high-yield commercial and rental opportunities.",
    phone: "+923001234569",
    email: "bilal.chaudhry@primeestates.com",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Ayesha Raza",
    title: "Luxury Property Specialist",
    desc: "Focused on premium villas and penthouses across Lahore's finest addresses.",
    phone: "+923001234570",
    email: "ayesha.raza@primeestates.com",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
  }
];

const TESTIMONIALS = [
  {
    name: "Hassan Iqbal",
    role: "Homeowner, DHA Lahore",
    stars: 5,
    quote: "Prime Estates made finding our dream home incredibly easy. Their team was professional and helpful throughout the entire process.",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Mahnoor Sheikh",
    role: "Tenant, Johar Town",
    stars: 5,
    quote: "I was new to Lahore and had no idea where to start. The agent understood exactly what I needed and found me an apartment within a week.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Usman Tariq",
    role: "Investor",
    stars: 4,
    quote: "Solid market knowledge and honest advice. They pointed out risks on a couple of listings I liked rather than just pushing the sale.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Zainab Farooq",
    role: "Seller, Model Town",
    stars: 5,
    quote: "We sold our family home above asking price. Communication was clear at every step and the paperwork was handled smoothly.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
  }
];

/* ---------------------------------------------------------
   2. STATE
--------------------------------------------------------- */
const FAVORITES_KEY = "primeEstatesFavorites";
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");

let activeCategory = "all";
let visibleCount = 6; // how many "all properties" cards are shown (Load More)
const LOAD_STEP = 6;

/* ---------------------------------------------------------
   3. HELPERS
--------------------------------------------------------- */
function formatBeds(p){ return p.beds === 0 ? "N/A" : p.beds; }

function propertyMatchesGlobalSearch(p, params){
  if (params.type && params.type !== "all" && p.category !== params.type) return false;
  if (params.purpose && params.purpose !== "all" && p.purpose !== params.purpose) return false;
  if (params.location){
    const loc = params.location.toLowerCase();
    if (!p.location.toLowerCase().includes(loc) && !p.title.toLowerCase().includes(loc)) return false;
  }
  if (params.minPrice && p.price < Number(params.minPrice)) return false;
  if (params.maxPrice && p.price > Number(params.maxPrice)) return false;
  return true;
}

function isFavorite(id){ return favorites.includes(id); }

function toggleFavorite(id){
  if (isFavorite(id)){
    favorites = favorites.filter(f => f !== id);
    showToast("Removed from favorites");
  } else {
    favorites.push(id);
    showToast("Added to favorites");
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  updateFavoritesUI();
}

function updateFavoritesUI(){
  document.getElementById("favoritesCount").textContent = favorites.length;
  document.querySelectorAll(".favorite-btn").forEach(btn => {
    const id = Number(btn.dataset.id);
    btn.classList.toggle("is-favorite", isFavorite(id));
    const icon = btn.querySelector("i");
    if (icon){ icon.className = isFavorite(id) ? "fa-solid fa-heart" : "fa-regular fa-heart"; }
  });
  renderFavoritesDrawer();
}

let toastTimer = null;
function showToast(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ---------------------------------------------------------
   4. RENDER: PROPERTY CARD
--------------------------------------------------------- */
function createPropertyCard(p){
  const card = document.createElement("div");
  card.className = "property-card";
  card.dataset.id = p.id;
  card.dataset.category = p.category;
  card.dataset.purpose = p.purpose;

  const badgeClass = p.purpose === "rent" ? "property-badge badge-rent" : "property-badge";
  const badgeLabel = p.purpose === "rent" ? "For Rent" : "For Sale";
  const favClass = isFavorite(p.id) ? "favorite-btn is-favorite" : "favorite-btn";
  const heartIcon = isFavorite(p.id) ? "fa-solid fa-heart" : "fa-regular fa-heart";

  card.innerHTML = `
    <div class="property-media">
      <img src="${p.images[0]}" alt="${p.title} in ${p.location}" loading="lazy">
      <span class="${badgeClass}">${badgeLabel}</span>
      <button class="${favClass}" data-id="${p.id}" aria-label="Toggle favorite">
        <i class="${heartIcon}"></i>
      </button>
    </div>
    <div class="property-body">
      <h3 class="property-title">${p.title}</h3>
      <p class="property-location"><i class="fa-solid fa-location-dot"></i> ${p.location}</p>
      <div class="property-meta">
        <span><i class="fa-solid fa-bed"></i> ${formatBeds(p)} Beds</span>
        <span><i class="fa-solid fa-bath"></i> ${p.baths} Baths</span>
        <span><i class="fa-solid fa-ruler-combined"></i> ${p.area}</span>
      </div>
      <div class="property-footer">
        <span class="property-price">${p.priceLabel}</span>
        <button class="view-details-btn" data-id="${p.id}">View Details</button>
      </div>
    </div>
  `;
  return card;
}

/* ---------------------------------------------------------
   5. RENDER: FEATURED PROPERTIES
--------------------------------------------------------- */
function renderFeatured(){
  const grid = document.getElementById("featuredGrid");
  grid.innerHTML = "";
  PROPERTIES.filter(p => p.featured).forEach(p => grid.appendChild(createPropertyCard(p)));
}

/* ---------------------------------------------------------
   6. RENDER: ALL PROPERTIES + FILTERS
--------------------------------------------------------- */
function getFilteredProperties(){
  const keyword = document.getElementById("filterKeyword").value.trim().toLowerCase();
  const purpose = document.getElementById("filterPurpose").value;
  const location = document.getElementById("filterLocation").value;
  const beds = document.getElementById("filterBedrooms").value;
  const minPrice = document.getElementById("filterMinPrice").value;
  const maxPrice = document.getElementById("filterMaxPrice").value;

  return PROPERTIES.filter(p => {
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    if (purpose !== "all" && p.purpose !== purpose) return false;
    if (location !== "all" && p.location !== location) return false;
    if (beds !== "all" && p.beds < Number(beds)) return false;
    if (minPrice && p.price < Number(minPrice)) return false;
    if (maxPrice && p.price > Number(maxPrice)) return false;
    if (keyword && !p.title.toLowerCase().includes(keyword) && !p.location.toLowerCase().includes(keyword)) return false;
    return true;
  });
}

function populateLocationFilter(){
  const select = document.getElementById("filterLocation");
  const locations = [...new Set(PROPERTIES.map(p => p.location))].sort();
  locations.forEach(loc => {
    const opt = document.createElement("option");
    opt.value = loc;
    opt.textContent = loc;
    select.appendChild(opt);
  });
}

function renderAllProperties(){
  const grid = document.getElementById("allPropertiesGrid");
  const noResults = document.getElementById("noResultsMsg");
  const resultsCount = document.getElementById("resultsCount");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  const filtered = getFilteredProperties();
  grid.innerHTML = "";

  if (filtered.length === 0){
    noResults.hidden = false;
    loadMoreBtn.classList.add("is-hidden");
    resultsCount.textContent = "0 properties found";
    return;
  }

  noResults.hidden = true;
  resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "property" : "properties"} found`;

  const toShow = filtered.slice(0, visibleCount);
  toShow.forEach(p => grid.appendChild(createPropertyCard(p)));

  loadMoreBtn.classList.toggle("is-hidden", visibleCount >= filtered.length);
  updateFavoritesUI();
}

/* ---------------------------------------------------------
   7. RENDER: AGENTS
--------------------------------------------------------- */
function renderAgents(){
  const grid = document.getElementById("agentsGrid");
  grid.innerHTML = "";
  AGENTS.forEach(a => {
    const waLink = `https://wa.me/${a.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hello " + a.name + ", I would like more information about a property.")}`;
    const card = document.createElement("div");
    card.className = "agent-card";
    card.innerHTML = `
      <div class="agent-photo"><img src="${a.photo}" alt="${a.name}, ${a.title}" loading="lazy"></div>
      <div class="agent-body">
        <h3 class="agent-name">${a.name}</h3>
        <p class="agent-title">${a.title}</p>
        <p class="agent-desc">${a.desc}</p>
        <div class="agent-actions">
          <a href="tel:${a.phone}" aria-label="Call ${a.name}"><i class="fa-solid fa-phone"></i></a>
          <a href="mailto:${a.email}" aria-label="Email ${a.name}"><i class="fa-solid fa-envelope"></i></a>
          <a href="${waLink}" class="whatsapp-link" target="_blank" rel="noopener" aria-label="WhatsApp ${a.name}"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   8. RENDER: FAVORITES DRAWER
--------------------------------------------------------- */
function renderFavoritesDrawer(){
  const body = document.getElementById("favoritesBody");
  const favProps = PROPERTIES.filter(p => favorites.includes(p.id));

  if (favProps.length === 0){
    body.innerHTML = `<div class="drawer-empty"><i class="fa-regular fa-heart"></i>No favorites yet. Tap the heart icon on any property to save it here.</div>`;
    return;
  }

  body.innerHTML = "";
  favProps.forEach(p => {
    const item = document.createElement("div");
    item.className = "fav-item";
    item.innerHTML = `
      <img src="${p.images[0]}" alt="${p.title}">
      <div class="fav-item-body">
        <h5>${p.title}</h5>
        <p>${p.location}</p>
        <p class="fav-price">${p.priceLabel}</p>
        <button class="fav-remove-btn" data-id="${p.id}">Remove</button>
      </div>
    `;
    body.appendChild(item);
  });
}

/* ---------------------------------------------------------
   9. PROPERTY DETAILS MODAL
--------------------------------------------------------- */
function openPropertyModal(id){
  const p = PROPERTIES.find(prop => prop.id === id);
  if (!p) return;

  const modal = document.getElementById("propertyModal");
  const content = document.getElementById("modalContent");
  const badgeLabel = p.purpose === "rent" ? "For Rent" : "For Sale";
  const waMessage = encodeURIComponent(`Hello, I am interested in "${p.title}" (${p.location}). Please share more details.`);
  const waLink = `https://wa.me/923001234567?text=${waMessage}`;

  content.innerHTML = `
    <div class="modal-gallery-main">
      <img id="modalMainImg" src="${p.images[0]}" alt="${p.title}">
    </div>
    <div class="modal-gallery-thumbs">
      ${p.images.map((img, i) => `<img src="${img}" data-src="${img}" class="${i === 0 ? "active" : ""}" alt="${p.title} view ${i + 1}">`).join("")}
    </div>
    <div class="modal-info">
      <div class="modal-badges">
        <span class="property-badge ${p.purpose === "rent" ? "badge-rent" : ""}" style="position:static;">${badgeLabel}</span>
      </div>
      <h2 class="modal-title" id="modalTitle">${p.title}</h2>
      <p class="modal-location"><i class="fa-solid fa-location-dot"></i> ${p.location}</p>
      <p class="modal-price">${p.priceLabel}</p>

      <div class="modal-meta-row">
        <div><i class="fa-solid fa-bed"></i><span>${formatBeds(p)}</span><small>Bedrooms</small></div>
        <div><i class="fa-solid fa-bath"></i><span>${p.baths}</span><small>Bathrooms</small></div>
        <div><i class="fa-solid fa-ruler-combined"></i><span>${p.area}</span><small>Area</small></div>
        <div><i class="fa-solid fa-tag"></i><span>${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span><small>Type</small></div>
      </div>

      <div class="modal-section">
        <h4>Description</h4>
        <p>${p.description}</p>
      </div>

      <div class="modal-section">
        <h4>Amenities</h4>
        <div class="amenities-grid">
          ${p.amenities.map(a => `<div class="amenity-item"><i class="fa-solid fa-check"></i> ${a}</div>`).join("")}
        </div>
      </div>

      <div class="modal-actions">
        <a href="#contact" class="btn btn-outline" id="modalContactAgentBtn">Contact Agent</a>
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp Agent</a>
      </div>
    </div>
  `;

  // Gallery thumbnail click behaviour
  content.querySelectorAll(".modal-gallery-thumbs img").forEach(thumb => {
    thumb.addEventListener("click", () => {
      document.getElementById("modalMainImg").src = thumb.dataset.src;
      content.querySelectorAll(".modal-gallery-thumbs img").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Prefill inquiry form's property field when "Contact Agent" is clicked
  content.querySelector("#modalContactAgentBtn").addEventListener("click", () => {
    closePropertyModal();
    setTimeout(() => {
      const inqProperty = document.getElementById("inqProperty");
      if (inqProperty) inqProperty.value = `${p.title}, ${p.location}`;
    }, 300);
  });

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePropertyModal(){
  document.getElementById("propertyModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------
   10. FAVORITES DRAWER OPEN/CLOSE
--------------------------------------------------------- */
function openFavoritesDrawer(){
  renderFavoritesDrawer();
  document.getElementById("favoritesOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeFavoritesDrawer(){
  document.getElementById("favoritesOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------
   11. TESTIMONIAL SLIDER
--------------------------------------------------------- */
let testimonialIndex = 0;

function renderTestimonials(){
  const track = document.getElementById("testimonialTrack");
  const dotsWrap = document.getElementById("testimonialDots");
  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  TESTIMONIALS.forEach((t, i) => {
    const stars = Array.from({ length: 5 }, (_, s) => `<i class="${s < t.stars ? "fa-solid" : "fa-regular"} fa-star"></i>`).join("");
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <div class="testimonial-photo"><img src="${t.photo}" alt="${t.name}"></div>
      <div>
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <p class="testimonial-name">${t.name}</p>
        <p class="testimonial-role">${t.role}</p>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement("span");
    dot.className = i === 0 ? "active" : "";
    dot.addEventListener("click", () => goToTestimonial(i));
    dotsWrap.appendChild(dot);
  });
}

function goToTestimonial(index){
  const total = TESTIMONIALS.length;
  testimonialIndex = (index + total) % total;
  const track = document.getElementById("testimonialTrack");
  track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  document.querySelectorAll("#testimonialDots span").forEach((dot, i) => {
    dot.classList.toggle("active", i === testimonialIndex);
  });
}

/* ---------------------------------------------------------
   12. STAT COUNTER ANIMATION
--------------------------------------------------------- */
function animateStats(){
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach(counter => {
    const target = Number(counter.dataset.count);
    const duration = 1400;
    const startTime = performance.now();

    function tick(now){
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else counter.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  });
}

function initStatsObserver(){
  const statsSection = document.querySelector(".stats-section");
  if (!statsSection) return;
  let played = false;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !played){
        played = true;
        animateStats();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });
  observer.observe(statsSection);
}

/* ---------------------------------------------------------
   13. FORM SUBMISSION (Formspree)
   Works for the inquiry, list-property, and contact forms.
   To go live: replace each form's `action` attribute in
   index.html with your real Formspree endpoint URL.
--------------------------------------------------------- */
function initFormHandler(formId, statusId){
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Basic required-field validation
    let valid = true;
    form.querySelectorAll("[required]").forEach(field => {
      const wrapper = field.closest(".form-field");
      if (!field.value.trim()){
        valid = false;
        if (wrapper) wrapper.classList.add("field-error");
      } else if (wrapper){
        wrapper.classList.remove("field-error");
      }
    });

    if (!valid){
      status.textContent = "Please fill in all required fields.";
      status.className = "form-status error";
      return;
    }

    const submitBtn = form.querySelector(".form-submit");
    submitBtn.disabled = true;
    submitBtn.classList.add("is-loading");
    status.textContent = "";
    status.className = "form-status";

    // Placeholder Formspree endpoint check — remove this block once a real endpoint is set
    if (form.action.includes("YOUR_FORM_ID")){
      await new Promise(res => setTimeout(res, 900));
      submitBtn.disabled = false;
      submitBtn.classList.remove("is-loading");
      status.textContent = formId === "listPropertyForm"
        ? "Thank you! Your property information has been received. Our team will contact you shortly."
        : "Thank you! Your message has been sent. (Demo mode — add your Formspree endpoint in index.html to send real emails.)";
      status.className = "form-status success";
      form.reset();
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (response.ok){
        status.textContent = formId === "listPropertyForm"
          ? "Thank you! Your property information has been received. Our team will contact you shortly."
          : "Thank you! Your message has been sent successfully.";
        status.className = "form-status success";
        form.reset();
      } else {
        status.textContent = "Something went wrong. Please try again or contact us directly.";
        status.className = "form-status error";
      }
    } catch (err){
      status.textContent = "Network error. Please check your connection and try again.";
      status.className = "form-status error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove("is-loading");
    }
  });
}

/* ---------------------------------------------------------
   14. EVENT DELEGATION: cards, modal, favorites
--------------------------------------------------------- */
function initGlobalClickHandlers(){
  document.addEventListener("click", (e) => {
    const viewBtn = e.target.closest(".view-details-btn");
    if (viewBtn){ openPropertyModal(Number(viewBtn.dataset.id)); return; }

    const favBtn = e.target.closest(".favorite-btn");
    if (favBtn){ toggleFavorite(Number(favBtn.dataset.id)); return; }

    const favRemoveBtn = e.target.closest(".fav-remove-btn");
    if (favRemoveBtn){ toggleFavorite(Number(favRemoveBtn.dataset.id)); return; }

    // "Buy"/"Rent" nav & footer links that should filter the property grid
    const filterTabLink = e.target.closest("[data-filter-tab]");
    if (filterTabLink){
      e.preventDefault();
      const purpose = filterTabLink.dataset.filterTab;
      document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
      if (purpose === "buy" || purpose === "sale"){
        document.getElementById("filterPurpose").value = "sale";
      } else if (purpose === "rent"){
        document.getElementById("filterPurpose").value = "rent";
      } else {
        activeCategory = purpose;
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.category === purpose));
      }
      visibleCount = LOAD_STEP;
      renderAllProperties();
      closeMobileNav();
      return;
    }
  });
}

/* ---------------------------------------------------------
   15. MOBILE NAV
--------------------------------------------------------- */
function closeMobileNav(){
  document.getElementById("mobileNav").classList.remove("open");
  document.getElementById("hamburgerBtn").setAttribute("aria-expanded", "false");
}

function initMobileNav(){
  const btn = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("mobileNav");
  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll(".mobile-link").forEach(link => link.addEventListener("click", closeMobileNav));
}

/* ---------------------------------------------------------
   16. HEADER SCROLL STATE (active nav highlighting)
--------------------------------------------------------- */
function initScrollSpy(){
  const sections = ["home", "properties", "about", "agents", "contact"];
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 140) current = id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }, { passive: true });
}

/* ---------------------------------------------------------
   17. INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Initial renders
  populateLocationFilter();
  renderFeatured();
  renderAllProperties();
  renderAgents();
  renderTestimonials();
  updateFavoritesUI();
  initStatsObserver();
  initMobileNav();
  initScrollSpy();
  initGlobalClickHandlers();

  // Category tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      visibleCount = LOAD_STEP;
      renderAllProperties();
    });
  });

  // Filter bar inputs
  ["filterKeyword", "filterPurpose", "filterLocation", "filterBedrooms", "filterMinPrice", "filterMaxPrice"].forEach(id => {
    const el = document.getElementById(id);
    const evt = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evt, () => { visibleCount = LOAD_STEP; renderAllProperties(); });
  });

  document.getElementById("resetFiltersBtn").addEventListener("click", () => {
    document.getElementById("filterKeyword").value = "";
    document.getElementById("filterPurpose").value = "all";
    document.getElementById("filterLocation").value = "all";
    document.getElementById("filterBedrooms").value = "all";
    document.getElementById("filterMinPrice").value = "";
    document.getElementById("filterMaxPrice").value = "";
    activeCategory = "all";
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
    visibleCount = LOAD_STEP;
    renderAllProperties();
  });

  // Load more
  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    visibleCount += LOAD_STEP;
    renderAllProperties();
  });

  // Hero search box -> applies filters and scrolls to results
  document.getElementById("propertySearchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.getElementById("searchType").value;
    const purpose = document.getElementById("searchPurpose").value;
    const location = document.getElementById("searchLocation").value;
    const minPrice = document.getElementById("searchMinPrice").value;
    const maxPrice = document.getElementById("searchMaxPrice").value;

    activeCategory = type;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.category === type));
    document.getElementById("filterPurpose").value = purpose;
    document.getElementById("filterKeyword").value = location;
    document.getElementById("filterMinPrice").value = minPrice;
    document.getElementById("filterMaxPrice").value = maxPrice;
    document.getElementById("filterLocation").value = "all";
    document.getElementById("filterBedrooms").value = "all";

    visibleCount = LOAD_STEP;
    renderAllProperties();
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
  });

  // Modal close
  document.getElementById("modalCloseBtn").addEventListener("click", closePropertyModal);
  document.getElementById("propertyModal").addEventListener("click", (e) => {
    if (e.target.id === "propertyModal") closePropertyModal();
  });

  // Favorites drawer
  document.getElementById("favoritesBtn").addEventListener("click", openFavoritesDrawer);
  document.getElementById("favoritesCloseBtn").addEventListener("click", closeFavoritesDrawer);
  document.getElementById("favoritesOverlay").addEventListener("click", (e) => {
    if (e.target.id === "favoritesOverlay") closeFavoritesDrawer();
  });

  // Escape key closes modal/drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      closePropertyModal();
      closeFavoritesDrawer();
    }
  });

  // Testimonial slider controls
  document.getElementById("testimonialNext").addEventListener("click", () => goToTestimonial(testimonialIndex + 1));
  document.getElementById("testimonialPrev").addEventListener("click", () => goToTestimonial(testimonialIndex - 1));
  let testimonialAuto = setInterval(() => goToTestimonial(testimonialIndex + 1), 6000);
  document.querySelector(".testimonial-slider").addEventListener("mouseenter", () => clearInterval(testimonialAuto));

  // Forms
  initFormHandler("inquiryForm", "inquiryStatus");
  initFormHandler("listPropertyForm", "listPropertyStatus");
  initFormHandler("contactForm", "contactStatus");
});