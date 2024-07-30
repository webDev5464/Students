import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/Slice/UserSlice";

export default function Home() {
  const { num } = useSelector((state) => state.UserProvider);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-2xl font-bold">This is a Home {num}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
