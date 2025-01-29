import React from 'react'
import Spinner from './spinner'

export default function SpinnerScreen() {
  return (
    <div className='flex items-center justify-center h-full '>
      <Spinner size='large'/>
    </div>
  )
}
