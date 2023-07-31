import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='logo'>FOOD</div>
        <div className='navLink'>
          <div>Home</div>
          <div>Menu</div>
          <div>About us</div>
        </div>
      
      <div>
        <button className='signIn'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
