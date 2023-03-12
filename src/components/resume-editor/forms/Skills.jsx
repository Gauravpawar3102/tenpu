import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setSkillDetails, setState } from '../../../store/headerSlice';

function Skills() {
  // const skillsState = useSelector((state) => state.header.skillDetails);
  // const basicDetails = useSelector((state) => state.header.basicDetails);

  // console.log({ skillsState, basicDetails });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const programingLanguages = data.programmingLanguages.split(',');
    const frameworks = data.frameworks.split(',');
    const tools = data.tools.split(',');
    const previousRoles = data.previousRoles.split(',');
    const technologies = data.technologies.split(',');
    data.programmingLanguages = programingLanguages;
    data.technologies = technologies;
    data.previousRoles = previousRoles;
    data.tools = tools;
    data.frameworks = frameworks;
    console.log(data);
    dispatch(setSkillDetails(data));
  };

  return (
    <div className="container flex flex-col justify-center w-full bg-red-400 items-center p-4 gap-8">
      <div className="section-name text-2xl font-mono font-bold ">
        Skills and Expertise
      </div>{' '}
      <div className="section-name text-md font-mono font-bold text-center">
        (Enter the skills in a comma (,) seperated instances )
      </div>
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
              placeholder="Programming Languages"
              {...register('programmingLanguages')}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Frameworks"
              {...register('frameworks')}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Previous Roles"
              {...register('previousRoles')}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="outline-none p-2  rounded-md"
              placeholder="Tools Ex-jira,git,..."
              {...register('tools')}
            />
            <input
              type="text"
              placeholder="Technologies"
              className="outline-none p-2  rounded-md"
              {...register('technologies')}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-black text-white p-2 flex justify-center items-center"
              type="submit"
            />
            <button
              className="bg-black text-white p-2 flex justify-center items-center"
              onClick={() => dispatch(setState(3))}
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

export default Skills;
