let render = document.getElementById('render');

// const fetching = async () => {
//   const data = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
//   const convert = await data.json()

//   const dStructure = [...convert.earbud, ...convert.tshirt]

//   render.innerHTML = dStructure.map((x) => {
//     return `
//       <div>
//         <h1>${x.title}</h1>
//         <img src="${x.img1}" width="150px">
//         <img src="${x.img2}" width="150px">
//       </div>
//     `
//   })
// }

// fetching();

(async () => {
  const data = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
  const convert = await data.json()

  const dStructure = [...convert.earbud, ...convert.tshirt]

  render.innerHTML = dStructure.map((x) => {
    return `
      <div>
        <h1>${x.title}</h1>
        <img src="${x.img1}" width="150px">
        <img src="${x.img2}" width="150px">
      </div>
    `
  })
})();