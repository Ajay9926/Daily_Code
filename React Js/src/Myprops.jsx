import React from 'react'
import Comp_1 from './Comp_1'

function Myprops({data}) {
  return (
    <div style={{textAlign:'center'}}>
        <Comp_1 newData={data} />
        
        {/* <h1>
        Myprops
        </h1>
        <h1> Hello i am {props.data}  </h1>
        <h1> {props.mydata}  </h1>

        <button onClick={props.fun}  > Click Me</button>
        <>Valur of App Data = {props.state} </> */}

        
        </div>
  )
}

export default Myprops