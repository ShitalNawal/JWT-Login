import React from 'react'
import Header from './Components/Header/Header'

function Dashboard() {
  return (
    <main className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300  h-screen " >
      <Header/>
        <div className='   items-center font-bold  '>
        <div className=' text-teal-800 text-center font-sacramento mt-8 text-6xl '> 
        <img src='/cloud.svg' className='absolute top-24 right-24'/>
           <div>
           I'm Shital
           </div>
           <div className='text-2xl mt-4'>
            a Web Developer
           </div>
           <img src='/cloud.svg' className='inset-x-36 ml-44'/>
            <img src= '/mountain.svg' alt="mountain" className='h-1/2 w-3/4 ml-48' />
        </div>
        </div>
    </main>
  )
}

export default Dashboard