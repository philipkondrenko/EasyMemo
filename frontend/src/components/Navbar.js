import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className='logo'>Note App</Link>
        </nav>
    )
}

export default Navbar