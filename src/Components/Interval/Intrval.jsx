import React, { useEffect, useState } from 'react'

export default function Intrval() {

    const [timer, setTimer] = useState(0)


    useEffect(() => {
        let x = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(x)
        }
    }, [])



    return (
        <div className='text-center my-8 font-bold text-3xl'>{timer}</div>
    )
}
