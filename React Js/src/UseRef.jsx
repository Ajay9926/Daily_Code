import React, { useRef, useState } from 'react'

function UseRef() {
    const [state, setState]= useState('Hello')

    const refElement = useRef();
    console.log(refElement)

    const handelChange=(e)=>{
        setState(e.target.value)

    }

    const handelReset=(e)=>{
        e.preventDefault();
        setState('')
        refElement.current.style.backgroundColor='red'
    }

  return (
    <div>

        <form>
            <label>Name</label>
            <input 
            ref={refElement}
            type='text' 
            placeholder='Enter Your Name' 
            value={state} 
            onChange={handelChange}

            />
            <button onClick={handelReset} >Reset</button>

        </form>


    </div>
  )
}

export default UseRef