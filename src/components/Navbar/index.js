import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <nav className="nav">
    <Link to="/">
      <img
        className="logo"
        alt="website logo"
        src="https://res.cloudinary.com/dvco5xnoe/image/upload/v1680787604/hospital-low-resolution-color-logo_h46jeu.png"
      />
    </Link>
    <div className="navItems">
      <Link to="/about">
        <p className="text">About</p>
      </Link>
      <Link to="/test">
        <p className="text">Testimonials</p>
      </Link>
      <Link to="appoint">
        <p className="text">Appointments</p>
      </Link>
    </div>
  </nav>
)

export default Navbar
