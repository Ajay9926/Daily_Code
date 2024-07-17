import React from 'react'
import Comp_2 from './Comp_2'

function Comp_1({newData}) {
  return (
    <div>
        <Comp_2 myData={newData} />


    </div>
  )
}

export default Comp_1