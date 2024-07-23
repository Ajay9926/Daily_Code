import React, { useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'
import { Button } from 'react-bootstrap'
import useCustom from './useCustom'

function MyNewComp() {
const [add,increment,decremnt] =useCustom(20)
 

  return (
    <div>

          
          <div className="col py-3">
           <h1> {add} </h1>
            <Button onClick={increment}> Incremnt </Button>
            <Button onClick={decremnt}> decremnt </Button>
          </div>
     

    </div>
  )
}

export default MyNewComp