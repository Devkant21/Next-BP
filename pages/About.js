import React from "react";
import Head from "next/head";

const About = () => {
    return(
        <div className='w-full bg-yellow-600 h-screen'>
            <Head>
            <title>Next_boilerplate</title>
                <meta name="description" content="keywords" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
        <div className='py-20'>
            <h1 className='flex justify-center font-medium'>I am About</h1>
            <p className="mx-4">Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.</p>
            <h2 className='flex justify-center font-medium'>Header 2</h2>
            <p className="mx-4">Lorem ipsum dolor sit.</p>
        </div>
        </div>
        
    )
}

export default About