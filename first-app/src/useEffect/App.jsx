import React, {useState, useEffect} from 'react'
import Child from './Child'

export default function App() {

    // const [counter, setCounter] = useState(10);
    const [newState, setNewState] = useState(true);
    //arr -> 0

    //mounting sitaution
    // useEffect(()=>{
    //     console.log('mount');
    //     //getting some answer from the api call
    //     setNewState([1,2,3,4,5,6]);
    // },[])

    // //updating part as well
    // useEffect(()=>{
    //     console.log('update');
    // },[newState, counter]) //as a depeneent state

    


  return (
    <>
        {console.log('this is my jsx')};
        <div>App</div>
        {/* {counter} */}
        {newState ? <Child /> : null}   
        {/* {newState.map((value, index)=>{
            return <div key={index}>{value}</div>
        })} */}
        

        <button onClick={()=>{setNewState(!newState)}}>display componet or not</button>
    </>
  )
}
