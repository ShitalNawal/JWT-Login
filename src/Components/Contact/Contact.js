import React, { useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8880/addMessage", {
        name,
        email,
        message,
      });
      console.log(response.data, "response");
      alert("Message send successfully.");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <main className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300  h-screen w-screen relative">
      <Header />
      <img src="/bg.jpg" className="h-96 w-full absolute opacity-70 " />
      <div className="ms-96 rounded-3xl animate__animated animate__fadeInUp">
        <h1 className="pt-48 text-white text-5xl font-bold text-center drop-shadow-2xl transition-colors">
          <p className="ml-80 bg-cyan-600 text-center pt-5 w-1/2 rounded-t-lg">CONTACT</p>
        </h1>
        <h3 className="pt-4 mb-8 text-white text-2xl font-bold text-center drop-shadow-2xl bg-cyan-600 pb-5 w-1/2 ml-80 rounded-b-lg">Let's have a chat.</h3>
      </div>
      <div className="   items-center   ">
        <div className=" text-teal-800   mt-8">
          <div className="flex justify-between bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 pt-12 pb-12">
            <div className="ml-48">
              <div>
                <h1 className="text-4xl mt-6 font-bold">Contact Us</h1>
              </div>
              <div className="w-1/2">
                <p className="text-start w-full mt-4">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare.
                </p>
                
              </div>
              <div>
                <h1 className="text-xl font-bold">Address</h1>
                <p className="text-start w-full">
                  305, B-Wing, Aster Society, Wagholi, Pune, 412207{" "}
                </p>
                <p>Email - shitalnawl17@gmail.com</p>
                <p>Phone.No - +91 9767002335</p>
              </div>
            </div>

            <div className="mr-48 w-full">
              <div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="name" className="text-sky-900 font-bold">
                        Name:
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none bg-slate-50 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sky-900 font-bold">
                        Email address:
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none bg-slate-50 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                        placeholder="Enter Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sky-900 font-bold"
                      >
                        Add Message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        type="message"
                        autoComplete="message"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none bg-slate-50 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2 pb-8"
                        placeholder="Enter message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default Contact;
