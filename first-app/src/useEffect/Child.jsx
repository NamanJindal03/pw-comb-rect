import React, { useEffect, useRef, useState } from 'react'

export default function Child() {
    const [counter, setCounter] = useState(10);
    const counterRef = useRef(counter);

    // useEffect(()=>{
    //     console.log('I am child');
    //     return ()=>{
    //         console.log('I am getting unmounted now')
    //     }
    // },[])
    useEffect(()=>{
        const timerId = setInterval(()=>{
            if(counterRef.current === 1){
                console.log('inentional');
                clearInterval(timerId)
                // return;
            }
            console.log('getting called')
            setCounter((prev)=>{return prev -1})
        },500)

        return ()=> clearInterval(timerId)
    },[])

    useEffect(()=>{
        counterRef.current = counter;
    },[counter])
    
    // useEffect(()=>{
    //     console.log('coming')
    //     const timerId = setTimeout(()=>{
    //         setCounter((prev)=>{
    //             console.log(prev)
    //             return prev -1
    //         })
    //     },500)

    //     return ()=> clearTimeout(timerId)
    // },[counter])
  return (
    <>
        <div>Child: {counter}</div>
    </>
  )
}
