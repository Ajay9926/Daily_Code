import React, { createContext, useState } from 'react'
import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom'
// import Header from './header/Header'
import Test from './Test'
import UseEffect from './UseEffect'
import Json from './Json'
import Home from './Home'
import Child1 from './Child1'
// import Myprops from './Myprops'



let record =createContext()
let datas = createContext()
let myData = createContext()

function App() {

  const [data, setData]=useState(10);

  

  let student = 'pawan';

  let myName = 'ajay'

  let animal = 'lion'

  const handelClick = (()=>{
    setData( data + 1);
  })


  return (

    <div>
      <h1 style={{textAlign:'center'}}> Value of my data is : {data} </h1>
      
      <record.Provider value={student} >
        <datas.Provider value={myName} >
          <myData.Provider value={animal}>

        
      <Child1 />

      </myData.Provider>

      </datas.Provider>

      </record.Provider>

      {/* <Myprops data={student} /> */}
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
export {record, datas, myData};