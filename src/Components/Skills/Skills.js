import React from "react";
import Header from "../Header/Header";

function Skills() {
  return (
    <main className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 h-full relative">
      <Header />
      <img src="/bg.jpg" className="h-96 w-full absolute opacity-70 " />
      <div className="ms-96 rounded-3xl animate__animated animate__fadeInUp">
        <h1 className="pt-48 text-white text-5xl font-bold text-center drop-shadow-2xl transition-colors">
          <p className="ml-80 bg-cyan-600 text-center pt-5 w-1/2 rounded-t-lg">MY SKILLS</p>
        </h1>
        <h3 className="pt-4 mb-8 text-white text-2xl font-bold text-center drop-shadow-2xl bg-cyan-600 pb-5 w-1/2 ml-80 rounded-b-lg">Skills speak louder than words.</h3>
      </div>
      <div className="text-teal-800 text-4xl text-center pt-10 font-bold underline">Skills</div>
      <div className="ms-9 mt-10 pt-4">
        <div className="flex flex-wrap">
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
    </main>
  );
}

const SkillItem = ({ name, percentage }) => {
  return (
    <div className="w-1/4 mb-8">
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

export default Skills;
