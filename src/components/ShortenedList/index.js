import './styles.scss'

export function ShortenedList({input, shortened}){
    return(
    <>            
        <div className='shortened'>
            <div className='content'>
                <span className='input_url'>{input}</span>
                <span className='shortened_url'>{shortened}</span>
           </div>
           <button className='copy_button'>Copy</button>
        </div>
        
    </>
    )
}