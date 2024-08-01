import React from 'react';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Akademi</h1>
      </div>
      <ul className="menu">
        <li className="menu-item active">
          <i className="icon-home"></i>
          Dashboard
        </li>
        <li className="menu-item">
          <i className="icon-students"></i>
          Students
        </li>
        <li className="menu-item">
          <i className="icon-teachers"></i>
          Teachers
        </li>
        <li className="menu-item">
          <i className="icon-event"></i>
          Event
        </li>
        <li className="menu-item">
          <i className="icon-finance"></i>
          Finance
        </li>
        <li className="menu-item">
          <i className="icon-food"></i>
          Food
        </li>
        <li className="menu-item">
          <i className="icon-user"></i>
          User
        </li>
        <li className="menu-item">
          <i className="icon-chat"></i>
          Chat
        </li>
        <li className="menu-item">
          <i className="icon-activity"></i>
          Lastest Activity
        </li>
      </ul>
      <div className="footer">
        <p>Akademi - School Admission Dashboard</p>
        <p>Made with ❤️ by Peterdraw</p>
      </div>
    </div>
  );
};

export default Sidebar;
