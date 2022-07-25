import './styles.scss'

export function ShortenedList({userUrl}){
    return(
    <>            
    {userUrl.map(url => (
        <div key={url.urlInput} className='shortened'>
        <div className='content'>
            <span className='input_url'>{url.urlInput}</span>
            <span className='shortened_url'>{url.urlShortened}</span>
       </div>
       <button className='copy_button'>Copy</button>
    </div>
    ))}
        
        
    </>
    )
}