import Link from 'next/link'
// import Navbar from './Navbar'
// import About from '../pages/About'

const Navbar = () => {
    return (
        <div>
            <nav className='mx-2 my-2'>
                <ul className='flex px-4 my-4'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/About"><li>About</li></Link>
                    <Link href="/Contact"><li>Contact</li></Link>
                    <Link href="/FAQ"><li>FAQ</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar