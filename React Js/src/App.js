import React from 'react'

import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom'
// import Header from './header/Header'
import Test from './Test'
import UseEffect from './UseEffect'
import Json from './Json'

function App() {
  return (
    <div>
      <Browser>
      <Routes>
        {/* <Route exact path='/' element={ <Header />  } /> */}
        <Route exact path='/' element={ <Test />  } />
        <Route exact path='/useEff' element={ <UseEffect />  } />
        <Route exact path='/json' element={ <Json />  } />


      </Routes>
      </Browser>

    </div>
  )
}

export default App