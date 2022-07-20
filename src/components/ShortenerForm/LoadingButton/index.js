import './styles.scss'


export function LoadingButton (){
    return(
        <>
            <button className='loading_button'>
                <div className='spinner'></div>
            </button>
        </>
    )
}