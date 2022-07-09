import './styles.scss'
import hero from '../../assets/illustration-working.svg'


export function Hero(){
    return(
        <>
            <section className='hero'>
                <div className='content'>
                    <h1>More than just shorter links</h1>
                    <p> Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button className='start_button'>Get Started</button>
                </div>
                <img className='illustration_working' src={hero} alt='A person working' />
            </section>
        </>
    )
}