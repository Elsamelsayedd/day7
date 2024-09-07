import React, { useEffect, useState } from 'react'

export default function Width() {


    const [width, setWidth] = useState(document.body.clientWidth)



    useEffect(() => {
        window.addEventListener("resize", function (event) { setWidth(document.body.clientWidth) })

        console.log(window.innerWidth);


    }, [width])


    return (
        <div className='text-center my-8 text-3xl font-bold'>{width}</div>
    )
}
