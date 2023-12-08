import { useContext } from "react";
import Output from "./Output";
import { MyContext } from "./App";
import { GlobalContext } from "./GlobContext";

export default function Home() {
  const { value } = useContext(MyContext)

  const { submitForm, inputVal, setInputVal, AddData, AutoFocus } = useContext(GlobalContext)
  return (
    <>
      <h1>{value}</h1>

      <Output />

      <br /><br />

      <form onSubmit={submitForm}>
        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} ref={AutoFocus} />
        <input type="submit" value="Submit" onClick={AddData} />
      </form>
    </>
  )
}