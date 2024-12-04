import { useContext } from "react";
import { GiTreeBranch } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user, signout, loading} = useContext(AuthContext);


    const handleSignOut = () => {
        signout()
        .then(() => {
            // console.log('logged out');
            // console.log(user);
            
          }).catch(() => {
            // console.log(error);
            
          });
    }


    const links = (                   
        <>
        <li><NavLink to='/'>Home</NavLink> </li>
        { loading ? <span className="loading loading-ring loading-md"></span> :
            user ? 
            <>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/update'>Update Profile</NavLink></li>
            </>
            :
            <>
                <li><NavLink to='/auth/signup'>Sign Up</NavLink></li>
            </>
        }
        </>
        )

    return (
        <div>
            
            <div className="mt-4 w-11/12 mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                                {links}
                        </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-xl"><GiTreeBranch></GiTreeBranch> <span className="hidden md:inline-block">Eco-Wonderland</span> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <div className="tooltip tooltip-left" data-tip={user ? user?.displayName : 'not logged in'}>
                            <div className="avatar">
                                <div className={`ring-primary ring-offset-base-100 ${loading ? '' : 'w-10'} rounded-full ring ring-offset-2 mr-4`}>
                                    {loading ? <span className="loading loading-ring loading-md"></span> : <img src={ user ? user.photoURL : "https://i.ibb.co.com/4K6VCHS/user.png"}/>}
                                </div>
                            </div>
                        </div>
                        {loading ? <div className="btn min-w-16"><span className="loading loading-ring loading-md"></span></div> : user ? <button className="btn" onClick={handleSignOut}>Logout</button> :
                            <Link to='/auth/login' className="btn">Login</Link>
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;