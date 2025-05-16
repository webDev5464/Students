// https://fakestoreapi.com/products

// fetch("https://fakestoreapi.com/products").then((row) => row.json()).then(e => console.log(e))

const root = document.getElementById("root")
async function getData() {
  try {

    const rowData = await fetch("https://fakestoreapi.com/products")
    const objData = await rowData.json()

    console.log(objData)

    root.innerHTML = objData.map((e) => {
      return `
        <p>${e.title}</p>
        <img src="${e.image}" alt="">
      `
    }).join("")

  } catch (err) {
    console.log(err.message)
  }
}




getData()

// const getData = async () => {

// }