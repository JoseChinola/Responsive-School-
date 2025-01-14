import React from 'react';
import { Link } from 'react-router-dom';

const SubmenuSection = ({ sectionTitle, description, items, selectedSubmenuItem, onSubmenuItemClick }) => {

  
  return (
    <>
      <div className="title-header title-header-service">
        <h6>{sectionTitle}</h6>
        <span>{description}</span>
      </div>

      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            className={`submenu-item service-Menu-item ${selectedSubmenuItem === item.name ? 'selected' : ''}`}
            onClick={() => onSubmenuItemClick(item.name)}
          >
            <Link to={item.to}>
              <i className={`fa-solid ${item.icon}`}></i> {item.label}
            </Link>
          </li>
        ))}
      </ul>

    </>
  );
};

export default SubmenuSection;
