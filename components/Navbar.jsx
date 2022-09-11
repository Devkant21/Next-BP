import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='fixed w-full shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image 
                    src='/../public/PG.jpg' 
                    alt='/' 
                    width='60' 
                    height='60'
                />
            </div>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Service</li>
                    </Link>
                    <Link href="/Service">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Service</li>
                    </Link>
                    <Link href="/Service">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Service</li>
                    </Link>
                </ul>
                <div className='md:hidden'>
                    <AiOutlineClose />
                    <AiOutlineMenu size ={30} />
                </div>
            </div>
        </div>


    
    )
}

export default Navbar