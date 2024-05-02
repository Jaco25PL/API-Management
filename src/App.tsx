import { useEffect, useState } from 'react'
import './App.css'
import type { FactProp } from './types'
import { fetching } from './helpers/factData'



export default function App () {

    const [ newFact , setNewFact ] = useState<FactProp>()
    const [ firstWord , setFirstWord ] = useState<string>()

    const handleFact = async () => {    

        await fetching().then(setNewFact)
        setFirstWord(newFact?.fact.split(' ')[0]) 
        //try do this in the fetch AND FETCH THE IMAGE THEN BELLOW
    
        // Maby we could do a try/catch here and then call to the second fetch passing the prop and seting
        // the data to a new state
    }

    
    

    return (
        <div className='container'>
            
            <h1 className='title'>Techical Test</h1>

            <div className='content-container'>

                <button type='button' onClick={handleFact}>Generate Fact</button>

                <p className='content-fact'>{newFact?.fact}</p>
                <div className='content-img-container'>
                    <img className='content-img' src="mock-car.avif" alt="cat image" />
                </div>
            </div>

        </div>
    )
}