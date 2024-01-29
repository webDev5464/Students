let render = document.getElementById('render')

const renderApi = async () => {
  const fetchData = await fetch('https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI')
  const jsonData = await fetchData.json()

  let data = [...jsonData.earbud]

  render.innerHTML = data.map((x) => {
    return `<div>
      <p>${x.title}</p>
      <img src="${x.img1}" width="150px">
      <img src="${x.img2}" width="150px">
    </div>`
  }).join("")
}

renderApi()
