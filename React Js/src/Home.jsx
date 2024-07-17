import React from 'react'
import record from './json/newData.json'

function Home() {

    const { student, address, salary } = record;


  return (
    <div style={{textAlign:'center'}}>
        <h1>Home Page</h1>

        <table border='2px'>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Age </th>
                </tr>

            </thead>

            <tbody>
                {
                    student.map((value, index)=>{
                        return(
                            <tr>
                                <td> {value.name} </td>
                                <td> {value.age} </td>

                            </tr>
                        )
                    })
                }


            </tbody>




        </table>

        <table border='2px'>
            <thead>
                <tr>
                    <th> Sheher </th>
                    {/* <th> Age </th> */}
                </tr>

            </thead>

            <tbody>
                {
                    address.map((value, index)=>{
                        return(
                            <tr>
                                <td> {value.place} </td>
                                {/* <td> {value.age} </td> */}

                            </tr>
                        )
                    })
                }


            </tbody>




        </table>


        

    </div>
  )
}

export default Home