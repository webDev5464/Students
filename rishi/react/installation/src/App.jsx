const App = () => {
  return (
    <>
      <div className="headerHeading">
        <h1>Hello World!</h1>
        <p>This is a Title</p>
      </div>

      <div>
        <h1 style={{ backgroundColor: "tomato", color: "white" }}>hello</h1>
      </div>

      <Heading />
    </>
  )
}

export default App

const Heading = () => {
  return <h1>This is a function base component</h1>
}