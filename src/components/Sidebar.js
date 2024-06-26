import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faAnglesRight, faList, faCalendar, faStickyNote, faSquare, faPlus, faSliders, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <div className='cow'>
        <h2>Menu</h2>
        <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="search-bar">
        <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} className="fa-icon" />
        </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <ul>
          <li><FontAwesomeIcon icon={faAnglesRight} /> Upcoming</li>
          <li className="active"><FontAwesomeIcon icon={faList} /> Today</li>
          <li><FontAwesomeIcon icon={faCalendar} /> Calendar</li>
          <li><FontAwesomeIcon icon={faStickyNote} /> Sticky Wall</li>
        </ul>
      </div>
      <div className="lists">
        <h3>Lists</h3>
        <ul>
          <li><FontAwesomeIcon icon={faSquare} style={{color: "#FD7272",}}/> Personal</li>
          <li><FontAwesomeIcon icon={faSquare} style={{color: "#74C0FC",}}/> Work</li>
          <li><FontAwesomeIcon icon={faSquare} style={{color: "#FFD43B",}}/> List 1</li>
          <li><FontAwesomeIcon icon={faPlus}/> Add New List</li>
        </ul>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        <ul>
          <li style={{ backgroundColor: '#cfe4f8' }}>Tag 1</li>
          <li style={{ backgroundColor: '#f8d7da' }}>Tag 2</li>
          <li><FontAwesomeIcon icon={faPlus}/> Add Tag</li>
        </ul>
      </div>
      <div className="bottom-menu">
        <ul>
          <li><FontAwesomeIcon icon={faSliders} /> Settings</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
