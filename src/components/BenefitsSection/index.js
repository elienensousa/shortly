import './styles.scss'
import iconBrandRecognition from '../../assets/icon-brand-recognition.svg'
import iconDetailedRecords from '../../assets/icon-detailed-records.svg'
import iconFullyCustomizable from '../../assets/icon-fully-customizable.svg'


const content = [
    {
        icon: iconBrandRecognition,
        title: "Brand Recognition",
        content:"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    },

    {
        icon: iconDetailedRecords,
        title: "Detailed Records",
        content:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },

    {
        icon: iconFullyCustomizable,
        title: "Fully Customizable",
        content:"  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    },

]

export function BenefitsSection(){
    return(
        <>
        <section className='benefits_section'>
            <div className='header_section'>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className='wrapper'>
                <span />
                {
                    content.map(({ icon,title,content }) =>{
                           return( 
                           <div className='benefits_content' key={title}>
                               <div className='benefits_icon'>
                                <img src={icon} alt={title} />
                               </div>
                                <h3>{title}</h3>
                                <p>{content}</p>
                                
                            </div>)
                    })
                }
                
            </div>
        </section>
        </>
    )
}