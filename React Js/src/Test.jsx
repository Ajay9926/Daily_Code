import React,{useEffect, useState} from 'react'
import record from './json/Data.json'

function Test() {

  const [data, setData]= useState(10);
  const [decrement, setDecrement]= useState(50)


  const {user} =record[0]
  const {userAge} =record[1]
  const {userInfo} =record[2]
  console.log(record)

  console.log(userAge)



  useEffect(()=>{
    console.log('My state is updated')
  },[data, decrement])

// function increment (){
//   setData(data + 1)
// }

  const increment =()=>{

    setData(data + 1)

  }

  const decrese =()=>{
    setDecrement(decrement - 1)
  }


  return (
    <div>
      <h1>Test </h1>

      <table>
        <tr>
          <th> Age </th>
          <th> Name </th>

        </tr>
        {
        userAge.map((value, index)=>{
          return(
            <tbody key={index}>
            <tr key={index}>
              <td> {value.age} </td>
              <td> {value.name} </td>
            </tr>
            </tbody>

          )
        })
      }


      </table>


    <select>
      <option>Select</option>
      {userAge && userAge.map((value, index)=>(

        <option key={index}> {value.age} </option>
        
        ) )}


    </select>

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
        <option>All Student</option>
          { user.map((value,index)=>(
            
            <option key={index}> {value.name} </option>

          ))}

      </select>


      <h1> {data} </h1>
    <button onClick={increment}>Increment</button>
    <h1> {decrement} </h1>
    <button onClick={decrese}>Decrement</button>
    </div> 
    </div>  
  )
}

export default Test