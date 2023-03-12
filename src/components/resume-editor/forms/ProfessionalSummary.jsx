import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  setProfessionalSummary,
  setSkillDetails,
  setState,
} from '../../../store/headerSlice';

function ProfessionalSummary() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setProfessionalSummary(data));
  };

  return (
    <div className="container flex flex-col justify-center w-full bg-red-400 items-center p-4 gap-8">
      <div className="section-name text-2xl font-mono font-bold ">
        Professional Summary{' '}
      </div>{' '}
      <div className="main-section w-4/5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className=" grid grid-cols-1  ">
            <textarea
              className="outline-none p-2  rounded-md  list-item"
              rows="3"
              placeholder="Professional Summary"
              {...register('professionalSummary')}
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-black text-white p-2 flex justify-center items-center"
              type="submit"
            />
            <button
              className="bg-black text-white p-2 flex justify-center items-center"
              onClick={() => dispatch(setState(4))}
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

export default ProfessionalSummary;
