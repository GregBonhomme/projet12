import "../../styles/components/header.css"
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom"

function Header () {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo SportSee" />
                <p className="logoTitle">SportSee</p>
            </div>
            <nav>
                <Link>Accueil</Link>
                <Link>Profil</Link>
                <Link>Réglage</Link>
                <Link>Communauté</Link>
            </nav>
        </header>
    )
}

export default Header