import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../../Contexts/Firebase/AuthContext';

const Navbar = () => {

    const { user, loading, logOut } = use(AuthContext);

    if (loading) {
        return <><span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span></>
    }

    const signOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                console.log('SignOut Successfully!!');
               
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }


    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>

    </>


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={signOut} className='btn' >LogOut</button> : <><NavLink to="/register" className="btn">Register</NavLink>
                            <NavLink to="/signin" className="btn">SignIn</NavLink></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;