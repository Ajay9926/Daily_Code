import React, { useCallback, useState } from 'react'
import Callback from './Callback';

function UseCallback() {
  const [data, setData]=useState(0);
  const [incre, setIncre]=useState(0);
  // const [calculate, setCalculate]= useState(0)

  const handelClick= useCallback(()=>{
    console.log('Hello i am click function')
    // setData( data * 2 )
  },[data])
  let fname = 'narayan'
  

  return (
    <>
    <div>UseCallback</div>
    {/* <h1> Hello i double the value : {calculate} </h1> */}
    <Callback  fname={fname} fun={handelClick} />
      <h1> {data} </h1>
      <button onClick={()=>setData( data + 2 )} >Click</button>
      {/* <button onClick={handelClick} > Double </button> */}
      <h1>

      {incre}
      </h1>
      <button onClick={()=>setIncre( incre -1 )} >Decrement</button>
    </>
  )
}

export default App