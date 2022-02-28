import React from "react";
import Head from "next/head";

const Contact = () => {
    return (
        <div className='w-full bg-yellow-600 h-screen'>
            <Head>
                <title>Next_boilerplate</title>
                <meta name="description" content="keywords" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="py-20">
                <h1>I am contact page</h1>
                <p>Lorem ipsum dolor sit.</p>

            </div>
            
        </div>
    )
}
export default Contact;