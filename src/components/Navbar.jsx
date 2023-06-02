import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import Logo from "../assets/top_movies.png"

const Navbar = () => {
    return (
        <nav>
            <h2>
                <Link to="/"></Link>
            </h2>
            <form>
                <input type="text" placeholder="pesquise um filme" />
                <button type="submit"><BsSearch /></button>{/* quando o conteúdo do botão não for texto, uso o button, não o input tipo button.*/}
            </form>
        </nav>
    )
}

export default Navbar