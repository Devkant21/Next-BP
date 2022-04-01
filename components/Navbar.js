import Link from 'next/link'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

const Navbar = () => {
    return (
         <nav className='flex flex-col md:flex-row md:justify-center items-center shadow-sm  bg-gradient-to-r from-green-600 to-green-300 text-black'>
             <div className='mx-2 cursor-pointer float-left' >
                 <Link href="/"><Image src='/ok.svg' width={50} height={50} /></Link>
             <ul className='flex items-center space-x-4 mt-3 justify-between font-bold md:text-md float-right'>
                    
                    <Link href="/Service"><li className='mx-2 cursor-pointer '>Service</li></Link>
                    <Link href="/Contact"><li className='mx-2 cursor-pointer '>Contact</li></Link>
                    <Link href="/FAQ"><li className='mx-2 cursor-pointer '>FAQ</li></Link>
                </ul>
             </div>
                
        </nav>
    )
}

export default Navbar