//? map

// const numbs = [1, 2, 3, 4, 5]

// const printer = numbs.map((val) => {
//   return val
// })

// console.log(printer)

// ------------------------------------------------------

const earbud = [
  {
    id: 1,
    title:
      "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, IPX4 Water Resistance, ENx Tech, IWP, Smooth Touch Controls(Cyan Cider)",
    img: "https://m.media-amazon.com/images/I/31BMd11KciL._SY300_SX300_.jpg",
    price: 4490,
    discount: 78,
    qty: 1,
    category: "earbud",
  },
  {
    id: 2,
    title:
      "CrossBeats Newly launched Revolt Hybrid Active Noise Cancelling Wireless Bluetooth Earbuds, 48hrs Playtime TWS, 10 mm Ti-Alloy Driver, EchoBlast™, 40ms Low Latency Earphone-Black",
    img: "https://m.media-amazon.com/images/I/61J9BzebDnL._SY450_.jpg",
    price: 9999,
    discount: 75,
    qty: 1,
    category: "earbud",
  },
  {
    id: 3,
    title:
      "OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)",
    img: "https://m.media-amazon.com/images/I/51ws0E8cnbL._SL1500_.jpg",
    price: 2999,
    discount: 7,
    qty: 1,
    category: "earbud",
  },
  {
    id: 4,
    title:
      "pTron Bassbuds Duo in Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless, Stereo Audio, Touch Control TWS, with Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)",
    img: "https://m.media-amazon.com/images/I/31G1NouVxaL._SY300_SX300_.jpg",
    price: 2599,
    discount: 71,
    qty: 1,
    category: "earbud",
  },
  {
    id: 5,
    title:
      "Boult Audio Z25 True Wireless in Ear Earbuds with 32H Playtime, 45ms Low Latency, Type-C Fast Charging (10=150Mins), Made in India, Zen ENC Mic, 13mm Bass Drivers, Bluetooth 5.3 Ear Buds (Blue Moss)",
    img: "https://m.media-amazon.com/images/I/71vlByXS-JL._SL1500_.jpg",
    price: 2999,
    discount: 63,
    qty: 1,
    category: "earbud",
  },
  {
    id: 6,
    title:
      "Boult Audio X30 True Wireless in Ear Earbuds with 40H Playtime, Quad Mic ENC, 45ms Xtreme Low Latency, Made in India, Type-C Fast Charging, 3 Equalizer Modes (Rock, BoomX, Hi-Fi), BT 5.1 (Blue)",
    img: "https://m.media-amazon.com/images/I/71ey9w1JYTL._SL1500_.jpg",
    price: 4999,
    discount: 70,
    qty: 1,
    category: "earbud",
  },
  {
    id: 7,
    title:
      "boAt Airdopes 121v2 in-Ear True Wireless Earbuds with Upto 14 Hours Playback, 8MM Drivers, Battery Indicators, Lightweight Earbuds & Multifunction Controls (Active Black, with Mic)",
    img: "https://m.media-amazon.com/images/I/61o2urRxrcL._SL1500_.jpg",
    price: 2990,
    discount: 57,
    qty: 1,
    category: "earbud",
  },
  {
    id: 8,
    title:
      "Blaupunkt BTW07 ANC Moksha-30Db Bluetooth Truly Wireless In Ear Earbuds with Mic, Flip Top Rotatory Design, 40H Playtime, TurboVolt Fast Charging, Crispr Enc Tech, GameOn with 80Ms Low Latency (Black)",
    img: "https://m.media-amazon.com/images/I/31XeLoY52sL._SY300_SX300_.jpg",
    price: 5999,
    discount: 58,
    qty: 1,
    category: "earbud",
  },
  {
    id: 10,
    title: `pTron Bassbuds Fute 5.1 Bluetooth Truly Wireless Featherlite TWS in Ear Earbuds with Mic 25Hrs Playtime, 13Mm Dynamic Driver, Immersive Audio, Touch Control, Voice Assistance & Fast Charging (Black)`,
    img: "https://m.media-amazon.com/images/I/51PNGyUNvmL._SL1100_.jpg",
    price: 3299,
    discount: 79,
    qty: 1,
    category: "earbud",
  },
  {
    id: 11,
    title: `Boult Audio X1 Buds True Wireless in Ear Earbuds with 24H Playtime, Quad Mic ENC, Made in India, Type-C Fast Charging, Environmental Noise Cancellation, 10mm Bass Drivers, TWS Airbass ear buds (Black)`,
    img: "https://m.media-amazon.com/images/I/71mT2gCHH+L._SL1500_.jpg",
    price: 6999,
    discount: 74,
    qty: 1,
    category: "earbud",
  },
  {
    id: 12,
    title: `Boult Audio Powerbuds True Wireless in Ear Earbuds with 120H Playtime, in-Built Powerbank, Type-C Fast Charging, Made in India, Pro+ Calling HD Mic, IPX7 Waterproof, Bluetooth Ear Buds TWS (Black)`,
    img: "https://m.media-amazon.com/images/I/71jrExswt4L._SL1500_.jpg",
    price: 8999,
    discount: 83,
    qty: 1,
    category: "earbud",
  },
  {
    id: 13,
    title: `Noise Buds Vs104 Bluetooth Truly Wireless in Ear Earbuds with Mic, 30-Hours of Playtime, Instacharge, 13Mm Driver and Hyper Sync (Charcoal Black)`,
    img: "https://m.media-amazon.com/images/I/51cjIEYU8BL._SL1500_.jpg",
    price: 3499,
    discount: 69,
    qty: 1,
    category: "earbud",
  },
];

const root = document.getElementById("root")

root.innerHTML = earbud.map((val) => {
  return `
    <div class="product">
      <img src="${val.img}" alt="${val.img}" class="productImg">
      <p>${val.title}</p>

      <button class="productCartBtn">Add to Cart</button>
    </div>
  `
}).join("")

//? forEach

// let text = ""

// const printer = numbs.forEach((val) => {
//   text += val
// })

// console.log(text)