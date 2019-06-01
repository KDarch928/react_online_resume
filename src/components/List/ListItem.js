import React from "react";

const listStyle = {
  border: 'none',
  display: 'list-item',
  color: '#666666',
  fontSize: '16px',
  fontFamily: '"Open Sans", sans-serif'
};

export const ListItem = props => (
  <li className="list-group-item" style={listStyle}>
    {props.children}
  </li>
);