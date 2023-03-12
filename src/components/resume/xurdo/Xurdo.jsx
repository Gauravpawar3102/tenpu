import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { ReactToPrint, useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
function Xurdo() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'resume',
  });
  const BasicDetails = () => {
    return (
      <div className="basic-details-container w-full">
        <div className="name-container text-3xl text-blue-700 font-semibold ">
          John Doe
        </div>
        <div className="role-container text-xl text-slate-600 capitalize">
          Business Development Manager
        </div>
        <div className="professional-summary-container text-base  font-medium ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          blanditiis magni laudantium error? Aperiam harum maxime similique
          nulla rem provident exercitationem porro ipsam asperiores dicta,
          consectetur, nesciunt quo esse vero.
        </div>
      </div>
    );
  };

  const BasicDetailsIcons = () => {
    return (
      <div className="container flex justify-evenly border-y-2 border-blue-800 text-sm py-2 ">
        <div className="email-container flex items-center gap-2 font-medium">
          <div className="icon text-lg text-blue-700">
            <HiMail />
          </div>
          <div className="email">gauravpawar3102@gmail.com</div>
        </div>
        <div className="phone-container flex items-center gap-2 font-medium">
          <div className="icon  text-lg text-blue-700">
            <HiPhone />
          </div>
          <div className="phone">6300316151</div>
        </div>
        <div className="location-container flex items-center gap-2 font-medium">
          <div className="icon text-lg text-blue-700">
            <HiLocationMarker />
          </div>
          <div className="location">Hyderabad</div>
        </div>
        <a
          href="linkedin.com"
          className="linkedIn-container flex items-center gap-2 font-medium"
        >
          <div className="icon text-lg text-blue-700">
            <FaLinkedin />
          </div>
          <div className="linkedin">Gaurav pawar</div>
        </a>
        <a
          href="github.com"
          className="github-container flex items-center gap-2 font-medium"
        >
          <div className="icon text-lg text-blue-700">
            <FaGithub />
          </div>
          <div className="github">gauravpawar3102</div>
        </a>
      </div>
    );
  };
  const Skills = () => {
    return (
      <div className="skills-container w-full flex flex-col gap-2 mb-4">
        <div className="skills-text-container text-xl font-bold uppercase  text-blue-700 ">
          Skills
        </div>

        <div className="skill-tags-container flex  flex-wrap gap-2">
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md  capitalize">
            React.js{' '}
          </div>
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            Figma{' '}
          </div>
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            Node.js{' '}
          </div>
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            Express.js{' '}
          </div>
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            Redux.js{' '}
          </div>
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            javascript{' '}
          </div>{' '}
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            javascript{' '}
          </div>{' '}
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            javascript{' '}
          </div>{' '}
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            javascript{' '}
          </div>{' '}
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            javascript{' '}
          </div>{' '}
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            javascript{' '}
          </div>{' '}
          <div className="tags bg-blue-500 text-white px-2 py-1 rounded-md capitalize">
            javascript{' '}
          </div>
        </div>
      </div>
    );
  };

  const WorkExperience = () => {
    return (
      <div className="workexperience-container w-full">
        <div className="title text-xl m-b-2 font-bold uppercase  text-blue-700">
          work Experience
        </div>
        <div className="role-container text-xl font-semibold">
          Business manager
        </div>

        <div className="role-container flex items-center  gap-2 pl-2">
          <div className="icon text-blue-500">
            <HiOutlineBuildingOffice2 />
          </div>
          <div className="company-details-container text-lg font-medium">
            Airstate{' '}
          </div>
        </div>
        <div className="date-location-container flex justify-between text-slate-500  italic">
          <div className="date flex justify-start ">
            <div className="start-date">09/2014 - </div>
            <div className="end-date"> 06/2017</div>
          </div>
          <div className="location">New york,USA</div>
        </div>
        <ul className="points-container list-disc pl-4">
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            numquam?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            numquam?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            numquam?
          </li>
        </ul>
      </div>
    );
  };

  const Education = () => {
    return (
      <div className="education-details-container w-full ">
        <div className="title-container text-xl font-bold uppercase  text-blue-700">
          Education
        </div>
        <div className="degree-container capitalize text-xl font-semibold ">
          B.E in computer science engineering
        </div>
        <div className="university-container font-medium text-lg">
          The university of Chicago
        </div>
        <div className="date-container font-normal text-base flex text-slate-500  italic">
          <div className="start-date">09/2012- </div>
          <div className="end-date">05/2016</div>
        </div>
      </div>
    );
  };

  const Achievements = () => {
    return (
      <div className="achievements-container w-full">
        <div className="title-container text-xl font-bold uppercase  text-blue-700">
          Achievements
        </div>
        <div className="achievement-title-container capitalize text-xl font-medium ">
          smart india hackathon winner
          <span>(2016)</span>
        </div>

        <div className="organization-container font-normal text-base flex text-slate-500  italic">
          Govt of India
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <button onClick={handlePrint}>Print</button>;
      </div>
      <div
        className="template-container w-full flex  justify-center p-4 mr-auto  ml-auto h-full  "
        ref={componentRef}
      >
        <div
          className="container flex flex-col gap-4 w-11/12 h-full  mt-auto mb-auto "
          // ref={componentRef}
        >
          <BasicDetails />
          <BasicDetailsIcons />
          <Skills />
          <WorkExperience />
          <WorkExperience />
          <Achievements />
          <Education />
        </div>
      </div>
    </>
  );
}

export default Xurdo;
