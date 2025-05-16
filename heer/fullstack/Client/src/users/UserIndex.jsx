import { Outlet } from "react-router-dom";
import Navigation from "./pages/Navigation";
import { ToastContainer } from "react-toastify"

export default function UserIndex() {
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





