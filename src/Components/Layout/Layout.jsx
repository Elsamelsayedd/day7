import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
    return <>
        <div className='my-8'>
            <Navbar />
        </div>

        <Outlet></Outlet>

    </>
}
