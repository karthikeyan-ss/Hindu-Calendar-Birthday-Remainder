import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <h1 className="text-lg font-bold">Hindu Birthday Remainder</h1>
            <div>
                <Link to='/' className="mr-4">Home</Link>
                <Link to='/dashboard' className="mr-4">Dashboard</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Header;