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

function App() {
  return (
    <>
      <h1>My Card Section</h1>
      {/* {Card('Explore more from Small Businesses')}
      {Card('Revamp your home in style')}
      {Card('Appliances for your home | Up to 55% off')}
      {Card('Starting ₹149 | Headphones')} */}
      {
        cardHeadings.map((cardDetail)=>{
          return <>
            <Card heading={cardDetail.heading} text={cardDetail.text}/>
          </>
        })
      }

      {/* <Card heading={cardHeadings[0]} text='a'/>
      <Card heading={cardHeadings[1]}/>
      <Card heading={cardHeadings[2]}/>
      <Card heading={cardHeadings[3]}/>
      <Card heading={cardHeadings[4]}/>
      <Card heading={cardHeadings[5]}/> */}
    </>
  )
}


/* 
  difference between component and function?

  A function which returns JSX is a component
*/

export default App
