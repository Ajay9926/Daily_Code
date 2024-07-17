import React, { useState } from 'react'

import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom'
// import Header from './header/Header'
import Test from './Test'
import UseEffect from './UseEffect'
import Json from './Json'
import Home from './Home'
import Myprops from './Myprops'

function App() {

  const [data, setData]=useState(10);

  let student = 'pawan';

  const handelClick = (()=>{
    setData( data + 1);
    

  })

  return (

    <div>
      <h1 style={{textAlign:'center'}}> Value of my data is : {data} </h1>

      <Myprops data={student} />
      {/* <Myprops data={student} mydata="hello i am ajay" fun={handelClick} state={data} /> */}
    

      <Browser>
      <Routes>
        {/* <Route exact path='/' element={ <Header />  } /> */}
        <Route exact path='/test' element={ <Test />  } />
        <Route exact path='/useEff' element={ <UseEffect />  } />
        <Route exact path='/json' element={ <Json />  } />
        <Route exact path='/home' element={ <Home /> } />


      </Routes>
      </Browser>

    </div>
  )
}

export default App