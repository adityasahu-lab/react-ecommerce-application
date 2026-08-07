import { useState } from 'react';
// Chatbot
// import ChatInput from './lessons/lesson-04/ChatInput';
// import ChatMessages from './lessons/lesson-04/ChatMessages';

import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages'

// const [chatMessages, setChatMessages] = array;
// const chatMessages = array[0];
// const setChatMessages = array[1];

import './App.css';

function App() {
  // Lifting the state up
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3',
  }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: 'id4'
  }]); 

  return (
    <div className="app-container">
    {/*============ Latest ============ */}
    <ChatMessages 
      chatMessages = {chatMessages}
    />
    <ChatInput 
      chatMessages = {chatMessages}
      setChatMessages = {setChatMessages} 
    />
    </div>
  )
}

export default App;


// timestamp: 4: 27: 00