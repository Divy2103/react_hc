import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className='flex items-center bg-gray-600 p-10 m-4 justify-center gap-x-20'>
            <img src={data.avatar_url} alt="github picture" width={300} className='rounded-lg' />
            <div className='text-white text-3xl flex flex-col gap-y-5'>
                <h1>Name : {data.name}</h1>
                <h1>Github Followers : {data.followers}</h1>
            </div>
        </div>
    )
}

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/divy2103');
    return response.json();
}