import React from 'react';
import {
    FaBars,
    FaCommentAlt,
    FaRegChartBar,
    FaTh, FaUserAlt
}from 'react-icons/fa';

const Sidebar = () => {
    const menuItem=[
        {
            path:'/',
            name:'Dashboard',
            icon:<FaTh/>
        },
        {
            path:'/about',
            name:'About',
            icon:<FaUserAlt/>
        },
        {
            path:'/comment',
            name:'Comment',
            icon:<FaCommentAlt/>
        },
        {
            path:'/analytics',
            name:'Analytics',
            icon:<FaRegChartBar/>
        }

]
  return (
    <div className="container">
      <div className="sidebar">
        <div className='top_section'>
            <h1 className='logo'>Logo</h1>
            <div className='bars'>
                <FaBars/>
            </div>
        </div>
        {
            
        }
      </div>  
    </div>
  );
}

export default Sidebar;