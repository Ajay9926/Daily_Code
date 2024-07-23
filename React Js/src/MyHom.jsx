import React, { useState } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'
import { Button } from 'react-bootstrap'
import useCustom from './useCustom'
import MyNewComp from './MyNewComp'

function MyHom() {
const [add,increment,decremnt] =useCustom(50)
 

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <Sidebar />
          </div>
          <div className="col py-3">
           <h1> {add} </h1>
            <Button onClick={increment}> Incremnt </Button>
            <Button onClick={decremnt}> decremnt </Button>
          </div>
          <div style={{marginLeft:'100px'}}>
          <MyNewComp />
          </div>  
        </div>
        
      </div>
      <Footer />

    </div>
  )
}

export default MyHom