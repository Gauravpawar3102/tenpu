import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setState, setWorkExperience } from '../../../store/headerSlice';

function Experience() {
  const workExperience = useSelector((state) => state.header.workExperience);
  console.log(workExperience);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companiesList: [
        {
          companyName: '',
          position: '',
          startDate: '',
          currentJob: false,
          endDate: '',
          years: '',
          points: [''],
        },
      ],
    },
  });
  const { fields, append, prepend, remove } = useFieldArray({
    name: 'companiesList',
    control,
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setWorkExperience(data));
  };

  return (
    <div className="container flex flex-col justify-center w-full bg-red-400 items-center p-4 gap-8">
      <div className="section-name text-2xl font-mono font-bold ">
        Enter your Work experience
      </div>

      <div className="main-section ">
        {fields.map((field, index) => (
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            key={field.id}
          >
            <div className="companyNumber text-2xl capitalize font-mono font-semibold">
              {' '}
              company {index + 1}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="outline-none p-2  rounded-md"
                placeholder="Company name"
                {...register(`companiesList.${index}.companyName`)}
              />
              <input
                type="text"
                className="outline-none p-2  rounded-md"
                placeholder="Position/Role"
                {...register(`companiesList.${index}.position`)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="outline-none p-2  rounded-md"
                placeholder="Start date"
                {...register(`companiesList.${index}.startDate`)}
              />
              <input
                type="text"
                placeholder="End date"
                className="outline-none p-2  rounded-md"
                {...register(`companiesList.${index}.endDate`)}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Years worked"
                className="outline-none p-2  rounded-md"
                {...register(`companiesList.${index}.years`)}
              />
              <textarea
                type="text"
                placeholder="few points on this work experience"
                className="outline-none p-2  rounded-md"
                {...register(`companiesList.${index}.points`)}
              ></textarea>
            </div>
            <div
              className="addCompany bg-black text-white p-2 flex justify-center items-center mb-2 cursor-pointer"
              onClick={() => {
                remove(index);
              }}
            >
              Remove
            </div>
          </form>
        ))}

        <div
          className="addCompany bg-black text-white p-2 flex justify-center items-center cursor-pointer"
          onClick={() => {
            append();
          }}
        >
          Add More
        </div>
      </div>
      <div className="bottom-section">
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-black text-white p-2 flex justify-center items-center"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
          <button
            className="bg-black text-white p-2 flex justify-center items-center"
            onClick={() => dispatch(setState(5))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
