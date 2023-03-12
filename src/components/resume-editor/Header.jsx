import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setState } from '../../store/headerSlice';

function Header() {
  const state = useSelector((state) => state.header.headerState);

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const handleClick1 = () => {
    dispatch(setState(1));
  };
  const handleClick2 = () => {
    dispatch(setState(2));
  };
  const handleClick3 = () => {
    dispatch(setState(3));
  };
  const handleClick4 = () => {
    dispatch(setState(4));
  };
  const handleClick5 = () => {
    dispatch(setState(5));
  };
  const handleClick6 = () => {
    dispatch(setState(6));
  };
  return (
    <div className="header-container bg-green-100 w-full  text-md h-16 overflow-x-scroll p-2">
      <ul className="header-list flex justify-around  w-[50rem] ">
        {state === 1 ? (
          <li
            id="header-list"
            className="basic font-bold "
            onClick={handleClick1}
          >
            Basic details
          </li>
        ) : (
          <li id="header-list" className="basic" onClick={handleClick1}>
            Basic details
          </li>
        )}
        {state === 2 ? (
          <li
            id="header-list"
            className="basic font-bold"
            onClick={handleClick2}
          >
            Skills and expertise
          </li>
        ) : (
          <li id="header-list" className="basic" onClick={handleClick2}>
            Skills and expertise
          </li>
        )}
        {state === 3 ? (
          <li
            id="header-list"
            className="basic font-bold"
            onClick={handleClick3}
          >
            Professional summary
          </li>
        ) : (
          <li id="header-list" className="basic" onClick={handleClick3}>
            Professional summary
          </li>
        )}
        {state === 4 ? (
          <li
            id="header-list"
            className="basic font-bold"
            onClick={handleClick4}
          >
            Experience
          </li>
        ) : (
          <li id="header-list" className="basic" onClick={handleClick4}>
            Experience
          </li>
        )}
        {state === 5 ? (
          <li
            id="header-list"
            className="basic font-bold"
            onClick={handleClick5}
          >
            Achievements
          </li>
        ) : (
          <li id="header-list" className="basic" onClick={handleClick5}>
            Achievements
          </li>
        )}
        {state === 6 ? (
          <li
            id="header-list"
            className="basic font-bold"
            onClick={handleClick6}
          >
            Education
          </li>
        ) : (
          <li id="header-list" className="basic" onClick={handleClick6}>
            Education
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
