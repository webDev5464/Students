const product = [
  {
    id: 1,
    heading: "boAt Rockerz 245 pro",
    title: "Bluetooth Neckband in Ear with Mic, Beast Mode(Super Low Latency) for Gaming, ENx Tech for Clear Calls, ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Fiery Black)",
    img: "https://m.media-amazon.com/images/I/61DHTu6aisL._SX679_.jpg",
    price: 1999,
    discount: 60
  },
  {
    id: 2,
    heading: "Ai Ring",
    title: "aabo aaboRing Size 10, Stylish Health & Fitness Tracker Smart Ring, AI Enabled, Tracks Advance Sleep, Stress & 10+ parameters, Mobile App Included, CE Certified Titanium IP68 Waterproof (Silver)",
    img: "https://m.media-amazon.com/images/I/41qaspr44pL.jpg",
    price: 18999,
    discount: 27
  },
  {
    id: 3,
    heading: "Duracell USB Type C,",
    title: "Duracell USB Type C, 3A Braided Sync & Fast Charging Cable, 3.9 Ft (1.2M), QC 2.0/3.0, Compatible with Samsung, One Plus & all C type devices, Seamless Data Transmission, Series 3, Black",
    img: "https://m.media-amazon.com/images/I/71sMR4yd6UL._SX679_.jpg",
    price: 358,
    discount: 49
  },
  {
    id: 4,
    heading: "COOLCOLD Viboton Wireless Mouse",
    title: "Gaming Mouse, Rechargeable 2.4Ghz RGB Lights, Gaming Mice, Upto 2400 DPI LED Backlight 6 Button, 4 Color Breathing Lights, Wireless Distance-10m (Q13, Black, White)",
    img: "https://m.media-amazon.com/images/I/61GB-0aA57L._SX679_.jpg",
    price: 729,
    discount: 51
  },
  {
    id: 5,
    heading: "Amazfit Pop 3S Smart Watch",
    title: "Amazfit Pop 3S Smart Watch with 1.96 AMOLED Display, Bluetooth Calling, SpO2, 12-Day Battery Life, AI Voice Assistance, 100 Sports Modes, 24H HR Monitor, Music Control, Over 100 Watch Faces (Black)",
    img: "https://m.media-amazon.com/images/I/61kWA2PbebL._SX679_.jpg",
    price: 3499,
    discount: 42
  },
]

const render = product.map((e) => `
   <div class="product-card">
    <div class="product-img"><img src="${e.img}" alt="product"></div>
    <div class="card-detail">
      <h2>${e.heading.slice(0,15)}</h2>
      <p>${e.title.slice(0,30)}</p>
      <p><span>${e.price}</span> <span>${e.discount}</span></p>
      <p>Totle Price</p>
      <button>Add to Cart</button>
    </div>
  </div>
`)

document.getElementById('demo').innerHTML = render.join("")