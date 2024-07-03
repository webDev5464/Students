import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ToDoList() {
    const [data, setData] = useState()

    const getData = () => {
        const toDoList = JSON.parse(localStorage.getItem("toDoArray"));
        setData(toDoList);
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data);
    return (
        <>
            {
                data !== undefined ? data !== null ? (
                    data.map((item, index) => {
                        return (
                            <div className="toDoDetails" key={index}>
                                <div className="header">
                                    <h1>{item.heading}</h1>
                                </div>
                                <div className="details">
                                    <h3>Description</h3>
                                    <label htmlFor="">{item.description}</label>
                                </div>
                                <div className="details">
                                    <h3>Time</h3>
                                    <label htmlFor="">{item.time}</label>
                                </div>
                                <div className="details">
                                    <h3>Date</h3>
                                    <label htmlFor="">{item.date}</label>
                                </div>
                            </div>
                        )
                    })

                ) : (
                    <div className="toDoList-main">
                        <div className="blankToDo">
                            <h1>To-Do list is blank!</h1>
                            <h3>Go To Create To-Do <NavLink to="/CreateTODO">Create To-Do</NavLink></h3>
                        </div>
                    </div>
                ) : ''
            }
        </>
    )
}


{/* <div className="toDoList-main">
{data.map((item,index) => {
    return(
        <div className="header" key={index}>
            <h1>{}</h1>
        </div>
    )
})}
</div> */}

{/* <div className="toDoList-main">
<div className="blankToDo">
    <h1>To-Do list is blank!</h1>
    <h3>Go To Create To-Do <NavLink to="CreateTODO">Create To-Do</NavLink></h3>
</div>
</div> */}