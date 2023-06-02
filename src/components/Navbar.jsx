import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import Logo from "../assets/logo.png"

import styles from "../components/Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.nav_container}>
            <h2>
                <Link to="/"><img src={Logo} alt="logo Top Movies" /></Link>
            </h2>
            <form>
                <input type="text" placeholder="pesquise um filme" />
                <button type="submit"><BsSearch /></button>{/* quando o conteúdo do botão não for texto, uso o button, não o input tipo button.*/}
            </form>
        </nav>
    )
}

export default Navbar