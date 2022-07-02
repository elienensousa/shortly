import './styles.scss'
import logo from '../../assets/logo.svg'

export function Header(){
    return(
    <>
        <header>
            <nav>
                <img className='logo' src={logo} alt="Shortly"></img>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </nav>
            <div className='buttons'>
                <button className='login'>Login</button>
                <button className='sign_up'>Sign Up</button>
            </div>
        </header>
    </>
    )
}