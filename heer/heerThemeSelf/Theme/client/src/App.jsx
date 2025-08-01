import { useDispatch, useSelector } from "react-redux";
import { autoTheme, changetheme } from "../redux/UserSlice";
import { useEffect } from "react";


export default  function App(){

  const dispatch = useDispatch();

  const {theme} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(autoTheme())
  },[])
  return (
    <>
   <h1 className= {` main ${ theme == "light" ? "light" : "dark" }`}>This is APPPPPP </h1>

<hr/>
   <button onClick={() => dispatch(changetheme())}> CLICK ME </button>
  </>
  
  )

}


