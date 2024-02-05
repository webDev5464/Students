// localStorage.setItem('myStorage', 'Hello World!')
// localStorage.setItem('myStorage1', 'Hello World!')
// localStorage.setItem('myStorage2', 'Hello World!')
// localStorage.setItem('myStorage3', 'Hello World!')

// console.log(localStorage.getItem('myStorage'));

// localStorage.removeItem('myStorage')

// localStorage.clear()

let renderData = document.getElementById('renderData')
let dataArr = [
  {
    fname: 'John',
    lName: 'Doe',
    age: 22,
    id: Math.floor(Math.random() * 10000)
  },
  {
    fname: 'Smith',
    lName: 'Doe',
    age: 22,
    id: Math.floor(Math.random() * 10000)
  },
  {
    fname: 'Chagan',
    lName: 'Doe',
    age: 22,
    id: Math.floor(Math.random() * 10000)
  },
  {
    fname: 'Magan',
    lName: 'Doe',
    age: 22,
    id: Math.floor(Math.random() * 10000)
  }
]

localStorage.setItem('myData', JSON.stringify(dataArr))

let storedData = JSON.parse(localStorage.getItem('myData'))
console.log(storedData);

renderData.innerHTML = storedData.map((x) => {
  return `
    <div>
      <h1>${x.fname} ${x.lName}</h1>
      <button onclick="removeData(${x.id})">Remove</button>
    </div>
  `
}).join('')

function removeData(id) {
  console.log(id);
  storedData = storedData.filter(x => x.id !== id);
  localStorage.setItem('myData', JSON.stringify(storedData));
  // Update the rendered data
  renderData.innerHTML = storedData.map((x) => {
    return `
      <div>
        <h1>${x.fname} ${x.lName}</h1>
        <button onclick="removeData(${x.id})">Remove</button>
      </div>
    `;
  }).join('');
}

// ---------------------

let themeSheet = document.getElementById('themeSheet')

function changeTheme() {
  let themeValue = themeSheet.getAttribute('href')

  if (themeValue == "./light.css") {
    themeSheet.setAttribute('href', './dark.css')
    localStorage.setItem('theme', './dark.css')
  } else {
    themeSheet.setAttribute('href', './light.css')
    localStorage.setItem('theme', './light.css')
  }
}

let storeTheme = localStorage.getItem('theme')
if (storeTheme == './dark.css') {
  themeSheet.setAttribute('href', './dark.css')
} else {
  themeSheet.setAttribute('href', './light.css')
}