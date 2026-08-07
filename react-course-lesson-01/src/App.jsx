import React from 'react';
// import ReactBasics01 from './lessons/lesson-01/ReactBasics01'
// import ReactBasics02 from './lessons/lesson-01/ReactBasics02'
// import Clock from './lessons/lesson-01/Clock';

// Chatbot
// import ChatInput from './lessons/lesson-03/ChatInput';
// import ChatMessages from './lessons/lesson-03/ChatMessages';

 

  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

// Exercise lesson 2
// import LoginForm from './lessons/lesson-02/exercies/LoginForm';
// import ProductDetails from './lessons/lesson-02/exercies/ProductDetails';

// Exercise lesson 3
// import Counter from './lessons/lesson-03/exercies/Counter';
// For DisplayAsYouType file from lesson 03
import DisplayAsYouType from './lessons/lesson-03/exercies/DisplayAsYouType';

import './App.css'

function App() {
  {/*============ Exercise lesson 03 ============ */}
  // Lifting the state up for Counter.jsx
  // const [count, setCount] = React.useState(0);


  // const [chatMessages, setChatMessages] = React.useState([{
  //   message: 'hello chatbot',
  //   sender: 'user',
  //   id: 'id1'
  // }, {
  //   message: 'Hello! How can I help you?',
  //   sender: 'robot',
  //   id: 'id2'
  // }, {
  //   message: 'can you get me todays date?',
  //   sender: 'user',
  //   id: 'id3',
  // }, {
  //   message: 'Today is September 27',
  //   sender: 'robot',
  //   id: 'id4'
  // }]); 

  return (
    <>
    {/*============ Latest ============ */}

    {/* <ReactBasics01 /> */}
    {/* <ReactBasics02 /> */}
    {/* <Clock /> */}

    {/*============ Exercise lesson 02 ============ */}

    {/* <LoginForm /> */}
    {/* <ProductDetails 
      productName="Cotton socks" 
      price={10.90} 
      isDiscount={true} 
      discountPrice={5.45} 
      imageSrc="./src/assets/cotton-socks.png" 
      imageAlt="Cotton Socks"
      />
    <ProductDetails 
      productName="Tennis balls" 
      price={6.00} 
      isDiscount={false} 
      imageSrc="./src/assets/tennis-balls.png" 
      imageAlt="Tennis Balls"
      />
    <ProductDetails 
      productName="Plain t-shirt" 
      price={7.99} 
      isDiscount={false} 
      imageSrc="./src/assets/plain-t-shirt.png" 
      imageAlt="Plain T-Shirt"
      /> */}

    {/*============ Exercise lesson 03 ============ */}

    {/* <Counter 
      count = {count}
      setCount = {setCount}
    />
    <Counter 
      count = {count}
      setCount = {setCount}
    />
    <Counter 
      setCount = {setCount}
      isReset = {true}
    /> */}

    {/* For DisplayAsYouType file from lesson 03 */}
    <DisplayAsYouType />
   
    {/*============ Latest ============ */}
  
    {/* <ChatInput 
      chatMessages = {chatMessages}
      setChatMessages = {setChatMessages} 
    />
    <ChatMessages 
      chatMessages = {chatMessages}
    /> */}
    </>
  )
}

export default App;
