import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Footer from './footer/Footer'

function HomePage() {
  return (
    <div>
        <Header />
        <div className="container-fluid">
  <div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <Sidebar />
    </div>
    <div className="col py-3">
        <table border='2px'>
            <tr>
                <th>name</th>
                <th>name</th>
                <th>name</th>
                <th>name</th>
                <th>name</th>
                <th>name</th>
            </tr>
        </table>
        </div>
  </div>
</div>
        <Footer />
        
    </div>
  )
}

export default HomePage