import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { loginToken } from "../redux/thunk/registerDataThunk";

export default function UserIndex() {

  const { process } = useSelector((state) => state.postData)
  const { userLogin } = useSelector(s => s.login)
  const navigate = useNavigate();
  const D = useDispatch()

  useEffect(() => {
    if (process) {
      navigate("/login")
    }

  }, [process])

  useEffect(() => {
    if (!userLogin) {
      navigate('/login')
    }

    D(loginToken())
  }, [])



  return (
    <>
      <Outlet />
    </>
  )
}
