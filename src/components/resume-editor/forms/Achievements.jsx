import React from 'react';
import { setAchievements } from '../../../store/headerSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Achievements() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setAchievements(data));
  };
  return (
    <div className="container flex flex-col justify-center w-full bg-red-400 items-center p-4 gap-8">
      <div className="section-name text-2xl font-mono font-bold ">
        Achievements
      </div>{' '}
      <div className="main-section ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="title"
              {...register('title')}
            />
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="date"
              {...register('date')}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Organization Name"
              {...register('organizationName')}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <input
              className="bg-black text-white p-2 flex justify-center items-center"
              type="submit"
            />
            {/* <button
              className="bg-black text-white p-2 flex justify-center items-center"
              onClick={() => dispatch(setState(6))}
            >
              Next
            </button> */}
          </div>
        </form>
      </div>
      <div className="bottom-section">.</div>
    </div>
  );
}

export default Achievements;
