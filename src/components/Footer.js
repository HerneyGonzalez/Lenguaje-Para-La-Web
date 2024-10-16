import footer from '../img/footer.png';
import logo from '../img/logo.png';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';
import linkend from '../img/in.svg';
import pinterest from '../img/pinterest.svg';
import { Link } from 'react-router-dom';
function Footer() {
    return(
        <div className="footerDiv">
            <img className='footerimg' src={footer} alt="footer"/>
            <footer>
                <div className='footer-content'>
                    <Link to="/"><img alt='logo' className='logito' src={logo}></img></Link>
                    <p>Enfocados en traer los mejores productos del mercado, a tus manos!</p>
                    <p className='desde'>Desde 1986</p>
                    <ul className='socials'>
                        <li><a href='#facebook'><i><img alt="no carga"src={facebook}></img></i></a></li>
                        <li><a href='#twitter'><i><img alt="no carga" src={twitter}></img></i></a></li>
                        <li><a href='#instagram'><i><img alt="no carga" src={instagram}></img></i></a></li>
                        <li><a href='#linkend'><i><img alt="no carga" src={linkend}></img></i></a></li>
                        <li><a href='#pinterest'><i><img alt="no carga" src={pinterest }></img></i></a></li>
                    </ul>                
                </div>
                <div className='footer-bottom'>
                    <p>Copyright &copy; 2024 StationaryShop Design By <span>usteam</span></p>
                </div>
            </footer>

        </div>
    );
}
export default Footer;