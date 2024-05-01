import React from 'react'
import Background from './Background'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='fixed top-0 w-full h-full -z-50'>
        <Background/>
      </div>

    </div>
  )
}

export default App