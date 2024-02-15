import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8880/getMessage')
      .then(response => response.json())
      .then(data => {
        setMessages(data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []); 

  return (
    <main className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 h-full w-screen">
      <Header />
      <div className="container mx-auto text-teal-800  mt-8 pb-48">
        <h1 className="text-2xl font-bold mb-4">Notifications: </h1>
        <div className="grid grid-cols-2 gap-4">
          {messages.map(message => (
            <div key={message.id} className="bg-white p-4 shadow rounded-md">
              <div className="flex justify-between">
                <h3 className="font-bold">Name: {message.name}</h3>
                <h3 className="font-bold text-red-400">Email: {message.email}</h3>
              </div>
              <div className="mt-2">
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  );
}

export default Messages;
