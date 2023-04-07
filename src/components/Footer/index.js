import {FaGoogle, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div>
      <FaGoogle size={30} className="footer-icon" />

      <FaYoutube size={30} className="footer-icon" />
      <FaInstagram size={30} className="footer-icon" />
    </div>
    <p className="contact-heading">mek@mek.md</p>
    <p>© All rights reserved.</p>
  </div>
)
export default Footer
