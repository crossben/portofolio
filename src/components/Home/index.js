import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt='the develloper'/>
                lobodan
                <br/>
                web developer 
                </h1>
                <h2>Frontend developer / javascript expert / gamer</h2>
                <Link to='/contact' className='flat-button'>CCONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;