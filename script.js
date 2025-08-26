const restaurantConfig = {
  name: "Oyisi Sushi",
};

const locationData = [
  {
    id: "aabenraa",
    name: "Aabenraa",
    subtitle: "Nørregade 48B, 1tv",
    address: "Nørregade 48B, 1tv, 6200 Aabenraa",
    phone: "+45 73 62 59 59",
    email: "oyisi200@gmail.com",
    image: "images/Aabenraa.jpg",
    openingHours: {
      "Mandag - Søndag": "16:00 - 22:00",
    },
    eSmileyId: "oyisi-aabenraa",
    links: {
      website: "https://oyisi-aabenraa.dk",
      booking: "https://oyisi-aabenraa.dk/bordbestilling/",
      facebook: "https://facebook.com/oyisi.aabenraa",
      instagram: "https://www.instagram.com/oyisisushi.aabenraa/",
      eSmiley: "https://www.findsmiley.dk/757534",
    },
  },
  {
    id: "tonder",
    name: "Tønder",
    subtitle: "Storegade 1",
    address: "Storegade 1, 6270 Tønder",
    phone: "+45 50 70 62 70",
    email: "oyisi270@gmail.com",
    image: "images/Toender.jpg",
    openingHours: {
      Mandag: "16:00 - 21:00",
      "Tirsdag - Søndag": "11:30 - 21:30",
    },
    eSmileyId: "oyisi-tonder",
    links: {
      website: "https://oyisi-tønder.dk",
      booking: "https://oyisi-tønder.dk/bordbestilling",
      facebook: "https://www.facebook.com/oyisisushi.toender/",
      instagram: "https://www.instagram.com/oyisisushi.toender/",
      eSmiley: "https://www.findsmiley.dk/1418111",
    },
  },
  {
    id: "esbjerg",
    name: "Esbjerg",
    subtitle: "Grådybet 73c",
    address: "Grådybet 73c, 6700 Esbjerg",
    phone: "+45 47 47 67 00",
    email: "oyisi700@gmail.com",
    image: "images/Esbjerg.jpg",
    openingHours: {
      Mandag: "16:00 - 21:30",
      "Tirsdag - Torsdag": "11:00 - 21:30",
      "Fredag - Lørdag": "11:00 - 23:00",
      Søndag: "11:00 - 21:30",
    },
    eSmileyId: "oyisi-esbjerg",
    links: {
      website: "https://oyisi-esbjerg.dk",
      booking: "https://oyisi-esbjerg.dk/bordbestilling",
      facebook: "https://www.facebook.com/oyisisushi.esbjerg/",
      instagram: "https://www.instagram.com/oyisisushi.esbjerg/",
      eSmiley: "https://www.findsmiley.dk/1476706",
    },
  },
];

let currentExpandedCard = null;

function createLocationCard(location) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-6 col-xl-4";
  colDiv.innerHTML = `
    <div class="location-card" data-location="${location.id}">
      <div class="card-image-container">
        <img src="${location.image}" 
             alt="${restaurantConfig.name} ${location.name}" 
             class="card-image" 
             onerror="this.src='images/logo.jpg'">
        
        <div class="card-overlay">
          <!-- Title section with compact transparent background -->
          <div class="card-header-section">
            <div class="card-title">${restaurantConfig.name}</div>
            <div class="card-subtitle">${location.name}</div>
          </div>
          
          <!-- Buttons at bottom - left and right -->
          <div class="card-buttons-row">
            <a href="${
              location.links.website
            }" class="btn-card-action" target="_blank">
              Besøg Restaurant <i class="fas fa-arrow-right"></i>
            </a>
            <button class="btn-info" onclick="toggleCardDetails('${
              location.id
            }')">
               Mere Info  <i class="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="card-details" id="details-${location.id}">
        <div class="details-content">
          ${generateCardDetailsHTML(location)}
        </div>
      </div>
    </div>
  `;

  return colDiv;
}

function generateCardDetailsHTML(location) {
  const openingHoursHTML = Object.entries(location.openingHours)
    .map(([day, hours]) => `<p><strong>${day}:</strong> ${hours}</p>`)
    .join("");

  return `
          <div class="details-grid">
              <div class="detail-section">
                  <h5><i class="fas fa-map-marker-alt"></i> Adresse</h5>
                  <p>${location.address}</p>
              </div>
              <div class="detail-section">
                  <h5><i class="fas fa-phone"></i> Telefon</h5>
                  <p><a href="tel:${location.phone}">${location.phone}</a></p>
              </div>
              <div class="detail-section">
                  <h5><i class="fas fa-envelope"></i> Email</h5>
                  <p><a href="mailto:${location.email}">${location.email}</a></p>
              </div>
              <div class="detail-section">
                  <h5><i class="fas fa-clock"></i> Åbningstider</h5>
                  ${openingHoursHTML}
              </div>
          </div>
          <div class="detail-section mt-3">
              <h5><i class="fas fa-share-alt"></i> Find os online</h5>
              <div class="social-links">
                  <a href="${location.links.facebook}" target="_blank" class="social-link">
                      <i class="fab fa-facebook"></i> Facebook
                  </a>
                  <a href="${location.links.instagram}" target="_blank" class="social-link">
                      <i class="fab fa-instagram"></i> Instagram
                  </a>
                  <a href="${location.links.eSmiley}" target="_blank" class="social-link">
                      <i class="fas fa-smile"></i> E-Smiley
                  </a>
                  <a href="${location.links.website}" target="_blank" class="social-link">
                      <i class="fas fa-globe"></i> Hjemmeside 
                  </a>
              </div>
          </div>
            `;
}

function toggleCardDetails(locationId) {
  const detailsElement = document.getElementById(`details-${locationId}`);

  if (currentExpandedCard && currentExpandedCard !== locationId) {
    const currentDetails = document.getElementById(
      `details-${currentExpandedCard}`
    );
    if (currentDetails) {
      currentDetails.classList.remove("expanded");
    }
  }

  if (detailsElement.classList.contains("expanded")) {
    detailsElement.classList.remove("expanded");
    currentExpandedCard = null;
  } else {
    detailsElement.classList.add("expanded");
    currentExpandedCard = locationId;
  }
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

function renderLocationCards() {
  const locationContainer = document.getElementById("locationContainer");
  locationContainer.innerHTML = "";

  locationData.forEach((location) => {
    const cardElement = createLocationCard(location);
    locationContainer.appendChild(cardElement);
  });
}

function initializeApp() {
  renderLocationCards();
  initializeSmoothScrolling();
}

document.addEventListener("DOMContentLoaded", initializeApp);
