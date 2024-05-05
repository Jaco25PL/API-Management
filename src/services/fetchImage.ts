const IMAGE_API = "https://cataas.com/cat"

export async function fetchImage () {
 
    try {
        const response = await fetch(`${IMAGE_API}?json=true`)    
        if(!response.ok) throw new Error(`Error fetching data. Status: ${response.status}`)

        const data = await response.json()
        const { _id: ID } = await data
        return ID    

    } catch (error) {
        console.error("Error fetching data", error)
        throw error
    }
}