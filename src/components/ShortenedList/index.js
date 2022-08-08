import { CopyButton } from './CopyButton'
import './styles.scss'

export function ShortenedList({userUrl}){

    return(
    <>            
    {userUrl.map(url => (
        <div key={url.urlInput} className='shortened'>
        <div className='content'>
            <span className='input_url'>
                <a 
                    href={url.urlInput}
                    target="_blank" 
                    rel="noreferrer"
                >
                {url.urlInput}
                </a>
                </span>
            <span className='shortened_url'>
                <a href={url.urlShortened}
                target="_blank" 
                rel="noreferrer"
                >
                {url.urlShortened}
                </a>
            </span>
       </div>
        <CopyButton urlShortened = {url.urlShortened} />
    </div>
    ))}
        
        
    </>
    )
}