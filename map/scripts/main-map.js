const svgTag = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="17pt" height="24pt"
    viewBox="0 0 830.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#FF5D03"
        stroke="none">
        <path
            d="M3855 12789 c-555 -44 -1043 -176 -1530 -414 -1457 -712 -2370 -2223 -2322 -3840 19 -605 152 -1155 406 -1680 109 -225 183 -353 331 -575 65 -96 856 -1369 1760 -2827 903 -1459 1646 -2653 1650 -2653 4 0 747 1194 1650 2652 904 1459 1695 2732 1760 2828 148 222 222 350 331 575 421 869 520 1869 279 2821 -244 958 -822 1795 -1640 2371 -696 491 -1551 759 -2404 752 -94 -1 -216 -5 -271 -10z m635 -1764 c440 -80 813 -271 1120 -575 769 -761 825 -1980 130 -2812 -335 -402 -817 -663 -1344 -728 -114 -14 -378 -14 -492 0 -853 105 -1550 715 -1764 1544 -141 545 -52 1136 243 1613 330 531 862 876 1497 968 130 19 481 13 610 -10z" />
    </g>
</svg>
`;

const svgClusterIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
    <ellipse cx="22.4813" cy="22.5" rx="22.4813" ry="22.5" fill="#FF5D03"/>
</svg>
`;

var points;

var tagIcon = L.divIcon({
  html: svgTag,
  iconSize: [24, 30],
  iconAnchor: [16, 32],
  className: '',
});

var markers = L.markerClusterGroup({
  spiderfyOnMaxZoom: false,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
  spiderfyOnMaxZoom: true,
  spiderfyOnEveryZoom: false,
  removeOutsideVisibleBounds: true,
  animate: true,
  animateAddingMarkers: true,
  chunkedLoading: false,
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<div><span>' + cluster.getChildCount() + '</span></div>',
      className: 'cat-marker-cluster marker-cluster-medium',
      iconSize: new L.Point(40, 40),
    });
  },
});

const map = L.map('map', {
  zoomControl: false,
  attributionControl: false,
  gestureHandling: true,
  gestureHandlingOptions: {
    text: {
        touch: "Hey bro, use two fingers to move the map",
        scroll: "Hey bro, use ctrl + scroll to zoom the map",
        scrollMac: "Hey bro, use \u2318 + scroll to zoom the map"
    }
  }
}).setView([41.6938, 44.8015], 13); // tbilisi geo-position

const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
}).addTo(map);

// Function to add markers to the map
function addMarkers(points) {
  points.forEach((point) => {
    const [lat, lng] = point.geoLocation.split(', ').map(Number);
    const marker = L.marker([lat, lng], { icon: tagIcon });
    markers.addLayer(marker);
  });

  map.addLayer(markers);
}

fetch('https://api.catebi.ge/api/map/getcatsshort')
  .then((response) => response.json())
  .then((data) => {
    points = data;
    addMarkers(points);
  })
  .catch((error) => console.error('Error fetching points:', error));
