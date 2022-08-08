import { useState } from "react"
import './styles.scss'


export function CopyButton ({urlShortened}){
    const [clicked, setClicked] = useState (false)

    const handleClick = () =>{
        setClicked(true)

        navigator.clipboard.writeText( urlShortened )

       const time = setTimeout(() =>{
            setClicked(false)
            clearTimeout(time)
        },2000)
    }
    return(
        <>
        <button 
        className = {clicked ? 'copy_button active' : 'copy_button'}
        onClick={() => handleClick()}>
                {clicked ? "Copied!" : "Copy"}
            </button>
        </>
    )
}