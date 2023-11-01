export default function JsLogic() {
  //! this is a javascript

  let language = ["HTML", "CSS", "JavaScript", "React"]
  console.log(language);

  const title = "Hello React"
  return (
    <>

      <div>
        {
          //! this is a javascript

          language.map((x) => (
            <p key={x.length}>{x}</p>
          ))
        }
      </div>

      <h1>{title}</h1>

    </>
  )
}