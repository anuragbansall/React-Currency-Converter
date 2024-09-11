import React, { useState } from 'react'
import { CurrencyConverter } from './components'

function App() {

  return (
    <div className='relative overflow-hidden h-screen w-full bg-zinc-800 text-zinc-300'>
        <video src="https://cdn.pixabay.com/video/2020/01/14/31251-385265625_tiny.mp4" className='w-full h-full object-cover' autoPlay muted loop />
        <div className='absolute px-4 overflow-y-auto overflow-x-hidden h-full w-full top-0 left-0 flex justify-center items-center bg-[#000000a0]'>
          <CurrencyConverter />
        </div>
    </div>
  )
}

export default App