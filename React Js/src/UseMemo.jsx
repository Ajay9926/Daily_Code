import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [increment, setIncrement]= useState(0);
    const [decrement, setDecrement]= useState(5);


    const handelIncrement=()=>{
        setIncrement(increment + 1 )
    }

    const handelDecrement=()=>{
        setDecrement(decrement - 1 )
    }

    const handelDouble = useMemo(()=>{
        console.log('helloooo')
        return increment * 2
    }, [increment])
    // handelDouble()


  return (
    <div>
        {handelDouble} <br />
        {increment}
        <button onClick={handelIncrement} >Increment</button>
        {decrement}
        <button onClick={handelDecrement} >Decrement</button>


    </div>
  )
}

export default UseMemo