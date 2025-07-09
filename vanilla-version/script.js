// Application state
let currentView = 'home';
let selectedState = '';
let selectedSite = null;
let searchQuery = '';
let typeFilter = '';

// DOM elements
const appContent = document.getElementById('app-content');
const aboutBtn = document.getElementById('about-btn');
const aboutModal = document.getElementById('about-modal');
const closeModalBtn = document.getElementById('close-modal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  renderView();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // About modal
  aboutBtn.addEventListener('click', () => {
    aboutModal.classList.remove('hidden');
  });
  
  closeModalBtn.addEventListener('click', () => {
    aboutModal.classList.add('hidden');
  });
  
  aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
      aboutModal.classList.add('hidden');
    }
  });
}

// Filter sites based on search and type
function getFilteredSites() {
  const sites = getSitesForState(selectedState);
  return sites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !typeFilter || site.type === typeFilter;
    return matchesSearch && matchesType;
  });
}

// Render the current view
function renderView() {
  switch (currentView) {
    case 'home':
      renderHomeView();
      break;
    case 'state':
      renderStateView();
      break;
    case 'detail':
      renderSiteDetailView();
      break;
  }
}

// Render home view
function renderHomeView() {
  appContent.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-logo">
          <img 
            src="/WhatsApp Image 2025-07-01 at 22.56.51_a29ad146.jpg" 
            alt="Sanskriti Dharohar Logo" 
            class="hero-logo-img"
          />
          <h1 class="hero-title">Sanskriti</h1>
          <p class="hero-subtitle">DHAROHAR</p>
          <p class="hero-description">
            Discover India's rich religious heritage. Explore temples, mosques, churches, and gurudwaras 
            across different states with detailed information and beautiful imagery.
          </p>
        </div>
        
        <div class="search-container">
          <div class="search-wrapper">
            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search temples, mosques, churches, gurudwaras..."
              value="${searchQuery}"
              class="search-input"
              id="home-search"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- States Grid -->
    <section class="states-section">
      <div class="states-container">
        <h2 class="states-title">Explore by State</h2>
        <div class="states-grid" id="states-grid">
          ${renderStatesGrid()}
        </div>
      </div>
    </section>
  `;
  
  // Add event listeners
  document.getElementById('home-search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
  });
  
  // Add state card click listeners
  document.querySelectorAll('.state-card').forEach(card => {
    card.addEventListener('click', () => {
      const stateId = card.dataset.stateId;
      handleStateSelect(stateId);
    });
  });
}

// Render states grid
function renderStatesGrid() {
  return states.map(state => `
    <div class="state-card" data-state-id="${state.id}">
      <div class="state-card-image-container">
        <img 
          src="${state.image}" 
          alt="${state.name}"
          class="state-card-image"
        />
        <div class="state-card-overlay"></div>
        <div class="state-card-content">
          <h3 class="state-card-title">${state.name}</h3>
        </div>
      </div>
    </div>
  `).join('');
}

// Render state view
function renderStateView() {
  const state = states.find(s => s.id === selectedState);
  const filteredSites = getFilteredSites();
  
  appContent.innerHTML = `
    <section class="site-listing-section">
      <div class="site-listing-container">
        <div>
          <button class="back-button" id="back-to-home">
            ← Back to States
          </button>
          <h1 class="site-listing-title">
            ${state ? state.name : ''} Religious Sites
          </h1>
          <div class="search-section">
            <div class="search-container">
              <div class="search-wrapper">
                <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search temples, mosques, churches, gurudwaras..."
                  value="${searchQuery}"
                  class="search-input"
                  id="state-search"
                />
              </div>
            </div>
          </div>
        </div>

        ${renderTypeFilters()}

        ${filteredSites.length === 0 ? renderEmptyState() : `
          <div class="sites-grid">
            ${renderSitesGrid(filteredSites)}
          </div>
        `}
      </div>
    </section>
  `;
  
  // Add event listeners
  document.getElementById('back-to-home').addEventListener('click', handleBackToHome);
  document.getElementById('state-search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderView();
  });
  
  // Add filter button listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      typeFilter = btn.dataset.type || '';
      renderView();
    });
  });
  
  // Add site card click listeners
  document.querySelectorAll('.site-card').forEach(card => {
    card.addEventListener('click', () => {
      const siteId = card.dataset.siteId;
      handleSiteSelect(siteId);
    });
  });
}

// Render type filters
function renderTypeFilters() {
  const types = ['Temple', 'Mosque', 'Church', 'Gurudwara'];
  
  return `
    <div class="type-filters">
      <button
        class="filter-btn ${!typeFilter ? 'active' : ''}"
        data-type=""
      >
        All
      </button>
      ${types.map(type => `
        <button
          class="filter-btn ${typeFilter === type ? 'active' : ''}"
          data-type="${type}"
        >
          ${type}
        </button>
      `).join('')}
    </div>
  `;
}

// Render sites grid
function renderSitesGrid(sites) {
  return sites.map(site => `
    <div class="site-card" data-site-id="${site.id}">
      <div class="site-card-image-container">
        <img 
          src="${site.image}" 
          alt="${site.name}"
          class="site-card-image"
        />
        <div class="site-card-type ${site.typeColor}">
          ${site.type}
        </div>
      </div>
      
      <div class="site-card-content">
        <h3 class="site-card-title">
          ${site.name}
        </h3>
        
        <div class="site-card-location">
          <svg class="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>${site.location}</span>
        </div>
        
        ${site.timings ? `
          <div class="site-card-timing">
            <svg class="timing-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span>${site.timings}</span>
          </div>
        ` : ''}
        
        <p class="site-card-description">
          ${site.description}
        </p>
      </div>
    </div>
  `).join('');
}

// Render empty state
function renderEmptyState() {
  const availableStates = ['west-bengal', 'telangana', 'kerala', 'tamil-nadu', 'karnataka', 'andaman-nicobar', 'puducherry'];
  
  return `
    <div class="empty-state">
      <p class="empty-state-text">
        ${availableStates.includes(selectedState)
          ? 'No sites found matching your search criteria.'
          : 'Content for this state is coming soon. Currently, we have detailed information for West Bengal, Telangana, Kerala, Tamil Nadu, Karnataka, Andaman & Nicobar Islands, and Puducherry.'}
      </p>
    </div>
  `;
}

// Render site detail view
function renderSiteDetailView() {
  if (!selectedSite) return;
  
  appContent.innerHTML = `
    <div class="site-detail-container">
      <!-- Header -->
      <div class="site-detail-header">
        <div class="site-detail-header-content">
          <button class="site-detail-back-btn" id="back-to-state">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Sites
          </button>
        </div>
      </div>

      <!-- Pamphlet Layout -->
      <div class="site-detail-content">
        <div class="site-detail-card">
          <!-- Header Section -->
          <div class="site-detail-brand-header">
            <div>
              <h1 class="site-detail-brand-title">SANSKRITI DHAROHAR</h1>
              <div class="site-detail-brand-divider"></div>
            </div>
          </div>

          <!-- Temple Image Section -->
          <div class="site-detail-image-section">
            <div class="site-detail-image-container">
              <img 
                src="${selectedSite.image}" 
                alt="${selectedSite.name}"
                class="site-detail-image"
              />
            </div>
            <div class="site-detail-title-section">
              <h2 class="site-detail-title">${selectedSite.name}</h2>
              <span class="site-detail-type-badge ${selectedSite.typeColor}">
                ${selectedSite.type}
              </span>
            </div>
          </div>

          <!-- Main Content Grid -->
          <div class="site-detail-grid">
            <!-- Left Sidebar -->
            <div class="site-detail-sidebar">
              ${renderLeftSidebar()}
            </div>

            <!-- Center Content -->
            <div class="site-detail-main">
              ${renderMainContent()}
            </div>

            <!-- Right Sidebar -->
            <div class="site-detail-right-sidebar">
              ${renderRightSidebar()}
            </div>
          </div>

          <!-- Footer -->
          <div class="site-detail-footer">
            <p>© 2025 Sanskriti Dharohar - Preserving India's Spiritual Heritage</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add event listener
  document.getElementById('back-to-state').addEventListener('click', handleBackToState);
}

