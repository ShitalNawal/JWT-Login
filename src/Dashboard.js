import React from 'react'
import Header from './Components/Header/Header'

function Dashboard() {
  return (
    <main className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300  h-screen" >
      <Header/>
        <div className='   items-center font-bold  '>
        <div className=' text-teal-800 text-center text-2xl mt-8'> 
            Welcome to the Dashboard..!
        </div>
        </div>
    </main>
  )
}

export default Dashboard