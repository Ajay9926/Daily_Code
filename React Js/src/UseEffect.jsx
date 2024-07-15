import React,{useEffect, useState} from 'react'
import record from './json/Data.json'

function UseEffect() {

  const [data, setData]= useState(10);
  const [decrement, setDecrement]= useState(50)


// function increment (){
//   setData(data + 1)
// }

  const increment =()=>{

    setData(data + 1)

  }

  const decrese =()=>{
    setDecrement(decrement - 1)
  }


  return (
    <div>
      <h1>UseEffect </h1>
    <div>
      <h1> {data} </h1>
    <button onClick={increment}>Increment</button>
    <h1> {decrement} </h1>
    <button onClick={decrese}>Decrement</button>
    </div> 
    </div>  
  )
}

export default UseEffect