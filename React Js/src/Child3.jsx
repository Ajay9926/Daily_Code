
import React, { useContext } from 'react'
import {record, datas, myData} from './App'

function Child3() {

    let vol = useContext(record);
    let can = useContext(datas);
    let us = useContext(myData);
  return (
    <div>
        <h1> Hllo my name is {vol} </h1>
                                   <h1>and my friend name is {can}</h1>
                                    <h1>and my dog name is {us}</h1>



    </div>
  )
}

export default Child3



// import React from 'react'
// import {record, datas, myData} from './App'

// function Child3() {
//   return (
//     <>

//     <record.Consumer>
//         {
//             (student)=>{
//                 return(
//                     <datas.Consumer>
//                         {
//                             (myName)=>{
//                                 return(
//                                     <myData.Consumer>
//                                         {
//                                             (animal)=>{
//                                                 return(
//                                                     <>
//                                     <h1> Hllo my name is {student} </h1>
//                                     <h1>and my friend name is {myName}</h1>
//                                     <h1>and my dog name is {animal}</h1>
//                                     </>
                                                    

//                                                 )
//                                             }
//                                         }


//                                     </myData.Consumer>
//                                     // <>
//                                     // <h1> Hllo my name is {student} </h1>
//                                     // <h1>and my friend name is {myName}</h1>
//                                     // </>
//                                 )
//                             }
//                         }
//                     </datas.Consumer>

//                     // <h1>My name is {student} </h1>
//                 )
//             }
//         }

//     </record.Consumer>

//     </>
//   )
// }

// export default Child3