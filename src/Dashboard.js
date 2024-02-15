import React from 'react';
import Header from './Components/Header/Header';

import { Link } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const SkillItem = ({ name, percentage }) => {
  return (
    <div className="w-1/4 mb-8 ">
      <div className="flex items-center mb-2">
        <div className="w-4 h-4 bg-cyan-800 rounded-full mr-2"></div>
        <p className="text-lg">{name}</p>
      </div>
      <div className="relative h-4 rounded-full bg-gray-200 ml-2">
        <div className="absolute left-0 top-0 h-full bg-cyan-800 rounded-full " style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="mt-1 text-sm text-gray-600">{percentage}%</p>
    </div>
    
  );
  
};

function Dashboard() {
  return (
    <main className=" h-screen relative">
      <Header/>
     
        <div className='flex flex-col items-center justify-center h-full text-center font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 '>
          <div className='text-teal-800 font-sacramento text-6xl relative z-10 leading-tight'> 
            <div className='relative'>I'm <span className="text-rose-600">Shital</span></div>
            <div className='text-2xl mt-4 relative'>a <span className="text-rose-600">Web Developer</span></div>
            <Link to="/contact">
  <button
    type="submit"
    className="group relative w-1/2   mt-2 py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 "
  >
    Contact me
  </button>
</Link>
          </div>
          
          <img src= '/bg-main.jpg' alt="mountain" className='absolute inset-0 object-cover w-full h-screen opacity-70 z-0 ' />
        </div>
        <div className="text-rose-600 text-4xl text-center pt-4 font-bold underline bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300">Skills</div>
        <div className='bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300'>
        <div className="ms-9  pt-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300">
          <div className="flex flex-wrap ">
            <SkillItem name="Git" percentage={80} />
            <SkillItem name="Java" percentage={70} />
            <SkillItem name="HTML" percentage={75} />
            <SkillItem name="CSS" percentage={70} />
            <SkillItem name="Javascript" percentage={75} />
            <SkillItem name="Node JS" percentage={60} />
            <SkillItem name="Express JS" percentage={70} />
            <SkillItem name="React JS" percentage={70} />
            <SkillItem name="Next JS" percentage={75} />
            <SkillItem name="MYSQL" percentage={80} />
          </div>
        </div>
        </div>
        <Footer/>
    </main>
    
  );
}

export default Dashboard;
