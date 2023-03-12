import React from 'react';
import Header from '../components/resume-editor/Header';
import { useSelector } from 'react-redux';
import BasicDetails from '../components/resume-editor/forms/BasicDetails';
import Skills from '../components/resume-editor/forms/Skills';
import Education from '../components/resume-editor/forms/Education';
import Achievements from '../components/resume-editor/forms/Achievements';
import Experience from '../components/resume-editor/forms/Experience';
import ProfessionalSummary from '../components/resume-editor/forms/ProfessionalSummary';

function ResumeBuilder() {
  const state = useSelector((state) => state.header.headerState);

  function DisplayForm(state) {
    switch (state) {
      case 1:
        return <BasicDetails />;
      case 2:
        return <Skills />;
      case 3:
        return <ProfessionalSummary />;
      case 4:
        return <Experience />;
      case 5:
        return <Achievements />;
      case 6:
        return <Education />;
      default:
        return <BasicDetails />;
    }
  }

  return (
    <div className="resume-builder-container  flex ">
      <div className="left-container bg-red-50 w-3/5">
        <Header />
        <div className="w-full ">{DisplayForm(state)}</div>
      </div>
      <div className="right-container bg-blue-50 w-2/5 h-screen flex justify-center items-center ">
        {state}
      </div>
    </div>
  );
}

export default ResumeBuilder;
