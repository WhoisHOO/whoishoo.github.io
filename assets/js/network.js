import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue, query, limitToLast } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD44LspJNG3o6lC1Q0d_-UAap9OaaCjAP4",
  authDomain: "whoishoo-network.firebaseapp.com",
  databaseURL: "https://whoishoo-network-default-rtdb.firebaseio.com",
  projectId: "whoishoo-network",
  storageBucket: "whoishoo-network.firebasestorage.app",
  messagingSenderId: "789027452147",
  appId: "1:789027452147:web:57e008d9f7e3d74daf3386",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const HUB = [29.6516, -82.3248]; // Gainesville, FL

// Init Leaflet map
const map = L.map("visitor-map", {
  center: [20, 0],
  zoom: 2,
  worldCopyJump: true,
  zoomControl: true,
  attributionControl: false,
  scrollWheelZoom: false,
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 8,
  minZoom: 1,
}).addTo(map);

L.control.attribution({ prefix: false })
  .addAttribution('&copy; <a href="https://carto.com/">CARTO</a> &middot; <a href="https://openstreetmap.org">OSM</a>')
  .addTo(map);

// Hub marker (Gainesville)
const hubIcon = L.divIcon({
  className: "hub-marker",
  html: '<div class="hub-pulse"></div><div class="hub-core"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});
L.marker(HUB, { icon: hubIcon, zIndexOffset: 1000 })
  .addTo(map)
  .bindTooltip("Gainesville, FL");

const visitorLayer = L.layerGroup().addTo(map);
const renderedKeys = new Set();

function renderVisitor(key, v) {
  if (renderedKeys.has(key)) return;
  if (typeof v.lat !== "number" || typeof v.lng !== "number") return;
  renderedKeys.add(key);

  const dest = [v.lat, v.lng];

  L.polyline([HUB, dest], {
    color: "#ffd54a",
    weight: 1,
    opacity: 0.35,
    dashArray: "3 4",
  }).addTo(visitorLayer);

  L.circleMarker(dest, {
    radius: 3,
    fillColor: "#ffd54a",
    color: "#fff",
    weight: 1,
    fillOpacity: 0.9,
  })
    .bindTooltip(`${v.city || "Unknown"}, ${v.country || ""}`)
    .addTo(visitorLayer);
}

function updateStats(entries) {
  const countries = new Set();
  entries.forEach((v) => v.country && countries.add(v.country));
  document.getElementById("visitor-count").textContent = entries.length;
  document.getElementById("country-count").textContent = countries.size;
}

// Listen for visitors
const visitorsQuery = query(ref(db, "visitors"), limitToLast(500));
onValue(visitorsQuery, (snapshot) => {
  const data = snapshot.val() || {};
  const entries = [];
  Object.entries(data).forEach(([key, val]) => {
    renderVisitor(key, val);
    entries.push(val);
  });
  updateStats(entries);
});

// Submit current visitor (rate-limited per browser)
async function submitVisitor() {
  const lastSubmit = parseInt(localStorage.getItem("whoishoo_last_submit") || "0", 10);
  const now = Date.now();
  if (now - lastSubmit < 24 * 60 * 60 * 1000) return;

  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return;
    const data = await res.json();
    if (typeof data.latitude !== "number" || typeof data.longitude !== "number") return;

    push(ref(db, "visitors"), {
      lat: data.latitude,
      lng: data.longitude,
      country: data.country_name || "",
      city: data.city || "",
      timestamp: now,
    });
    localStorage.setItem("whoishoo_last_submit", now.toString());
  } catch (e) {
    // silent fail
  }
}

submitVisitor();