// Render left sidebar content
function renderLeftSidebar() {
  return `
    <div class="sidebar-section">
      <h3 class="sidebar-title">Main Prasad</h3>
      <p class="sidebar-content">${selectedSite.prasad || 'Traditional offerings available'}</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Open Timings</h3>
      <p class="sidebar-content">${selectedSite.timings || 'Daily 6:00 AM - 8:00 PM'}</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Prayer Timing</h3>
      <p class="sidebar-content">Morning Aarti: 6:00 AM<br/>Evening Aarti: 7:00 PM</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Other Deities</h3>
      <p class="sidebar-content">Various associated deities worshipped</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Amenities Like</h3>
      <ul class="sidebar-list">
        <li>→ Drinking Water</li>
        <li>→ Puja Items</li>
        <li>→ Shops</li>
        <li>→ Restrooms</li>
        ${selectedSite.amenities ? selectedSite.amenities.slice(0, 4).map(amenity => `<li>→ ${amenity}</li>`).join('') : ''}
      </ul>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Festival</h3>
      <ul class="sidebar-list">
        ${selectedSite.festivals ? selectedSite.festivals.slice(0, 4).map(festival => `<li>• ${festival}</li>`).join('') : '<li>• Traditional festivals celebrated</li>'}
      </ul>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Ceremonies Held</h3>
      <p class="sidebar-content">Wedding ceremonies conducted with prior booking</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Education Provided</h3>
      <p class="sidebar-content">Religious education and cultural programs available</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Donations</h3>
      <p class="sidebar-content">Donations accepted for temple maintenance and services</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Flowers Offered</h3>
      <p class="sidebar-content">Marigold, Rose, Lotus, Jasmine, Hibiscus</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Food Available for Devotees</h3>
      <p class="sidebar-content">Free prasad distribution daily, Special langar on festivals</p>
    </div>
  `;
}

