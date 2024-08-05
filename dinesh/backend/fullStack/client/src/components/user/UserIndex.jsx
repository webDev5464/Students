/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import UserNavigation from "./layouts/UserNavigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMsg } from "../../redux/slice/UserSlice";
import MsgPopup from "./layouts/MsgPopup";
import { userVerify } from "../../redux/thunk/UserApiThunk";
import { isRejectedWithValue } from "@reduxjs/toolkit";

export default function UserIndex() {
  const { msg } = useSelector((state) => state.UserStore);
  const dispatch = useDispatch();
  const rejectWithValue = isRejectedWithValue();

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetMsg());
    }, 500);
  }, [msg]);

  useEffect(() => {
    dispatch(userVerify({ rejectWithValue }));
  }, []);

  return (
    <>
      <UserNavigation />
      <main className="p-5">
        <Outlet />
      </main>
      <MsgPopup />
    </>
  );
}
