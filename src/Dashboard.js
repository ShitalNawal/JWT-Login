import React from 'react'
import Header from './Components/Header/Header'
import Skills from './Components/Skills/Skills'
function Dashboard() {
  return (
    <main className="relative bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 h-screen">
      <Header/>
      <div className='flex flex-col items-center justify-center h-full text-center font-bold'>
        <div className='text-teal-800 font-sacramento text-6xl relative z-10 leading-tight'> 
          <div className='relative'>I'm <span className="text-rose-600">Shital</span></div>
          <div className='text-2xl mt-4 relative'>a <span className="text-rose-600">Web Developer</span></div>
        </div>
        <img src= '/bg-main.jpg' alt="mountain" className='absolute inset-0 object-cover w-full h-full opacity-70 z-0' />
      </div>
    </main>
  )
}


export default Dashboard
