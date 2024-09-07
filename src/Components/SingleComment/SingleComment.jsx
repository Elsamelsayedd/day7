import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SingleComment() {

    const [singleComment, setSingleComment] = useState([])
    const [id, setId] = useState(null)

    async function getSingleComment(id) {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        setSingleComment(data)
        console.log(data);

    }

    useEffect(() => {
        getSingleComment(id)
    }, [id])


    return (
        <>

            <div className="container w-3/4 mx-auto my-8" >

                <form className="w-1/2 mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">

                        <input type="search" onChange={(e) => { setId(e.target.value), console.log(e.target.value); }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter post id " required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div className="comments flex flex-wrap">
                    {singleComment?.map((comment) => <div key={comment.id} className='w-1/3 p-4 text-center'>
                        <h3 className='text-2xl'>{comment.name}</h3>
                        <p>{comment.body.split(' ').slice(0, 50).join(' ')}</p>
                    </div>
                    )}
                </div>
            </div>

        </>
    )
}
