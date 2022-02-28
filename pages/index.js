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
      
    </div>
  )
}
