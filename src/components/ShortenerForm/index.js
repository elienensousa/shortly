import { useState } from 'react'
import axios from 'axios'
import './styles.scss'
import { LoadingButton } from './LoadingButton'
import validatorUrl from '../../util/validator'
import { ShortenedList } from '../ShortenedList'

export function ShortenerForm (){
    const [validUrl, setValidUrl] = useState(true)
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState([])
    const [input, setIput] = useState("")
    /*const [shortened, setShortened] = useState("")*/
    
    
    const handleClick = async () => {
        if(validatorUrl(input)){
            setValidUrl(true)
            try{
                setLoading(true)
                const response = await axios(
                    `https://api.shrtco.de/v2/shorten?url=${input}`
                )
                /*setShortened( response.data.result.full_short_link)*/
                
                setUrl([...url,{urlInput:input, urlShortened: response.data.result.full_short_link}])
                
                
                setIput("")
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
               
                <ShortenedList userUrl={url} />	    

                 
                
            </section>
        </>
    )
}