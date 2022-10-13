import './styles.scss'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

export function Header(){
    const [menu, setMenu] = useState(true)

    const handleClick = () => {
        menu ? setMenu(false) : setMenu(true)        
    }


    return(
    <>
        <header>
        <img className='logo' src={logo} alt="Shortly"></img>

        <div className='header_nav'>
            <nav>
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
        </div>

        

        <div className='hb_menu' onClick={() => {
            handleClick()
        }}>
            <div className='hb_line'></div>
            <div className='hb_line'></div>
            <div className='hb_line'></div>
        </div>

        </header>

        <div className={menu ? 'header_nav_mob' : 'header_nav_mob_visible'}>
            <nav>
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
        </div>
    </>
    )
}