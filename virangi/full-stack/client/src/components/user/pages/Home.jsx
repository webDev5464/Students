import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "../../../redux/slices/UserSelice";

export default function Home() {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.UserStore);

  return (
    <>
      <h1 className="text-4xl">{username}</h1>

      <button onClick={() => dispatch(changeUsername("John"))}>
        Click Me!
      </button>
    </>
  );
}
