import { useEffect, useState } from 'react'
import DisplayQuotes from './DisplayQuotes';

const FetchQuotes = () => {
    const [quotes, setQuotes] = useState('');

    const fetchQuotes = async() =>{
        try{
            const url = 'https://api.quotable.io/quotes/random';
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Response was not ok' + response.statusText)
            }
            const data = await response.json();
            setQuotes(data);
        }
        catch(error){
            console.log('Error on fetch', error);
        }
    }

    useEffect(() =>{     
        fetchQuotes();
    },[]);
    
  return (
    <div>
        <DisplayQuotes quotes={quotes} fetchQuotes={fetchQuotes} />
    </div>
  )
}

export default FetchQuotes