import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/slices/UserSlice";

export default function About() {
  const dispatch = useDispatch();
  const { num } = useSelector((x) => x.userProvider);

  return (
    <>
      <h1 className="text-4xl font-bold">{num}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
