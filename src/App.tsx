import { useState } from 'react'
import './App.css'
import { fetchFact } from './services/fetchFact'
import { fetchImage } from './services/fetchImage'

export default function App () {

    const [ newFact , setNewFact ] = useState<string>()
    const [ newImgId , setNewImgId ] = useState<string>()
    const [ word , setWord ] = useState<string>()
 
    

    // useEffect(() => {
    const updateFact = async () => {

        // await fetchFact().then(setNewFact)
        const { fact, slicedFact } = await fetchFact()
        setNewFact(fact)
        setWord(slicedFact)

        if(newFact){
            await fetchImage({word}).then(setNewImgId)
        }
        // try {
            


        // } catch (error) {
            // throw error
        // }

        // const FACT_API = "https://catfact.ninja/fact"
        // const IMAGE_API = "https://cataas.com/cat"

        // fetch(FACT_API)
        //     .then(resp => resp.json())
        //     .then(data => {

        //         const fact = data.fact
        //         setNewFact(fact)            
        //         const newFactWord = fact?.split(' ', 3).join(' ')
        //         setWord(newFactWord)

        //         fetch(`${IMAGE_API}/says/${newFactWord}?json=true`)
        //             .then(resp => resp.json())
        //             .then(data => {
        //                 const { _id } = data
        //                 setNewImgId(_id)
        //             }
        //             )
        //     })
    }

    // }, [])

    const handleFact = () => {
        updateFact()
    }
    
    return (
        <div className='container'>
            
            <h1 className='title'>Techical Test</h1>

            <div className='content-container'>

                <button type='button' onClick={handleFact}>Generate Fact</button>

                    {(newFact) && (
                        <>
                            <p className='content-fact'>{newFact}</p>
                            <div className='content-img-container'>
                                <img className='content-img' src={`https://cataas.com/cat/${newImgId}/says/${word}?fontColor=red`} alt="cat image" />
                            </div> 
                        </>
                    )}
            </div>

        </div>
    )
}