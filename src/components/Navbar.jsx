import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth';
import { ReactComponent as Logo } from "../assets/icons/favicon.svg";

const Navbar = () => {
  const { state: ContextState, login, logout } = useContext(AuthContext);
  const { isAuthenticated } = ContextState;
  const location = useLocation();

  const connectWallet = () => {
    login();
  }
  
  const logoutWallet = () => {
    logout();
  }

  return (
    <div className="select-none text-color2 md:px-20 xl:px-40 h-16 w-full relative z-50">
        <div className="mx-auto h-20 px-3 md:px-6 lg:px-8 flex flex-row items-center justify-between">
            <div className="flex items-center justify-center space-x-3">
                <Logo className='w-7 h-7 stroke-black'/>
                <p className="text-2xl font-bold">AuthDoc.</p>
            </div>
            <div className="flex flex-row items-center justify-center text-Unselected space-x-6 text-base h-full">
               <Link 
                    to='/' 
                    className={`hover:text-color2 transition-all duration-150 ease-in-out
                        ${location.pathname === '/' ? "text-color2" : ""}`}
                >
                    Home
                </Link>
                <Link 
                    to='/about' 
                    className={`hover:text-color2 transition-all duration-150 ease-in-out 
                        ${location.pathname === '/about' ? "text-color2" : ""}`}
                >
                    About
                </Link>
                {isAuthenticated ? (
                    <>
                        <Link 
                            to='/user' 
                            className={`hover:text-color2 transition-all duration-150 ease-in-out 
                                ${location.pathname === '/user' ? "text-color2" : ""}`}
                        >
                            User
                        </Link>
                        <div onClick={logoutWallet} className="bg-color7 px-4 py-2 text-white cursor-pointer rounded-lg hover:opacity-80 transition-all duration-150 ease-in-out">
                            Logout
                        </div>
                    </>
                 ) : (
                    <>
                        <Link 
                            to='/verify' 
                            className={`hover:text-color2 transition-all duration-150 ease-in-out 
                                ${location.pathname === '/verify' ? "text-color2" : ""}`}
                        >
                            Verify
                        </Link>
                        <div onClick={connectWallet} className="bg-color7 px-4 py-2 text-white cursor-pointer rounded-lg hover:opacity-80 transition-all duration-150 ease-in-out">
                            Connect wallet
                        </div>
                    </>
                 )}
            </div>
        </div>
    </div>
  )
}

export default Navbar