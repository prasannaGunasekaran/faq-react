import React,{useState} from 'react'
import { FaPlusCircle,FaMinusCircle} from 'react-icons/fa';


const Question = ({id,question,answer}) => {

    const[showInfo,setShowInfo]=useState(false);
  return (
<article className='question'>
    <header className='header'>
   <h4>{question}</h4>
   
   {showInfo && <p>{answer}</p>}

    </header>
    
    <button type='button' className='btn' onClick={()=>setShowInfo(!showInfo)}>
        {showInfo ? <FaMinusCircle />:<FaPlusCircle /> }</button>

      </article>  ) 
}

export default Question