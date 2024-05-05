import { useState } from 'react'
import { fetchFact } from '../services/fetchFact'
import { fetchImage } from '../services/fetchImage'

export function useGetFactCat () {
    
    const [ newFact , setNewFact ] = useState<string>()
    const [ newImgId , setNewImgId ] = useState<string>()
    const [ word , setWord ] = useState<string>()
    const [ isLoading , setIsLoading ] = useState<boolean>(false)

    const updateFactAndCat = async () => {
        try {
            setIsLoading(true)

            const { fact, slicedFact } = await fetchFact()
            setNewFact(fact)
            setWord(slicedFact)

            if(slicedFact){
                await fetchImage().then(setNewImgId)
            }

        } catch (error) {
            console.error('Error fetching data. ' , error)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        newFact,
        newImgId,
        word,
        isLoading,
        updateFactAndCat
    }
}