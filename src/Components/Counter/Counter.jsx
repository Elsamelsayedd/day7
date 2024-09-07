import React, { useEffect, useState } from 'react'

export default function Counter() {


    const [counter, setCounter] = useState(1)

    function increase() {
        setCounter(counter + 1)
    }

    function decrease() {
        { counter <= 1 ? setCounter(1) : setCounter(counter - 1) }
    }

    useEffect(() => {
        console.log('render every time');



    },)



    return (<>


        <div>Counter</div>

        <div className='w-[20%]   h-[50px] my-10 m-auto border relative border-orange-800 rounded-3xl'>

            <div className='absolute text-xl font-bold -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2'>{counter}</div>
            <div onClick={() => increase()} className="plus w-[40px] h-[40px] absolute top-1 right-1 cursor-pointer rounded-full bg-green-600 flex justify-center items-center">
                <i className="fa-solid fa-plus"></i>
            </div>
            <div onClick={() => decrease()} className="minus w-[40px] h-[40px] absolute top-1 left-1 cursor-pointer rounded-full bg-green-600 flex justify-center items-center">
                <i className="fa-solid fa-minus"></i>
            </div>
        </div>




    </>



    )
}
