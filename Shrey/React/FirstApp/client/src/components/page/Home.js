import React, { useEffect, useRef, useState } from "react";
import HomeTwo from "./HomeTwo";

function Home() {
    const changeStyle = useRef()

    const btn = () => {
        changeStyle.current.style.color = 'red';
    }


    return (
        <>
            {/* useRef */}
            <h1 ref={changeStyle}>This is a Home Page.</h1>
            <button onClick={btn}>Click Me!</button>

            <UseStatemethod />

            <ValueChange />

            <HomeTwo />

            <hr />

            <LeanUseEffect />
        </>
    )
}

const UseStatemethod = () => {
    const [theme, setTheme] = useState(false)

    const changeTheme = () => {
        setTheme(!theme)
    }

    return (
        <>
            <h2 style={{ color: theme ? 'red' : 'black' }}>Hello World</h2>

            <button onClick={changeTheme}>Click Me!</button>

            <div style={{ backgroundColor: 'yellow' }}>
                <h2>Change Theme</h2>
            </div>
        </>
    )
}

const ValueChange = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }

    const less = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    return (
        <>
            <div>
                <p>{value}</p>
                <button onClick={increment}>Add!</button>
                <button onClick={less}>Less!</button>
            </div>
        </>
    )
}

const LeanUseEffect = () => {
    const [val, setVal] = useState(0)
    const [product, setProduct] = useState(0)
    const [number, setNumber] = useState(0)

    useEffect(() => {
        alert(`Product Added ${product}`)
    }, [product])

    return (
        <>
            <h1>useEffect Example :</h1>

            <h2>{val}</h2>

            <button onClick={() => {
                setVal(val + 1)
            }}>Click !</button>

            <h2>{product}</h2>

            <button onClick={() => {
                setProduct(product + 1)
            }}>Click</button>

            <h2>{number}</h2>

            <button onClick={() => {
                setNumber(number + 1)
            }}>Click</button>
        </>
    )
}

export default Home