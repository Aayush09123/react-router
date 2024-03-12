/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import { useLoaderData } from "react-router-dom";

const Github = () => {
    // const data = useLoaderData()
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/Aayush09123")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <Header />
            <div className='bg-gray-600 text-white text-3xl p-4 m-4'>Github followers: {data.following}
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
            <Footer />
        </>
    )
}

export default Github;

// export const githubInfoLoader = async () => {
//     const response = await fetch("https://api.github.com/users/Aayush09123")
//     return response.json()
// }