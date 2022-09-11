import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Subheading</h2>
                <p className='py-4 text-gray-800'>
                Every time your eyes close, I feel my body disappear
                My fingers start fading then I &apos;m gone, gone, gone
                I wake up in the deepest corner of your mind and wonder why
                I &apos;m living in your world instead of mine
                Yours instead of mine
                Even if I don &apos;t know quite exactly where I want to be
                I &apos;m not gonna stay here stuck in someone else &apos;s dream
                Maybe I &apos;ll find mine &apos;s a nightmare, but I don &apos;t even care
                I just wanna live inside my own dream
                I run for the horizon to see if I can shoot straight off again
                Would it even wake you if I fall, fall, fall?
                Throwing rocks at your golden sky
                But they fall so short I have to laugh
                Make a little echo in your mind
                Even if I don &apos;t know quite exactly where I want to be
                I &apos;m not gonna stay here stuck in someone else &apos;s dream
                Maybe I &apos;ll find mine &apos;s a nightmare, but I don &apos;t even care
                I just wanna live inside my own dream
                I just wanna live inside my own dream
                Even if I don &apos;t know quite exactly where I want to be
                I &apos;m not gonna stay here stuck in someone else &apos;s dream
                Maybe I &apos;ll find mine &apos;s a nightmare, but I don &apos;t even care
                I just wanna live inside my own
                Even if I don &apos;t know quite exactly where I want to be
                I &apos;m not gonna stay here stuck in someone else &apos;s dream
                Maybe I &apos;ll find mine &apos;s a nightmare, but I don &apos;t even care
                I just wanna live inside my own
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/PG.jpg" width={100} height={100} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About