import logo from '../../assets/images/Logo.svg';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const history = useNavigate();
    const go_to_the_link = (url) => {
        history(url);
    }

    return (
        <header>
            <div className='header-container'>
                <div>
                    <img className="logo" src={logo} alt="logo" onClick={() => go_to_the_link("/")} />
                </div>
                <div className="header-menu">
                <span className="header-menu-links" onClick={() => go_to_the_link("equipos")}>Equipos</span>
                </div>
            </div>
        </header>
    )
};


export default Header;