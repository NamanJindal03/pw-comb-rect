import React from 'react'
import AnotherComp from './AnotherComp'

export default function App() {
  return (
    <div>

        <AnotherComp>
            <div className='anotheranother'>
                <span>abcd</span>
            </div>
        </AnotherComp>
        <AnotherComp>
            <ul>
                <li>this is li</li>
                <li>this is li</li>
                <li>this is li</li>
                <li>this is li</li>
                <li>this is li</li>
                <li>this is li</li>
            </ul>
        </AnotherComp>
    </div>
  )
}
