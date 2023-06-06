import { FaLinkedinIn, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"

import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social_list">
                <li><FaLinkedinIn /></li>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaGithub /></li>
            </ul>
            <p>
                <span>Top </span>
                <span>Movies </span>
                | &copy; 2023
            </p>
        </footer>
    )
}

export default Footer