// Render main content
function renderMainContent() {
  return `
    <div class="overview-section">
      <h2 class="overview-title">OVERVIEW HISTORY</h2>
      <div class="overview-content">
        <p>${selectedSite.description}</p>
        
        ${selectedSite.specialFeatures && selectedSite.specialFeatures.length > 0 ? `
          <div class="overview-subsection">
            <h4>Historical Significance:</h4>
            <ul>
              ${selectedSite.specialFeatures.map(feature => `<li>• ${feature}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="overview-subsection">
          <h4>Cultural Importance:</h4>
          <p>This sacred site holds immense cultural and spiritual significance for devotees and visitors. The temple serves as a center for religious activities, cultural preservation, and community gatherings. Its architectural beauty and historical legacy make it an important heritage site.</p>
        </div>

        <div class="overview-subsection">
          <h4>Architectural Details:</h4>
          <p>The monument showcases traditional architectural elements that reflect the rich cultural heritage of the region. The intricate carvings, structural design, and artistic elements represent centuries of craftsmanship and devotion.</p>
        </div>
      </div>
    </div>
  `;
}

// Render right sidebar content
function renderRightSidebar() {
  return `
    <div class="sidebar-section">
      <h3 class="sidebar-title">Location</h3>
      <div class="transport-item">
        <svg class="transport-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #ea580c;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <p class="transport-text">${selectedSite.location}, ${selectedSite.state}</p>
      </div>
      <p class="sidebar-content">Google Maps: Available for navigation</p>
      <p class="sidebar-content">Weather Details: Best visiting months are October to March</p>
      <p class="sidebar-content">Sea Level: Varies by location</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">How to Reach</h3>
      <div>
        <p class="transport-label">Nearest Bus Station:</p>
        ${selectedSite.nearestTransport?.bus ? `
          <div class="transport-item">
            <svg class="transport-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #8b5cf6;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
            </svg>
            <p class="transport-text">${selectedSite.nearestTransport.bus}</p>
          </div>
        ` : ''}
        
        <p class="transport-label">Nearest Railway Station:</p>
        ${selectedSite.nearestTransport?.railway ? `
          <div class="transport-item">
            <svg class="transport-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #2563eb;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
            <p class="transport-text">${selectedSite.nearestTransport.railway}</p>
          </div>
        ` : ''}
        
        <p class="transport-label">Nearest Airport:</p>
        ${selectedSite.nearestTransport?.airport ? `
          <div class="transport-item">
            <svg class="transport-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #10b981;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <p class="transport-text">${selectedSite.nearestTransport.airport}</p>
          </div>
        ` : ''}
      </div>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Nearby Restaurants</h3>
      ${selectedSite.nearbyRestaurants ? `
        <ul class="sidebar-list">
          ${selectedSite.nearbyRestaurants.map(restaurant => `<li>• ${restaurant}</li>`).join('')}
        </ul>
      ` : '<p class="sidebar-content">Local restaurants available nearby</p>'}
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Nearby Hotels</h3>
      ${selectedSite.nearbyHotels ? `
        <ul class="sidebar-list">
          ${selectedSite.nearbyHotels.map(hotel => `<li>• ${hotel}</li>`).join('')}
        </ul>
      ` : '<p class="sidebar-content">Accommodation options available nearby</p>'}
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Nearby Non-religious or Religious Places to Go For</h3>
      ${selectedSite.nearbyAttractions ? `
        <ul class="sidebar-list">
          ${selectedSite.nearbyAttractions.map(attraction => `<li>• ${attraction}</li>`).join('')}
        </ul>
      ` : '<p class="sidebar-content">Various attractions available nearby</p>'}
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Famous Food That Can Be Tasted</h3>
      <ul class="sidebar-list">
        <li>• Local regional delicacies</li>
        <li>• Traditional sweets</li>
        <li>• Street food specialties</li>
        <li>• Regional cuisine</li>
        <li>• Temple prasad</li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Contact Details of the Monument</h3>
      ${selectedSite.contact ? `
        <div class="contact-item">
          <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <p class="contact-text">${selectedSite.contact}</p>
        </div>
      ` : ''}
      <p class="sidebar-content">Temple Office: Available during visiting hours</p>
    </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Website of the Monument if Available</h3>
      ${selectedSite.website ? `
        <div class="contact-item">
          <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #2563eb;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"></path>
          </svg>
          <a href="${selectedSite.website}" class="website-link">
            ${selectedSite.website}
          </a>
        </div>
      ` : '<p class="sidebar-content">Official website not available</p>'}
    </div>
  `;
}

// Event handlers
function handleStateSelect(stateId) {
  selectedState = stateId;
  currentView = 'state';
  searchQuery = '';
  typeFilter = '';
  renderView();
}

function handleSiteSelect(siteId) {
  const sites = getSitesForState(selectedState);
  const site = sites.find(s => s.id === siteId);
  if (site) {
    selectedSite = site;
    currentView = 'detail';
    renderView();
  }
}

function handleBackToHome() {
  currentView = 'home';
  selectedState = '';
  searchQuery = '';
  typeFilter = '';
  renderView();
}

function handleBackToState() {
  currentView = 'state';
  selectedSite = null;
  renderView();
}