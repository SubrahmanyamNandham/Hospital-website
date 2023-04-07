import {Link} from 'react-router-dom'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Appointment = () => (
  <div>
    <Navbar />
    <div className="login-bg">
      <form className="login-form">
        <div className="login-container">
          <label htmlFor="userId" className="label-text">
            Email
          </label>
          <input
            id="userId"
            type="text"
            placeholder="Enter your Mail id"
            className="input-bar"
          />
        </div>
        <div className="login-container">
          <label htmlFor="pwd" className="label-text">
            Mobile Number
          </label>
          <input
            id="pwd"
            type="text"
            placeholder="Enter your number"
            className="input-bar"
          />
        </div>
        <div className="login-container">
          <label htmlFor="pwd" className="label-text">
            Date adn time of Appointment
          </label>
          <input
            id="pwd"
            type="date"
            placeholder="Enter your number"
            className="input-bar"
          />
        </div>

        <button type="submit" className="login-btn">
          Submit
        </button>
        <Link to="/">
          <p>Home</p>
        </Link>
      </form>
    </div>
    <Footer />
  </div>
)

export default Appointment
