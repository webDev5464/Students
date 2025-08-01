const root = document.getElementById("root")

const data = [
  {
    title: 'products',
    values: [
      {
        title: 'electronics',
        values: ['mobiles', 'laptops', 'earbuds']
      },
      {
        title: 'clothes',
        values: ['shirts', 'tshirts']
      }
    ]
  },
  {
    title: 'privacy policy',
    values: [
      {
        title: 'policy One',
        values: {
          '1': 'policy one desc',
          '2': 'policy two desc',
        }
      },
      {
        title: 'policy two',
        values: ['p1', 'p2']
      }
    ]
  }
]

root.innerHTML = data.map((x) => {
  return `<ul>
    <li>${x.title}
      <ul>
        ${x.values.map((e) => {
    return `<li>${e.title}
            <ul>
              ${e.values ? e.values.map((a) => {
      return `<li>${a}</li>`
    }).join("") : ''}
            </ul>
          </li>`
  }).join("")}
      </ul>
    </li>
  </ul>`
}).join("")

