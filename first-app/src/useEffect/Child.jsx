import React, { useEffect } from 'react'

export default function Child() {
    // useEffect(()=>{
    //     console.log('I am child');
    //     return ()=>{
    //         console.log('I am getting unmounted now')
    //     }
    // },[])
  return (
    <div>Child</div>
  )
}
