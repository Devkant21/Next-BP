import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Next_boilerplate</title>
        <meta name="description" content="keywords" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='w-full bg-yellow-600 h-screen'>
        <h1 className='py-20 self-center'>Hello</h1>
      </div>
      
    </div>
  )
}
