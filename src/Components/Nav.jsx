import React from 'react';
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Nav() {

    return (
        <>
        <nav>
            <ul>
                <li className='logo'>
                <img src={Logo} alt="Little lemon Logo" srcset="" />
                </li>
                

            </ul>
        </nav>


        </>
    )

}