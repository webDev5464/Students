/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminIndex() {
    const navigate = useNavigate()
    const { adminLogin } = useSelector(state => state.AdminData)

    useEffect(() => {
        if (adminLogin) {
            navigate("/admin")
        } else {
            navigate("/admin/login")
        }
    }, [adminLogin])

    return (
        <>
            <Outlet />
        </>
    )
}