import './styles.scss'
import logo from '../../assets/logo.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import instagramIcon from '../../assets/icon-instagram.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import twitterIcon from '../../assets/icon-twitter.svg'


export function Footer(){
    return(
        <>
            <footer>

                <img className='footer_logo' src={logo} alt='Shortly' />
                <nav>
                    <ul>
                        <h4>Features</h4>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                    <ul>
                        <h4>Resources</h4>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                    <ul>
                        <h4>Company</h4>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className='social_midia'>
                    <a href='https://www.facebook.com/' target="_blank" rel="noreferrer" >
                        <img className='social_icon' src={facebookIcon} alt='Facebook' />
                    </a>
                    <a href='https://twitter.com/' target="_blank" rel="noreferrer">
                        <img className='social_icon' src={twitterIcon} alt='Twitter' />
                    </a>
                    <a href='https://pinterest.com/' target="_blank" rel="noreferrer">
                        <img className='social_icon' src={pinterestIcon} alt='Pinterest' />
                    </a>
                    <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                        <img className='social_icon' src={instagramIcon} alt='Instagram' />
                    </a>
                </div>


            </footer>
            <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G" target="_blank" rel="noreferrer"> Frontend Mentor</a>. Coded by <a href="https://github.com/elienensousa" target="_blank" rel="noreferrer"> Eliene Nunes de Sousa</a>.
  </div> 
        </>
    )
}