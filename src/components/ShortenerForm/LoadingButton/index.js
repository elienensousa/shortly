import './styles.scss'


export function LoaLoadingButton (){
    return(
        <>
            <button className='loading_button'>
                <div className='spinner'></div>
            </button>
        </>
    )
}