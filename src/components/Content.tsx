interface Props {
    word?: string
    newImgId?: string
    newFact?: string
}

export function Content ({ word , newImgId , newFact }: Props) {

    return(
        <>
            {(newFact && newImgId) && (
                <>
                    <p className='content-fact'>{newFact}</p>
                    <div className='content-img-container'>
                        <img className='content-img' src={`https://cataas.com/cat/${newImgId}/says/${word}?fontColor=red`} alt={newFact} />
                    </div> 
                </>
            )}
        </>

    )
}