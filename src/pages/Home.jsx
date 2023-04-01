import React, { useState } from 'react';
import { useResumeDetailsQuery } from '../services/resumeApi';

function Home(id) {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:5000', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ message }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setResponse(data.message));
  // };
  const { data, error, isLoading, isFetching, isSuccess } =
    useResumeDetailsQuery('6417137389a326c6eae7ee7a');
  return (
    <div className="home-container bg-red-50 flex flex-col  ">
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>Fetching</h2>}
      {error && <h2>something went wrong</h2>}
      {isSuccess && (
        <>
          {/* {data?.map((resume) => {
            return (
              <div className="">
                <div className="">{resume.name}</div>
              </div>
            );
          })} */}
          {JSON.stringify(data.basicDetails.fullName, undefined, 2)}
        </>
      )}

      {/* <form className="flex p-4 flex-col items-center" onSubmit={handleSubmit}>
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
      </form> */}

      {/* <div className="response">{response}</div> */}
    </div>
  );
}

export default Home;
