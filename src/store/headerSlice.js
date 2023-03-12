import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const basicDetails = {
  aboutMe: '',
  careerObjective: '',
  email: '',
  fullName: '',

  location: '',
  phone: '',
  title: '',
  totalWorkExperience: '',
  websiteUrl: '',
};
const skillDetails = {
  frameworks: [],
  previousRoles: [],
  programmingLanguages: [],
  technologies: [],
  tools: [],
};
const professionalSummary = {
  summary: '',
};
const workExperience = [
  {
    companyName: '',
    position: '',
    startDate: '',
    currentJob: false,
    endDate: '',
    years: '',
    points: [''],
  },
];
const achievements = [
  {
    title: '',
    date: '',
    organizationName: '',
  },
];
const education = [
  {
    instituteName: '',
    degree: '',
    branch: '',
    location: '',
    grade: '',
    startDate: '',
    endDate: '',
  },
];
export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    headerState: 1,
    basicDetails,
    skillDetails,
    professionalSummary,
    workExperience,
    achievements,
    education,
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
    setSkillDetails: (state, action) => {
      // console.log(action);
      // console.log(state);

      state.skillDetails = action.payload;
    },
    setProfessionalSummary: (state, action) => {
      state.professionalSummary = action.payload;
    },
    setWorkExperience: (state, action) => {
      state.workExperience = action.payload.companiesList;
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
  },
});

console.log(headerSlice);
export default headerSlice.reducer;
export const {
  setState,
  setBasicDetails,
  setSkillDetails,
  setProfessionalSummary,
  setWorkExperience,
  setAchievements,
  setEducation,
} = headerSlice.actions;
