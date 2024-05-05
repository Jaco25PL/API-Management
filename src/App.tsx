import './App.css'
import { useState } from 'react'
import { fetchFact } from './services/fetchFact'
import { fetchImage } from './services/fetchImage'
import { Content } from './components/Content'

export default function App () {

    const [ newFact , setNewFact ] = useState<string>()
    const [ newImgId , setNewImgId ] = useState<string>()
    const [ word , setWord ] = useState<string>()
    const [ isLoading , setIsLoading ] = useState<boolean>(false)
 
    const updateFact = async () => {

        try {
            setIsLoading(true)

            const { fact, slicedFact } = await fetchFact()
            setNewFact(fact)
            setWord(slicedFact)

            if(slicedFact){
                await fetchImage({word}).then(setNewImgId)
            }

        } catch (error) {
            console.error('Error fetching data. ' , error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleFact = () => {
        updateFact()
    }
    
    return (
        <section className='container'>
            
            <h1 className='title'>Techical Test</h1>

            <div className='content-container'>
                <button type='button' onClick={handleFact}>Generate Fact</button>

                <Content word={word} newFact={newFact} newImgId={newImgId} isLoading={isLoading} />
            </div>

        </section>
    )
}