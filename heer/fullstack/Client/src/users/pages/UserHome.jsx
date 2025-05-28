/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"

export default function UserHome() {
    const { userData } = useSelector(state => state.AuthData)
    const dispatch = useDispatch()

    console.log(userData)

    return (
        <>
            <div className={userData ? "h-[100px] w-[100px] bg-green-500" : "h-[100px] w-[100px] bg-red-500"}>
                <p className="font-bold">
                    <span>{userData ? userData.fName : ""}</span>
                    <span>{userData ? userData.lName : ""}</span>
                </p>
            </div>
        </>
    )
}