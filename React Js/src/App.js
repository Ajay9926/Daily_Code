import React from 'react'

import {BrowserRouter as Browser, Route, Routes} from 'react-router-dom'
import Header from './header/Header'
import Test from './Test'

function App() {
  return (
    <div>
      <Browser>
      <Routes>
        <Route exact path='/' element={ <Header />  } />
        <Route exact path='/login' element={ <Test />  } />


      </Routes>
      </Browser>

    </div>
  )
}

export default App