import Link from 'next/link'
// import Navbar from './Navbar'


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
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