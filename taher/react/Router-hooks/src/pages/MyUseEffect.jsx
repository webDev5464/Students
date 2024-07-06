import { useEffect, useState } from "react";

export default function MyUseEffect() {
  // const [val, setVal] = useState(true)

  // const func = () => {
  //   console.log('useEffect');
  // }

  // useEffect(() => {
  //   func();
  // }, [val])

  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://res.cloudinary.com/djkde7xp0/raw/upload/v1716272960/vfvoybg62ux93ksobfpw.json')

    const objData = await response.json()

    setData(objData.alldata)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data);

  return (
    <>

      <div>
        {data.map((x, i) => (
          <div key={i}>
            <img src={x.img1} alt="" />
          </div>
        ))}
      </div>

      {/* <button onClick={() => setVal(!val)}>Reload</button> */}
    </>
  )
}