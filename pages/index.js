import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <div>
      
      <Head>
        <title>Next_boilerplate</title>
        <meta name="description" content="keywords" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full  h-screen'>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-green-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-700 font-medium title-font text-2xl mb-2 sm:mb-0">Alpha Bravo Charlie</h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu</p>
              </div>
            </div>
            
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="border border-green-700 p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="content" className="object-cover object-center h-full w-full" width={200} height={200} src="/ok.svg" />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-700 mt-5">On me</h2>
                <p className="text-base leading-relaxed mt-2">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu</p>
                
              </div>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="border border-green-700 p-6 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="content" className="object-cover object-center h-full w-full" width={200} height={200} src="/ok.svg" />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-700 mt-5">Fire in the hole</h2>
                <p className="text-base leading-relaxed mt-2">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu</p>
                
              </div>
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="border border-green-700 p-6 rounded-lg">
              
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="content" className="object-cover object-center h-full w-full" width={200} height={200} src="/ok.svg" />
                </div>
          
                <h2 className="text-xl font-medium title-font text-gray-700 mt-5">MIA</h2>
                <p className="text-base leading-relaxed mt-2">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu</p>
      
              </div>
              </div>
            </div>
          </div>
          </section>
          <div className='justify-center flex py-1'>
          <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
          </div>
        
      </div>
      
    </div>
  )
}
