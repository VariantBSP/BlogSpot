import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link className='logo' to="/"><h1>BSP BlogSpot</h1></Link>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;