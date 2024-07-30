/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { resetMsg } from "../redux/Slice/UserSlice";

export default function Index() {
  const { process, msg, loading } = useSelector((state) => state.UserProvider);
  const dispatch = useDispatch();

  useEffect(() => {
    if (msg !== "") {
      alert(msg);

      setTimeout(() => {
        dispatch(resetMsg());
      }, 500);
    }
  }, [msg]);

  console.log({ process, msg, loading });

  return (
    <>
      <Outlet />
    </>
  );
}
