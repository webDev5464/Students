/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function CreateToDo() {
    const autoFocus = useRef();

    useEffect(() => {
        autoFocus.current.focus()
    }, [])

    // const addToDo = () => {
    //     console.log("inside add to-do");
    //     const toDoDetails = {
    //         header: document.getElementById("heading").value,
    //         time: document.getElementById("time").value,
    //         date: document.getElementById("date").value,
    //         description: document.getElementById("description").value
    //     }
    //     console.log(toDoDetails);
    //     const toDoArray = JSON.parse(localStorage.getItem("toDoArray"))
    //     if (toDoArray != null) {
    //         let isDuplicate = false;
    //         toDoArray.map((item, index) => {
    //             if (item.header == toDoDetails.header) {
    //                 isDuplicate = true;
    //             }
    //         })
    //         if (!isDuplicate) {
    //             toDoArray.push(toDoDetails);
    //             localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
    //         }
    //     }
    //     else
    //         localStorage.setItem("toDoArray", JSON.stringify([toDoDetails]));
    //     console.log(toDoArray);
    //     document.getElementById("heading").value = '';
    //     document.getElementById("time").value = '';
    //     document.getElementById("date").value = '';
    //     document.getElementById("description").value = '';
    // }

    const [inputData, setInputData] = useState({
        heading: "",
        time: "",
        date: "",
        dis: ""
    })

    const [localTodo, setLocalTodo] = useState()

    const formHandler = (e) => {
        try {
            e.preventDefault()
            const { heading, time, date, dis } = inputData
            if (heading == "") throw new Error("Input field is blank.")

            if (localTodo.length == 0) {
                setLocalTodo([inputData]);
                localStorage.setItem('toDoArray', JSON.stringify([inputData]))
            } else {
                setLocalTodo([...localTodo, inputData])
                localStorage.setItem('toDoArray', JSON.stringify(localTodo))
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const inputHandelr = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const getTodoValue = JSON.parse(localStorage.getItem("toDoArray")) || []
        setLocalTodo(getTodoValue)
    }, [])

    return (
        <div className="createToDO-main">
            <div className="createToDO">
                <div className="toDoHeader">
                    <h1>Create TO-DO</h1>
                </div>

                <form onSubmit={formHandler}>
                    <div className="toDoDetails">
                        <div className="details">
                            <h3>Heading</h3>
                            <input type="text" className="tx-box" name="heading" placeholder="Write Here" ref={autoFocus} onChange={inputHandelr} />
                        </div>
                        <div className="details">
                            <h3>Time</h3>
                            <input className="time" type="time" name="time" onChange={inputHandelr} />
                        </div>
                        <div className="details">
                            <h3>Date</h3>
                            <input className="date" type="date" name="date" onChange={inputHandelr} />
                        </div>
                        <div className="details">
                            <h3>Description</h3>
                            <textarea className="tx-box" name="dis" placeholder="Write Here" onChange={inputHandelr}></textarea>
                        </div>
                        <div className="details">
                            <button type="submit" className="btn">Add To-Do</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}