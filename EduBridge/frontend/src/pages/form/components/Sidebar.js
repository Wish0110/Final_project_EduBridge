import React, { useState } from 'react';
import {
  FaCommentAlt,
  FaRegChartBar,
  FaTh,
  FaUserAlt
}from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: '/',
      name: 'Application Overview',
      icon: <FaTh />
    },
    {
      path: '/PersonalDetails',
      name: 'Personal Details',
      icon: <FaUserAlt />
    },
    {
      path: '/Contactandresidencydetails',
      name: 'Contact and Residency Details',
      icon: <FaCommentAlt />
    },
    {
      path: '/NationalityDetails',
      name: 'Nationality Details',
      icon: <FaRegChartBar />
    },
    {
        path: '/SupportingInformation',
        name: 'Supporting Information',
        icon: <FaRegChartBar />
    },
    {
        path: '/EnglishLanguageSkills',
        name: 'English Language Skills',
        icon: <FaRegChartBar />
    },
    {
        path: '/FinanceAndFunding',
        name: 'Finance And Funding',
        icon: <FaRegChartBar />
    },
    {
      path: '/Education',
      name: 'Education',
      icon: <FaRegChartBar />
    },
    {
      path: '/ReccomandationLetter',
      name: 'ReccomandationLetter',
      icon: <FaRegChartBar />
    },
    {
      path: '/Employment',
      name: 'Employment',
      icon: <FaRegChartBar />
    },
    {
      path: '/PersonalStatement',
      name: 'Personal statement',
      icon: <FaRegChartBar />
    },
  ];

  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="container">
      <div className="sidebar">
        <div className='top_section'>
          <h1 className='logo'>#</h1>
          <div className='bars'>
           
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
          to={item.path}
          key={index}
          className='link'
          onClick={() => setSelectedPage(item.name)}
          style={({ isActive }) => isActive ? { backgroundColor: '#7d9fc1', color: '#000' } : {}}
        >
          <div className='icon'>{item.icon}</div>
          <div className={`link_text ${selectedPage === item.name ? 'sidebar-active' : ''}`}>{item.name}</div>
        </NavLink>
        ))}
      </div>
      <main>
        {children}
        {selectedPage === 'Personal_details'}
        {selectedPage === 'Comment'}
      </main>
    </div>
  );
}

export default Sidebar;