import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setBasicDetails, setState } from '../../../store/headerSlice';

function BasicDetails() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const optimizeAboutme = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/optimizers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setBasicDetails(data));
  };

  return (
    <div className="container flex flex-col justify-center w-full bg-red-400 items-center p-4 gap-8">
      <div className="section-name text-2xl font-mono font-bold ">
        Basic Details
      </div>
      <div className="main-section ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {/* <div className="flex gap-4 flex-wrap"> */}

            <input
              type="text"
              className="outline-none p-2  rounded-md "
              placeholder="Full Name"
              {...register('fullName')}
            />
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Email"
              {...register('email')}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Title"
              {...register('title')}
            />
            <input
              type="text"
              placeholder="Website URL"
              className="outline-none p-2  rounded-md"
              {...register('websiteUrl')}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Phone"
              {...register('phone')}
            />
            <input
              type="text"
              placeholder="Location"
              className="outline-none p-2  rounded-md"
              {...register('location')}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Total Work Experience in years"
              {...register('totalWorkExperience')}
            />
            {/* <input
              type="text"
              placeholder="Email"
              className="outline-none p-2  rounded-md"
              {...register('')}
            /> */}
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="LinkedIn URL"
              {...register('linkedinUrl')}
            />
          </div>
          <textarea
            className="outline-none p-2  rounded-md"
            rows="3"
            placeholder="About me"
            {...register('aboutMe')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          optimized:{response}
          <button className="bg-black text-white p-1" onClick={optimizeAboutme}>
            optimize with ai
          </button>
          <textarea
            className="outline-none p-2  rounded-md"
            rows="3"
            placeholder="Career objective"
            {...register('careerObjective')}
          ></textarea>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-black text-white p-2 flex justify-center items-center"
              type="submit"
            />
            <button
              className="bg-black text-white p-2 flex justify-center items-center"
              onClick={() => dispatch(setState(2))}
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <div className="bottom-section">.</div>
    </div>
  );
}

export default BasicDetails;
