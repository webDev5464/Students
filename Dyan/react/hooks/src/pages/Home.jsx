import { Link } from "react-router-dom";
import MyProps from "../components/MyProps";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchRowData = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI")
      const jsonData = await fetchRowData.json()

      setProducts([...jsonData.earbud, ...jsonData.tshirt])
    }

    fetchData()
  }, [])

  console.log([products]);

  return (
    <>
      <Link to={'https://themewagon.com/'} target="_blank">ThemeWagon</Link>

      {products.map((a) => {
        return (
          <MyProps key={a.id} products={{
            title: a.title,
            img1: a.img1,
            price: a.price,
            discount: a.discount,
          }} />
        )
      })}
    </>
  )
} 