function addTodo() {
  try {
    const heading = document.getElementById("heading").value
    const title = document.getElementById("title").value
    const getTodoData = JSON.parse(localStorage.getItem('todo')) || []
    defaultRun()

    if (!heading && !title) {
      throw Error('Fill input field')
    } else {
      const todoObj = {
        id: new Date().getTime(),
        heading: heading,
        title: title
      }

      if (getTodoData.length === 0) {
        localStorage.setItem("todo", JSON.stringify([todoObj]))
      } else {
        getTodoData.push(todoObj)
        localStorage.setItem("todo", JSON.stringify(getTodoData))
      }
    }
  } catch (msg) {
    alert(msg)
  }
}

function defaultRun() {
  const getTodoData = JSON.parse(localStorage.getItem('todo')) || []
  renderTodoData.innerHTML = getTodoData.map((x) => {
    return `
    <div>
      <h1>${x.heading}</h1>
      <p>${x.title}</p>
    </div>
  `
  }).join("")
}
defaultRun()