import React, { useState } from 'react'
import "./app.css"
import data from"./data"
import Question from './component/Question'


const App = () => {

  const[questions]=useState(data);
  return (
    <main className='main'>

      <div className='container'>
        <h3>Frequently Asked Question(FAQ)</h3>

        <section className='info'>
          {questions.map((question)=>{
            return <Question key={question.id}
            {...question}/>

          })}
        </section>
      </div>
      </main>
  )
}
export default App