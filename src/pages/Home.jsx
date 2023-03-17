import React, { useState } from 'react';

function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="home-container bg-red-50 flex flex-col  ">
      <form className="flex p-4 flex-col items-center" onSubmit={handleSubmit}>
        {}
        <textarea
          cols="50"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className=" m-2 text-white bg-sky-400 p-2">
          Submit
        </button>
      </form>

      <div className="response">{response}</div>
    </div>
  );
}

export default Home;
