/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPopup } from "../../../redux/slices/UserSlice";

export default function PopupMessage() {
  const { process, resMsg } = useSelector((state) => state.userProvider);
  const dispatch = useDispatch();

  console.log(process, resMsg);

  const tostSetting = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  useEffect(() => {
    if (process && resMsg !== "") {
      toast.success(resMsg, tostSetting);
    } else if (resMsg !== "") {
      toast.error(resMsg, tostSetting);
    }

    setTimeout(() => {
      dispatch(resetPopup());
    }, 500);
  }, [process]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
