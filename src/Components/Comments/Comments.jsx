import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Comments() {

    const [comments, setComments] = useState([])

    async function getComments() {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        setComments(data)
        console.log(data);

    }

    useEffect(() => {
        getComments()
    }, [])


    return (
        <>

            <div className="container w-3/4 mx-auto my-8" >
                <div className="comments flex flex-wrap">
                    {comments.map((comment) => <div key={comment.id} className='w-1/3 p-4 text-center'>
                        <h3 className='text-2xl'>{comment.name}</h3>
                        <p>{comment.body.split(' ').slice(0, 50).join(' ')}</p>
                    </div>
                    )}
                </div>
            </div>

        </>
    )
}
