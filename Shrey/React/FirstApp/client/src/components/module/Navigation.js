import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import { VscSymbolProperty } from "react-icons/vsc"
import { RiHome3Fill } from "react-icons/ri"
import { MdDesignServices, MdOutlineMiscellaneousServices } from "react-icons/md"
import { AiOutlineForm } from "react-icons/ai"

function Navigation() {
    return (
        <ul>
            <li>
                <NavLink to={'/'}><RiHome3Fill />Home</NavLink>
            </li>
            <li>
                <NavLink to={'About'}><MdDesignServices /> About</NavLink>
            </li>
            <li>
                <NavLink to={'Contact'}><MdOutlineMiscellaneousServices />Contact</NavLink>
            </li>
            <li>
                <NavLink to={'Service'}><VscSymbolProperty /> Service</NavLink>
            </li>
            <li>
                <NavLink to={'Form'}><AiOutlineForm /> Form</NavLink>
            </li>
        </ul >
    )
}

export default Navigation
