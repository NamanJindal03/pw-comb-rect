import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import './App.css'

// const cardHeadings = ['Explore more from Small Businesses', 'abcd', 'def', 'mng', 'a', 'b', 'ee', 'pp', 'ffff']
const cardHeadings = [
  {heading: 'Explore more from Small Businesses', text: 'a'},
  {heading: 'Explore more a', text: 'b'},
  {heading: 'Explore more b', text: 'c'}
]

// let counter2 = 0;

function App() {
  console.log('will it get rerendered?????? - Part 2')

  console.log(useState('naman'))
  const [counter, l] = useState(0); //no it wont give an error 
   //ref -> ref solves the problem of changing value upon rerender 

  return (
    <>
      {console.log('will it get rerendered?????? - Part 3')}
      <h1>My Card Section</h1>
      {
        cardHeadings.map((cardDetail)=>{
          return <>
            <Card heading={cardDetail.heading} text={cardDetail.text} count={counter}/>
          </>
        })
      }
      <div>
        {counter}
        <div>
          {/* <button onClick={()=> {counter= counter -1}}>minus</button> */}
          <button onClick={()=> {console.log('clicked');l(counter)}}>plus</button>

        </div>

        <h1>COunter 2 section</h1>
        {/* <div>
        {counter2}
          <button onClick={()=> {console.log(counter2); counter2= counter2 -1}}>minus</button>
          <button onClick={()=> {counter2= counter2 +1}}>plus</button>
        </div> */}
      </div>
    </>
  )
}


/* 
  difference between component and function?

  A function which returns JSX is a component
*/

export default App
