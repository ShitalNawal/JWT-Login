import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function About() {
  return (
    <main className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300  h-full w-full ">
      <Header />
      <div className=" text-teal-800  font-bold px-8 ">
        <img src="/profile-img.jpg" className="h-32 w-32 rounded-full  mt-4 " />
        <div className=" text-teal-800 font-bold  text-2xl mt-8">
          Shital Nawal
        </div>
        <h3> MERN Stack Developer</h3>
        <div>
          <p>Email - shitalnawl17@gmail.com</p>
          <p>Phone.No - +91 9767002335</p>
          <p>
            Github -
            <a
              href="https://github.com/ShitalNawal"
              className="underline underline-offset-1 text-blue-500"
            >
              https://github.com/ShitalNawal
            </a>
          </p>
          {/* <p>
            <a
              href="https://moderncoe.edu.in/"
              className="underline underline-offset-1 text-red-500"
            >
              PES Modern College Of Engineering Pune
            </a>
          </p> */}
          <hr className="mt-8" />
        </div>
        <div className="mt-4">
          <div>
            <h1 className="text-xl">Carrier Objective:</h1>
            <p className="pl-8">
              To obtain a fresher position as a software developer in a fast
              paced organization where my technical skills and creative thinking
              are useful.
            </p>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 mt-4">
          <div>
            <h1 className="text-xl">Education: </h1>
          </div>
          <table className="min-w-full divide-y divide-gray-200 mt-2">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Institute
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  University/Board
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage/CGPA
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year of Passing
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">BE IT</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  <a
                    href="https://moderncoe.edu.in/"
                    className="underline underline-offset-1 text-red-500"
                  >
                    PES Modern College Of Engineering Pune
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Savitribai Phule Pune University
                </td>
                <td className="px-6 py-4 whitespace-nowrap">8.95 CGPA</td>
                <td className="px-6 py-4 whitespace-nowrap">2023</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">HSC</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href="http://rayatshikshan.edu/"
                    className="underline underline-offset-1 text-red-500"
                  >
                    Rayat Shikshan Sanstha
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Maharashtra Board
                </td>
                <td className="px-6 py-4 whitespace-nowrap">77.85%</td>
                <td className="px-6 py-4 whitespace-nowrap">2019</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">SSC</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href="http://rayatshikshan.edu/"
                    className="underline underline-offset-1 text-red-500"
                  >
                    Rayat Shikshan Sanstha
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Maharashtra Board
                </td>
                <td className="px-6 py-4 whitespace-nowrap">92.00%</td>
                <td className="px-6 py-4 whitespace-nowrap">2017</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="mt-8" />
        <div className="mt-4">
          <div>
            <h1 className="text-xl">Skills: </h1>
          </div>
          <div className="flex">
            <div>
              <div>
                Technical Skills
                <div>
                  <table>
                    <tr>
                      <td>Java</td>
                      <td>⭐⭐⭐⭐</td>
                      <td className="pl-4">HTML</td>
                      <td>⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td>CSS</td>
                      <td>⭐⭐⭐⭐</td>
                      <td className="pl-4">Javascript</td>
                      <td>⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td>Node JS</td>
                      <td>⭐⭐⭐⭐</td>
                      <td className="pl-4"> Express JS</td>
                      <td>⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td>React JS</td>
                      <td>⭐⭐⭐⭐</td>
                      <td className="pl-4">Next JS</td>
                      <td>⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td>MYSQL</td>
                      <td>⭐⭐⭐⭐</td>
                      <td className="pl-4">Postgres</td>
                      <td>⭐⭐⭐⭐</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="pl-8">
              <div>
                Soft Skills
                <table>
                  <tr>
                    <td>Good Communication Skills.</td>
                  </tr>
                  <tr>
                    <td>
                      Fare knowledge of Computer and Laptop Hardware & Software.
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="pl-8">
              <div>
                Tools
                <table>
                  <tr>
                    <td>Visual Studio</td>
                  </tr>
                  <tr>
                    <td>Postman</td>
                  </tr>
                  <tr>
                    <td>Git</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="mt-4">
          <div>
            <h1 className="text-xl">Internships: </h1>
            <div>
              <h1 className="underline pt-4 text-red-500">
                <a href="https://assimilatetechnologies.com/">
                  Assimilate Technologies
                </a>
              </h1>
              <p className="text-sm">Pune, Maharashtra</p>
              <h1>Web Development Intern</h1>
              <p className="text-sm">August 2023 - Present</p>
              <p className="text-sm pl-8 list-disc">
                {" "}
                Worked on technologies: Node JS, Next JS, Typescript, Tailwind
                CSS, PostgreSQL database.{" "}
              </p>
            </div>
            <div className="pt-4">
              <h1 className="underline text-red-500">
                <a href="https://internshipstudio.com/"> Internship Studio</a>
              </h1>
              <p>Web Development Intern</p>
              <p className="text-sm">January 2022 – February 2022</p>
            </div>
          </div>
        </div>
        <hr className="mt-8" />
      </div>
      <Footer/>
    </main>
  );
}

export default About;
