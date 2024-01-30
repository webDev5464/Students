// https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI

//! JsonPlaceholder
// https://jsonplaceholder.typicode.com/

const render = document.getElementById('render')

const fetching = async () => {
  const apiData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
  const jsonConvert = await apiData.json()
  console.log(jsonConvert);

  let data = [...jsonConvert.earbud, ...jsonConvert.tshirt]
  render.innerHTML = data.map((x) => {
    return `
      <div class="card">
        <p>${x.title}</p>
        <div>
          <img src="${x.img1}" width="150px">
        </div>
        <div>
          <img src="${x.img2}" width="150px">
        </div>
      </div>
    `
  }).join("")
}

fetching()

const frt = ['apple', 'banana', 'orange', 'mango']

console.log(frt.join(" * "));