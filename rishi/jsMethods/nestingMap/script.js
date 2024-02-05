let render = document.getElementById('render')
const nestingNavigation = [
  {
    title: 'products',
    values: [
      {
        title: 'electronics',
        values: ['mobiles', 'laptops', 'earbuds']
      }, {
        title: 'clothes',
        values: ['shirts', 'tshirts']
      }
    ]
  }, {
    title: 'privacy policy',
    values: [
      {
        title: 'policy One'
      },
      {
        title: 'policy two',
        values: ['p1', 'p2']
      }
    ]
  }
]

render.innerHTML = nestingNavigation.map((x) => {
  return `
    <ul>
      <li>${x.title}
        <ul>
          ${x.values.map((y) => {
    return `<li>${y.title}
            <ul>
              ${Array.isArray(y.values) ? y.values.map((a) => {
      return `<li>${a}</li>`
    }).join("") : ''}
            </ul>
    </li>`
  }).join("")}
        </ul>
      </li>
    </ul>
  `
}).join("")