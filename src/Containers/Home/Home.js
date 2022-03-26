import './Home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const history = useNavigate();
    const go_to_the_link = (url) => {
        history(url);
    }
    return (
        <div className="home-container">
            <button className="home-button" onClick={() => go_to_the_link("equipos")}>Ver equipos</button>
        </div>
    )
};


export default Home;