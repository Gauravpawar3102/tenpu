import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  setEducation,
  setState,
  setWorkExperience,
} from '../../../store/headerSlice';

function Education() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setEducation(data));
  };
  return (
    <div className="container flex flex-col justify-center w-full bg-red-400 items-center p-4 gap-8">
      <div className="section-name text-2xl font-mono font-bold ">
        Education
      </div>{' '}
      <div className="main-section ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-1">
            <label
              className="pl-2 text-sm "
              htmlFor="programingLanguages"
            ></label>
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Institute Name"
              {...register('instituteName')}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="degree"
              {...register('degree')}
            />
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Grade in percentage"
              {...register('grade')}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Branch- Ex:computer science,Mechanical..."
              {...register('branch')}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Location"
              {...register('location')}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Start date"
              {...register(`startDate`)}
            />
            <input
              type="text"
              placeholder="End date"
              className="outline-none p-2  rounded-md"
              {...register(`endDate`)}
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

export default Education;
