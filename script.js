const restaurantConfig = {
  name: "Oyisi Sushi",
  tagline: "Premium Sushi Experience",
  heroVideo: "https://www.youtube.com/embed/Md--gKO-iGw",
  heroTitle: "Oyisi Sushi",
  heroSubtitle:
    "Oplev vores unikke Ad Libitum koncept med frisk sushi, varme retter og søde sager",
};

// Location Data
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
      booking: "https://aabenraa.oyisi.dk/bestil-bord",
      takeaway: "https://aabenraa.oyisi.dk/bestil-mad",
      facebook: "https://facebook.com/oyisi.aabenraa",
      instagram: "https://instagram.com/oyisi.aabenraa",
      eSmiley: "https://esmiley.dk/oyisi-aabenraa",
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
      booking: "https://tonder.oyisi.dk/bestil-bord",
      takeaway: "https://tonder.oyisi.dk/bestil-mad",
      facebook: "https://facebook.com/oyisi.tonder",
      instagram: "https://instagram.com/oyisi.tonder",
      eSmiley: "https://esmiley.dk/oyisi-tonder",
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
      booking: "https://esbjerg.oyisi.dk/bestil-bord",
      takeaway: "https://esbjerg.oyisi.dk/bestil-mad",
      facebook: "https://facebook.com/oyisi.esbjerg",
      instagram: "https://instagram.com/oyisi.esbjerg",
      eSmiley: "https://esmiley.dk/oyisi-esbjerg",
    },
  },
];

let currentExpandedCard = null;

function createLocationCard(location) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-6 col-xl-4";

  // Fallback image as base64 SVG
  const fallbackImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDQwMCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjQUYxRTIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEExODE5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyODAiIGZpbGw9InVybCgjZ3JhZCkiLz48dGV4dCB4PSIyMDAiIHk9IjE0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOHB4IiBmb250LXdlaWdodD0iYm9sZCI+T3lpc2kgU3VzaGkgJmxkZzI7ICIgKyBsb2NhdGlvbi5uYW1lICsgIjwvdGV4dD48L3N2Zz4=";

  colDiv.innerHTML = `
                <div class="location-card" data-location="${location.id}">
                    <div class="card-image-container">
                        <img src="${location.image}" 
                             alt="${restaurantConfig.name} ${location.name}" 
                             class="card-image" 
                             onerror="this.src='${fallbackImage}'">
                        <div class="card-overlay">
                            <div>
                                <div class="card-title">${
                                  restaurantConfig.name
                                }</div>
                                <div class="card-subtitle">${
                                  location.name
                                }</div>
                            </div>
                            <div class="card-buttons">
                                <a href="${
                                  location.links.booking
                                }" class="btn-card-action" target="_blank">
                                    <i class="fas fa-calendar"></i> Book Bord
                                </a>
                                <a href="${
                                  location.links.takeaway
                                }" class="btn-card-action" target="_blank">
                                    <i class="fas fa-shopping-bag"></i> Takeaway
                                </a>
                                <button class="btn-card-action btn-info" onclick="toggleCardDetails('${
                                  location.id
                                }')">
                                    <i class="fas fa-info-circle"></i> Mere Info
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
