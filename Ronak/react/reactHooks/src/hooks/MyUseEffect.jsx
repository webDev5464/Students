import { useEffect, useRef, useState } from "react"

const MyUseEffect = () => {

  const [productData, setProductData] = useState([])

  // useEffect(() => {
  //   fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData").then(x => x.json()).then(data => setProductData(data))
  // }, [])

  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const fetching = async () => {
      try {
        const api = await fetch("https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData")
        const convert = await api.json()

        setProductData(convert)
      } catch (error) {
        setErr(error)
      } finally {
        setLoading(false)
      }
    }

    fetching()
  }, [])

  if (err) {
    return <h1>Southings Wrong!</h1>
  }

  if (loading) {
    return <h1>Loading Please wait.</h1>
  }

  // console.log(productData);

  const products = [...productData.earbud, ...productData.tshirt]

  // console.log(products);
  // console.log(productData);

  return (
    <>
      <AutoFocus />
      <div>
        {
          products.map((x) => (
            <div key={x.id}>
              <div>
                <img src={x.img1} alt="product" width={200} />
              </div>

              <div>
                <p>{x.title}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default MyUseEffect

// https://res.cloudinary.com/dpiiduvvx/raw/upload/v1697829682/productData

const AutoFocus = () => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <>
      <input type="text" ref={ref} />
    </>
  )
}