/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const User = () => {
    const { userid } = useParams()

    return (
        <>
            <Header />
            <div className='bg-gray-600 text-white text-3xl p-4 my-4'>User: {userid}</div>
            <Footer />
        </>
    )
}

export default User;