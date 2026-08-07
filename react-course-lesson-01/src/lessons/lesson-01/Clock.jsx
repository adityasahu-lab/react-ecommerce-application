function Clock() {

  
  const time = new Date();

  // Get Date
  const date = time.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    // year: 'numeric',
  });

  console.log(date);

  // Get Current Time
  const currentTime = time.toLocaleTimeString();

    
  return (
    <>

    <p>Today is {date}</p>

    <p>Current Time: {currentTime}</p>

    </>
  )
}

export default Clock;