import React from 'react'
import record from './json/Data.json'

function Json() {

  const {user} =record[0]


//   useEffect(()=>{
//     console.log('My state is updated')
//   },[data, decrement])



  return (
    <div>
      <h1>Json </h1>
    <div>
    <table border='2px solid black'>
      <tbody>
      <tr>
        <th>Name</th>
      </tr>
      </tbody>
      {
        user.map((value, index)=>{
          return(
            <tbody key={index}>
            <tr key={index}>
              <td> {value.name} </td>
            </tr>
            </tbody>

          )
        })
      }

    </table>

      <select>
        <option>All Student</option>(
          {
        record.map((value,index)=>{
          return(
            <option key={index}> {value.name} </option>
          )
        })
       }

        )

      </select>
    </div> 
    </div>  
  )
}

export default Json