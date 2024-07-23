import React, { memo } from 'react'

function Callback() {
    console.log('hello i am callback component')
  return (
    <>
    </>
  )
}

export default memo(Callback)