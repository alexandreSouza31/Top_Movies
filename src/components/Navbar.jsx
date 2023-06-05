import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import Logo from "../assets/logo.png"

import styles from "../components/Navbar.module.css"

const Navbar = () => {

    const [search, setSearh] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) {
            alert("digite algum título!"); return

        } else {
            navigate(`/search?q=${search}`);//direciona pro search com o filme da api
            setSearh("");//limpa o campo após a busca
        }
    }

    return (
        <nav className={styles.nav_container}>
            <h2>
                <Link to="/"><img src={Logo} alt="logo Top Movies" /></Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="pesquise um filme"
                    onChange={(e) => setSearh(e.target.value)}
                    /*sempre que é digitado algo no input estou alterando o
                     estado do search baseado nos eventos que acontecem.*/
                    value={search}
                />
                <button type="submit"><BsSearch /></button>{/* quando o conteúdo do botão não for texto, uso o button, não o input tipo button.*/}
            </form>
        </nav>
    )
}

export default Navbar