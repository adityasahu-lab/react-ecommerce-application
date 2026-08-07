import React from "react";

function DisplayAsYouType() {
  const [inputText, setInputText] = React.useState('');

  const resetValue = () => {
    setInputText('');
  }

  const setExampleText = () => {
    setInputText('Jay');
  };
  

  return (
    <>
      <input 
        type="text" 
        onChange={(e) => setInputText(e.target.value)} 
        value={inputText}
        placeholder="Type a name here"/>

      <button onClick={resetValue}>Reset</button>
      <button onClick={setExampleText}>Example</button>
      <p>Hello {inputText}</p>
     
    </>
    
  );
}

export default DisplayAsYouType;