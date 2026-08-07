import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

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
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
      }>
      {sender === 'robot' && 
        (<img src={RobotProfileImage} width="50px" className="chat-message-profile"/>)}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && 
        (<img src={UserProfileImage} width="50px" className="chat-message-profile"/>)}
    </div>
  );
}

export default ChatMessage;