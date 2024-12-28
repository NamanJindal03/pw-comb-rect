import React from 'react'

export default function AnotherComp(props) {
    // console.log(props);
  return (
    <>
        <h1>This is the heading</h1>
        {props.children}
        <footer>this is my foot</footer>
    </>
  )
}
