import MyImage from "../assets/pexels-clément-proust-19210728.jpg"

import { FaHouseUser, FaUserGraduate } from "react-icons/fa"
import { AiFillAndroid } from "react-icons/ai"

const Home = () => {

  const personName = "Chagan"

  return (
    <div className="card">

      <div className="cardImg">
        <img src={MyImage} alt="" width={300} />
      </div>

      <div style={{ backgroundColor: "black", color: "White", padding: 10 }}>
        <h2>Hello {personName} {<FaHouseUser style={{ color: "red" }} />}</h2>

        <p>Lorem ipsum dolor sit amet. {<FaUserGraduate className="Graduate" />}</p>
        <p>{<AiFillAndroid />} Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat sapiente dolore magni autem suscipit necessitatibus reiciendis? Impedit numquam veritatis nostrum totam dicta. Et odio autem maiores laborum nisi recusandae! </p>
      </div>

    </div>
  )
}

export default Home