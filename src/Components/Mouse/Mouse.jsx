import React, { useEffect, useState } from 'react'

export default function Mouse() {

    const [mouse, setMouse] = useState(0)
    const [click, setClick] = useState(false)


    useEffect(() => {
        window.addEventListener('mousemove', (e) => setMouse(e.offsetX))


    }, [mouse, click])

    // useEffect(() => {



    // }, [mouse])




    return (
        <>
            <div className='text-center my-8 text-3xl font-bold'>{mouse}</div>

            <div className='text-center'>
                <button onClick={() => setClick(!click)} className='bg-red-500 px-5 py-2 rounded-xl  my-8 text-3xl font-bold'> <i className="fa-solid fa-list"></i></button>

            </div>


            {click ? <p className='text-center my-8 text-3xl font-bold'>welcome</p> : ''}
        </>
    )
}
