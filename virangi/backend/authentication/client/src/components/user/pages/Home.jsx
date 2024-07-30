import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../../redux/slices/UserSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userProvider);
  return (
    <>
      <h1>This is a Home {user}</h1>
      <button onClick={() => dispatch(changeUser("Chapri"))}>
        Change Value
      </button>
    </>
  );
}
