import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        return <MenuItem key={MenuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
