import { useContext, useEffect, useRef, useState } from 'react'
import ProductCard from '../modules/ProductCard'
import { UserContext } from '../UserIndex'
import { GlobProvider } from '../modules/GlobContext'
// import { earbud } from '../modules/ProductsData'

function Home() {

  const { pass, user } = useContext(UserContext)
  const {users} = useContext(GlobProvider)

  console.log(users)

  console.log(pass)

  // console.log(earbud)
  const [num, setNum] = useState(0)

  const autoScroll = useRef(null)

  const autoFocus = useRef()

  useEffect(() => {
    autoFocus.current.focus()
  }, [num])

  return (
    <>
      {/* <div className='grid grid-cols-3 place-items-center gap-5 max-[1110px]:grid-cols-2'>
         {earbud.map((x, i) => {
        return <ProductCard key={x.id} data={{ img: x.img, title: x.title, price: x.price, id: x.id }} />
      })} 
      </div> */}

      {/* <button onClick={() => autoFocus.current.focus()}>Focus</button> */}
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>

      <input type="text" className='border m-5' ref={autoFocus} />

      <button onClick={() => autoScroll.current?.scrollIntoView({ behavior: "smooth" })}>Click ME!</button>

      <div className='h-[200vh]'></div>

      <div className='h-[400px] bg-red-500' ref={autoScroll}></div>

      <div className='h-[200vh]'></div>


    </>
  )
}

export default Home
