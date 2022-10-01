import { Link } from "react-router-dom";
import logo from "../../assets/img/logoCat.gif";

const Header = () => {
    return (
        <header className="header">
            <Link to="/"><img className="logo" src={logo} alt={"logo"} /></Link>
            <div className="logoText shadow">Easy English</div>
            <nav className="navigator">
                <ul>
                    <li>
                        <Link to="/" className="menu" data-item="Главная">Главная</Link>
                    </li>
                    <li>
                        <Link to="/game" className="menu" data-item="Тренировка">Тренировка</Link>
                    </li>
                </ul>
            </nav>
        </header >

    );
};

export default Header;