import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css'
import cv from '../assets/cv_portofolio/cv_portofolio_waridatul_jannah.pdf'



const Navbar = () => {
  
  const onButtonClick = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cv;
    // Set the downloaded file name
    link.download = 'Waridatul_Jannah_CV.pdf';
    // Append to the body
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Remove the element from the body
    document.body.removeChild(link);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-yellow text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-yellow text-neutral-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <HashLink to='/#portofolio' className=" text-tittle ">
                  Portofolio
                </HashLink>
              </li>
              <li>
                <HashLink to='/#about' className=" text-tittle ">
                  About
                </HashLink>
              </li>
              <li>
                <Link to='/experience' className=" text-tittle ">
                  Experience
                </Link>
              </li>
            </ul>
          </div>
          <Link to='/' className=" text-tittle-logo btn btn-ghost text-xl hover:bg-gray-700 hover:text-white">
            NaN
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <HashLink to='/#portofolio' className=" text-tittle ">
                Portofolio
              </HashLink>
            </li>
            <li>
              <HashLink to='/#about' className=" text-tittle ">
                About
              </HashLink>
            </li>
            <li>
              <Link to='/experience' className=" text-tittle ">
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button 
            className="btn-download-cv " 
            onClick={onButtonClick}
          >
            Download CV
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;