import { useContext } from "react";
import ProductCard from "./ProductCard";
import { GlobProvider } from "../Context/GlobContext";

export default function MyUseEffect() {

  const { data } = useContext(GlobProvider)

  return (
    <>
      <div className="cardParent">
        {
          data != undefined ? data.map((val, index) => (
            <ProductCard key={val.id} MyValue={{
              image: val.img1,
              title: val.title,
              price: val.price,
              discount: val.discount
            }} />
          )) : ""
        }
      </div>
    </>
  )
}
