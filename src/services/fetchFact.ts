interface Response {
    fact: string
    slicedFact: string
}

const FACT_API = "https://catfact.ninja/fact"

export async function fetchFact (): Promise<Response> {
    try {
        const response = await fetch(FACT_API)
        if(!response.ok) throw new Error(`Fail fetching data. Status: ${response.status}`)

        const data: Response = await response.json()
        
        const { fact } = data
        const slicedFact = fact.split(' ', 3).join(' ')

        return {
            fact,
            slicedFact
        }

    } catch (error) {
        console.error("Error fetching data: ", error)
        throw Error
    }
}