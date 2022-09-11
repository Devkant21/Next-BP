import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p>About</p>
                <p>Subheading</p>
            </div>
            <div>
                <Image src="/PG.jpg" width={100} height={100} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About