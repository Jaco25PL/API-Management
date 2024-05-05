import './App.css'
import { Content } from './components/Content'
import { useGetFactCat } from './hooks/useGetFactCat'

export default function App () {

    const { newFact , newImgId , word , isLoading , updateFactAndCat } = useGetFactCat()

    const handleCat = () => {
        updateFactAndCat()   
    }
    
    return (
        <section className='container'>
            
            <h1 className='title'>Techical Test</h1>

            <div className='content-container'>
                <button className='btn' type='button' onClick={handleCat}>Generate Fact</button>

                <Content word={word} newFact={newFact} newImgId={newImgId} isLoading={isLoading} />
            </div>

        </section>
    )
}