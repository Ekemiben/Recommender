import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';



const Navebar = ({count}) => {
  console.log(count)
  const [menu, setMenu] = useState('home');
  // const {getTotalCartItems}= useContext(ShopContext)
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        {/* <img src = {logo} alt='' /> <p>Shopping Mall</p> */}
      </div>
      <ul className='nav-menu'>
        <li onClick={()=> setMenu("home")}><Link style={{textDecoration: "none"}} to='/'>Home</Link> {menu === "home" ? <hr />: <></>}</li>
        <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration: "none"}} to='/men'>Men</Link>  {menu === "men" ? <hr />: <></>}</li>
        <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration: "none"}} to ='/women'>Women</Link>{menu === "women" ? <hr />: <></>}</li>
        {/* <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration: "none"}} to ='/kids'>kids</Link> {menu === "kids" ? <hr />: <></>}</li> */}
      </ul>
      <div className='nav-login-cart'>
        <button> <Link style={{textDecoration: "none"}} to='LoginSignup'>Login</Link></button>
        
      </div>

    </div>
  )
}

export default Navebar
