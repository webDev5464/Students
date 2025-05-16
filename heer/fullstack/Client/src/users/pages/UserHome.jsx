import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../redux/Slices/Authentication.Slices"

export default function UserHome(){
    const { num ,loading } = useSelector(state => state.AuthData)
    const dispatch = useDispatch()
    
    return (
        <>
         <h1 className="text-x1 font-bold">Number: {num}</h1>

         <div className="flex gap-4 my-3"> 
            <button className=" active:scale-95 transition border px-3 pb-.5 rounded-sm hover:bg-green-200 cusor-pointer font-bold bg-green-400" onClick={() => dispatch(increment())}>INCREMENT </button>
            <button className=" active:scale-95 transition border px-3 pb-.5 rounded-sm hover:bg-red-200 cusor-pointer font-bold bg-red-400" onClick={() => dispatch(decrement())}>DECREMENT </button>
         </div>
        </>
    )
}