const IMAGE_API = "https://cataas.com/cat"

interface Props {
    word?: string
    newImgId?: string
    newFact?: string
    isLoading: boolean
}

export function Content ({ word , newImgId , newFact, isLoading }: Props) {

    return(
        <main>
            {
                isLoading ? 'Loading...' : (
                (newFact && newImgId) && (
                    <div>
                        <p className='content-fact'>{newFact}</p>
                        <div className='content-img-container'>
                            <img className='content-img' src={`${IMAGE_API}/${newImgId}/says/${word}?fontColor=red`} alt={newFact} />
                        </div> 
                    </div>
                ))
            }

        </main>

    )
}