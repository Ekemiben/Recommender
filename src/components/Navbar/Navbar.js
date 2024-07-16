

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/fashion-logo-design.jpg';

const Navbar = ({ count }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt='' />
      </div>
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/men' style={{ textDecoration: 'none' }}>Men</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/women' style={{ textDecoration: 'none' }}>Women</Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        <button>
          <Link to='LoginSignup' style={{ textDecoration: 'none', color: '#000' }}>Login</Link>
        </button>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </div>
  );
};

export default Navbar;












// Navbar.js
// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext'; // Import the AuthContext
// import './Navbar.css'

// const Navbar = ({ count }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { isLoggedIn, logout } = useContext(AuthContext); // Access isLoggedIn and logout from context

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='navbar'>
//       <div className='nav-logo'>
//         {/* <img src={Logo} alt='' /> */}
//       </div>
//       <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
//         <li onClick={() => setMenuOpen(false)}>
//           <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
//         </li>
//         <li onClick={() => setMenuOpen(false)}>
//           <Link to='/men' style={{ textDecoration: 'none' }}>Men</Link>
//         </li>
//         <li onClick={() => setMenuOpen(false)}>
//           <Link to='/women' style={{ textDecoration: 'none' }}>Women</Link>
//         </li>
//       </ul>
//       <div className='nav-login-cart'>
//         {isLoggedIn ? (
//           <button onClick={logout}>Logout</button>
//         ) : (
//           <button>
//             <Link to='LoginSignup' style={{ textDecoration: 'none', color: '#000' }}>Login</Link>
//           </button>
//         )}
//       </div>
//       <div className='hamburger' onClick={toggleMenu}>
//         &#9776; {/* Hamburger icon */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


