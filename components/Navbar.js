import Link from 'next/link'
import { Transition } from '@headlessui/react'

const Navbar = () => {
    return (
         <nav className=' shadow-sm fixed w-full z-10'>
            <div className='w-full'>
                <div className='flex items-center h-20 w-full'>
                    <div className='flex items-center mx-20 justify-between w-full'>
                        <div className='flex justify-center items-center flex-shrink-0'>
                            <ul className='flex'>
                                <Link href="/">
                                    <li className='mx-2 cursor-pointer'>Home</li></Link>
                                <Link href="/About">
                                    <li className='mx-2 cursor-pointer'>About</li></Link>
                                <Link href="/Contact">
                                    <li className='mx-2 cursor-pointer'>Contact</li></Link>
                                <Link href="/FAQ">
                                    <li className='mx-2 cursor-pointer'>FAQ</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar