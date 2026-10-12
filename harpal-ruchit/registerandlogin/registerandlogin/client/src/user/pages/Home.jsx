import { useDispatch, useSelector } from "react-redux";

export default function Home() {

    
  const dispatch = useDispatch();
  const {loading} = useSelector((state=> state.getData))
  console.log(loading);


  return (
    <div>Home</div>
  )
}
