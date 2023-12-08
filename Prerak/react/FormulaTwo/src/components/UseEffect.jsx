import { useEffect, useRef, useState } from "react"

export default function UseEffect() {

  useEffect(() => {
    autoFocus.current.focus()
  }, [])

  const autoFocus = useRef()

  return (
    <>
      <input type="text" ref={autoFocus} />

      <hr />

      <Fetching />
    </>
  )
}

function Fetching() {

  const [products, setProducts] = useState([])

  // https://jsonplaceholder.typicode.com/
  useEffect(() => {
    fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData").then((response) => response.json()).then((data) => {
      const allData = [...data.earbud, ...data.tshirt]
      setProducts(allData)
    })
  }, [])

  // console.log(products);

  return (
    <>
      <div className="cardParent">
        {
          products.map((e) => (
            <div key={e.id} className="card">
              <div>
                <img src={e.img1} alt="productImage" width={200} />
              </div>
              <p>{e.title}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}