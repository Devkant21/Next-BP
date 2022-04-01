import Link from 'next/link'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

const Navbar = () => {
    return (
         <nav className='flex flex-col md:flex-row md:justify-center items-center shadow-sm fixed w-full z-10 py-2 bg-white text-black'>
             <div className='float-left' >
                 <Image src='/vercel.svg' width={70} height={50} />
             <ul className='flex items-center space-x-4 mt-3 justify-between font-bold md:text-md float-right'>
                    <Link href="/"><li className='mx-2 cursor-pointer '>Home</li></Link>
                    <Link href="/Service"><li className='mx-2 cursor-pointer '>Service</li></Link>
                    <Link href="/Contact"><li className='mx-2 cursor-pointer '>Contact</li></Link>
                    <Link href="/FAQ"><li className='mx-2 cursor-pointer '>FAQ</li></Link>
                </ul>
             </div>
                
        </nav>
    )
}

export default Navbar