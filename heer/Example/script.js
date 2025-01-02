const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
  { id: 4, name: 'Alice', age: 20 },
]

const renderData = document.getElementById("renderData")

renderData.innerHTML = data.map((x) => {
  return `
    <div class="detailCard">
      <p>My Name is ${x.name}</p>
      <p>My Age is ${x.age}</p>
    </div>
  `
}).join("")