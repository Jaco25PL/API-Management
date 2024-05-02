import { useState } from 'react'
import './App.css'
import type { FactProp } from './types'
import { fetching } from './helpers/factData'



export default function App () {

    const [ newFact , setNewFact ] = useState<FactProp>()

    const handleFact = async () => {
        await fetching().then(setNewFact)
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