function ChatMessage({message, sender}) {
  // const message = props.message;
  // const sender = props.sender;
  //const {message, sender} = props;

  // if (sender === "robot") {
  //   return (
  //     <div>
  //       <img src="./src/assets/robot.png" width="50px"/>
  //       {message}
  //     </div>
  //   );
  // }

  return (
    <div>
      {sender === 'robot' && 
        (<img src="./src/assets/robot.png" width="50px"/>)}
      {message}
      {sender === "user" && 
        (<img src="./src/assets/user.png" width="50px"/>)}
    </div>
  );
}

export default ChatMessage;