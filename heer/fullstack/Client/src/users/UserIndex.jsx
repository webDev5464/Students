/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./pages/Navigation";
import { ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { $UserAuthToken } from "../redux/Thunk/Auth.thunk";

export default function UserIndex() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userData, process } = useSelector(state => state.AuthData)

    useEffect(() => {
        if (userData) {
            navigate('/')
        } else {
            dispatch($UserAuthToken())
            navigate("/userLogin")
        }
    }, [userData, process])

    return (
        <>
            <Navigation />

            <hr />

            <main className="p-3">
                <Outlet />
            </main>

            <ToastContainer />
        </>
    )
}





