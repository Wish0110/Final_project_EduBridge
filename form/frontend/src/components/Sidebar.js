import React, { useState } from 'react';
import {
  FaBars,
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
      name: 'Dashboard',
      icon: <FaTh />
    },
    {
      path: '/PersonalDetails',
      name: 'PersonalDetails',
      icon: <FaUserAlt />
    },
    {
      path: '/Contactandresidencydetails',
      name: 'Contactandresidencydetails',
      icon: <FaCommentAlt />
    },
    {
      path: '/NationalityDetails',
      name: 'NationalityDetails',
      icon: <FaRegChartBar />
    },
    {
        path: '/SupportingInformation',
        name: 'SupportingInformation',
        icon: <FaRegChartBar />
    }
  ];

  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="container">
      <div className="sidebar">
        <div className='top_section'>
          <h1 className='logo'>Logo</h1>
          <div className='bars'>
            <FaBars />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeClassName="active"
            onClick={() => setSelectedPage(item.name)}
          >
            <div className='icon'>{item.icon}</div>
            <div className='link_text'>{item.name}</div>
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