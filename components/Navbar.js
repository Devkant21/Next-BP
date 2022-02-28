import Link from 'next/link'
// import Navbar from './Navbar'
import About from '../pages/About'

const Navbar = () => {
    return (
        <div>
            <nav className='mx-2 my-2'>
                <ul className='flex px-4 my-4'>
                    <Link href="/">
                        <li>Home</li></Link>

                    <Link href="/About"><li>About</li></Link>
                    <li>
                        Contact
                    </li>
                    <li>
                        FAQ
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar