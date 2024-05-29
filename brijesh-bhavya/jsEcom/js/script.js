const renderProduct = document.getElementById("renderProduct")

async function getApi() {
  const response = await fetch("https://res.cloudinary.com/djkde7xp0/raw/upload/v1716272960/vfvoybg62ux93ksobfpw.json")
  const objData = await response.json()
  localStorage.setItem("allData", JSON.stringify(objData.alldata))
}
getApi()

const allData = JSON.parse(localStorage.getItem("allData"))

renderProduct.innerHTML = allData.map((val) => {
  return `<p>${val.title}</p>`
}).join("")