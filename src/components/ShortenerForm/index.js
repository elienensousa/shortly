import { useState } from 'react'
import axios from 'axios'
import './styles.scss'
import { LoaLoadingButton } from './LoadingButton'

export function ShortenerForm (){
    const [loading, setLoading] = useState(false)
    const [input, setIput] = useState("")
    const [shortened, setShortened] = useState("")
    
    const handleClick = async () => {
        try{
            setLoading(true)
            const response = await axios(
                `https://api.shrtco.de/v2/shorten?url=${input}`
            )
            setShortened(response.data.result.full_short_link)

            setLoading(false)
        }catch(e){
            console.log(e)
        }
        
    }


    return(
        <>
            <section className='shorter_section'>
                <div className="shorter_wrapper">
                    <input className="shorter_input"
                    placeholder="Shorten a link here..."
                    value={input}
                    onChange={(e)=>{setIput(e.target.value)}}
                    />

                    <button 
                    className="shorter_button"
                    onClick={() => {
                        handleClick()
                    }}
                    >{loading ? <LoaLoadingButton />: "Shorten It!"}</button>
                </div>

                <div className='shortened'>
                    <span>{input}</span>
                    <span>{shortened}</span>
                </div>
                
                
            </section>
        </>
    )
}