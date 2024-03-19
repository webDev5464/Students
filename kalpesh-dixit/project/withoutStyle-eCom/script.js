const fetchingData = async () => {
  const renderData = document.getElementById("renderData")
  const rowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
  const objData = await rowData.json()  
  
  renderData.innerHTML = objData.earbud.map((x) => {
    return `
      <div>
        <img src="${x.img1}" alt="" width="400px">
      </div>
      <p>${x.title}</p>
    `
  }).join("")

  console.log(objData.earbud);
}
fetchingData()

console.log(document.getElementById("search").value);