import React from 'react'
import Image from "next/image"

const Service = () => {
  return (
      <div className='w-full bg-gradient-to-r from-green-600 to-blue-500 h-screen'>
        <section width={40} height={50}ction className="text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-100 border-opacity-80 rounded-lg overflow-hidden">
                <Image className="lg:h-48 md:h-36 w-full object-cover justify-center object-center" width={720} height={720} src="/ok.svg" alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-100 mb-1">Wolf</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">On me</h1>
                    <p className="leading-relaxed mb-3">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu</p>
                    
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-100 border-opacity-80 rounded-lg overflow-hidden">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={720} height={720} src="/ok.svg" alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-100 mb-1">Assault</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Fire in the hole</h1>
                    <p className="leading-relaxed mb-3">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu</p>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-100 border-opacity-80 rounded-lg overflow-hidden">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={720} height={720} src="/ok.svg" alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-100 mb-1">Affirmative</h2>
                    <h1 className="title-font text-lg font-medium text-gray-100 mb-3">Roger that</h1>
                    <p className="leading-relaxed mb-3">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.</p>
        
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
    
  )
}

export default Service