import type { FactProp } from '../types'

export async function fetching (): Promise<FactProp> {

    const API: string = 'https://catfact.ninja/fact'
        
    try {
        const resp = await fetch(API)
        if(!resp.ok){
            throw new Error(`Error fetching data. Error: ${resp.status}`)
        }
        
        const fact = await resp.json()
        return fact

    } catch (error) {
        console.error('Error fetching data', error)
        throw error            
    }
    

}
