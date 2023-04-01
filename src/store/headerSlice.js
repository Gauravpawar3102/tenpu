import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const basicDetails = {
  fullName: '',
  email: '',
  location: '',
  phone: '',
  urls: {
    urlName: '',
    url: '',
  },
};
const totalWorkExperience = null;
const summary = '';
const skills = [];
const careerObjective = '';

const companyDetails = {
  title: '',
  companyName: '',
  startDate: '',
  endDate: '',
  location: {
    city: '',
    country: '',
  },
  workSummary: '',
};
const projectDetails = {
  title: '',
  projectSummary: '',
  projectDate: '',
  projectUrl: '',
};
const educationDetails = [
  {
    degree: '',
    instituteName: '',
    branch: '',
    startDate: '',
    endDate: '',
    location: '',
    gpa: '',
  },
];
const certificationDetails = [
  {
    certificateName: ' ',
    certificateProvider: '',
    certificateDate: '',
    description: ' ',
  },
];

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    headerState: 1,
    basicDetails,
    totalWorkExperience,
    summary,
    skills,
    careerObjective,
    companyDetails,
    projectDetails,
    educationDetails,
    certificationDetails,
  },
  reducers: {
    setState: (state, action) => {
      console.log(state);

      state.headerState = action.payload;
      //   state.stateName = action.payload.stateName;
    },
    setBasicDetails: (state, action) => {
      console.log(action);
      console.log(state);
      state.basicDetails = action.payload;
    },
    setTotalWorkExperience: (state, action) => {
      // console.log(action);
      // console.log(state);

      state.totalWorkExperience = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setCareerObjective: (state, action) => {
      // console.log(action);
      // console.log(state);

      state.careerObjective = action.payload;
    },
    setCompanyDetails: (state, action) => {
      state.companyDetails = action.payload;
    },
    setProjectDetails: (state, action) => {
      state.projectDetails = action.payload;
    },
    setEducationDetails: (state, action) => {
      state.educationDetails = action.payload;
    },
    setCertificationDetails: (state, action) => {
      state.certificationDetails = action.payload;
    },
  },
});

console.log(headerSlice);
export default headerSlice.reducer;
export const {
  setState,
  setBasicDetails,
  setTotalWorkExperience,
  setSummary,
  setSkills,
  setCareerObjective,
  setCompanyDetails,
  setProjectDetails,
  setEducationDetails,
  setCertificationDetails,
} = headerSlice.actions;
