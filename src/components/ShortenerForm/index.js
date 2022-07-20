import { useState } from 'react'
import axios from 'axios'
import './styles.scss'
import { LoadingButton } from './LoadingButton'
import validatorUrl from '../../util/validator'

export function ShortenerForm (){
    const [loading, setLoading] = useState(false)
    const [input, setIput] = useState("")
    const [shortened, setShortened] = useState("")
    const [validUrl, setValidUrl] = useState(true)


    const handleClick = async () => {
        if(validatorUrl(input)){
            setValidUrl(true)
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
        }else{
            setValidUrl(false)
        }

    }


    return(
        <>
            <section className='shorter_section'>
                
                <div className="shorter_wrapper">
                    
                    <input type="url"
                    className={validUrl ? "shorter_input" : "invalid_url"}
                    placeholder={validUrl ? "Shorten a link here..." : "Please add a Link"}
                    value={input}
                    onChange={(e)=>{setIput(e.target.value)}}
                    />
                    
                {loading ? <LoadingButton />:
                    <button 
                    className="shorter_button"
                    onClick={() => {
                        handleClick()
                    }}
                    >Shorten It!</button>}

                </div>
                
                
                <div className='shortened'>
                    <span>{input}</span>
                    <span>{shortened}</span>
                </div>
                
                
            </section>
        </>
    )
}