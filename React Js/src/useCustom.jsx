import {useState} from 'react'

function useCustom (value=0){
    const [add, setAdd]=useState(value)

    const increment =()=>{
      setAdd( add + 1 )
    }
    const decremnt =()=>{
      setAdd( add - 1 )
    }

    return [add,increment,decremnt]

}

export default useCustom