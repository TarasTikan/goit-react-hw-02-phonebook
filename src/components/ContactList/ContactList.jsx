import React from 'react';

export const ContactList = ({name}) => {
    return (
      <ul>
        <li><p name={name}>{name}</p></li>
        {/* {name.map(item => <li><p>{name}</p></li>)} */}
      </ul>
    );
  };