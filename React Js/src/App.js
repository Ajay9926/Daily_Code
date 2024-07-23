import React from 'react'
import UseMemo from './UseMemo'
import UseRef from './UseRef'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import MyDashboard from './MyDashboard'
import MyHom from './MyHom'
import MyNewComp from './MyNewComp'

function App() {
  return (
    <div>
      {/* <Header />
      <Sidebar />
      <Footer /> */}
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <HomePage /> } />
        <Route exact path='/dash' element={ <MyDashboard /> } />
        <Route exact path='/abc' element={ <MyHom /> } />

      </Routes>
      </BrowserRouter>

      {/* <UseRef /> */}

      {/* <UseMemo /> */}



    </div>
  )
}

export default App


// import React, { useCallback, useState } from 'react'
// import Callback from './Callback';

// function App() {
//   const [data, setData]=useState(0);
//   const [incre, setIncre]=useState(0);
//   // const [calculate, setCalculate]= useState(0)

//   const handelClick= useCallback(()=>{
//     console.log('Hello i am click function')
//     // setData( data * 2 )
//   },[data])
//   let fname = 'narayan'
  

//   return (
//     <>
//     <div>App</div>
//     {/* <h1> Hello i double the value : {calculate} </h1> */}
//     <Callback  fname={fname} fun={handelClick} />
//       <h1> {data} </h1>
//       <button onClick={()=>setData( data + 2 )} >Click</button>
//       {/* <button onClick={handelClick} > Double </button> */}
//       <h1>

//       {incre}
//       </h1>
//       <button onClick={()=>setIncre( incre -1 )} >Decrement</button>
//     </>
//   )
// }

// export default App



// import React, { createContext, useState } from 'react'
// import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom'
// // import Header from './header/Header'
// import Test from './Test'
// import UseEffect from './UseEffect'
// import Json from './Json'
// import Home from './Home'
// import Child1 from './Child1'
// // import Myprops from './Myprops'



// let record =createContext()
// let datas = createContext()
// let myData = createContext()

// function App() {

//   const [data, setData]=useState(10);

  

//   let student = 'pawan';

//   let myName = 'ajay'

//   let animal = 'lion'

//   const handelClick = (()=>{
//     setData( data + 1);
//   })


//   return (

//     <div>
//       <h1 style={{textAlign:'center'}}> Value of my data is : {data} </h1>
      
//       <record.Provider value={student} >
//         <datas.Provider value={myName} >
//           <myData.Provider value={animal}>

        
//       <Child1 />

//       </myData.Provider>

//       </datas.Provider>

//       </record.Provider>

//       {/* <Myprops data={student} /> */}
//       {/* <Myprops data={student} mydata="hello i am ajay" fun={handelClick} state={data} /> */}
    

//       <Browser>
//       <Routes>
//         {/* <Route exact path='/' element={ <Header />  } /> */}
//         <Route exact path='/test' element={ <Test />  } />
//         <Route exact path='/useEff' element={ <UseEffect />  } />
//         <Route exact path='/json' element={ <Json />  } />
//         <Route exact path='/home' element={ <Home /> } />


//       </Routes>
//       </Browser>

//     </div>
//   )
// }

// export default App
// export {record, datas, myData};