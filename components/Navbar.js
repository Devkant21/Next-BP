import Link from 'next/link'
import { Transition } from '@headlessui/react'

const Navbar = () => {
    return (
         <nav className=' shadow-sm fixed w-full z-10 px-4 py-4 bg-slate-600 text-white'>
             <div className='float-left' 
                 img src='vercel.svg' width={75} height={50}>
             <ul className='float-right flex'>
                    <Link href="/"><li className='mx-2 cursor-pointer'>Home</li></Link>
                    <Link href="/About"><li className='mx-2 cursor-pointer'>About</li></Link>
                    <Link href="/Contact"><li className='mx-2 cursor-pointer'>Contact</li></Link>
                    <Link href="/FAQ"><li className='mx-2 cursor-pointer'>FAQ</li></Link>
                </ul>
            
             </div>
                
        </nav>
    )
}

export default Navbar