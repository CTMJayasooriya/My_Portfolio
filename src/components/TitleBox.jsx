import React from 'react';
import './TitleBox.css';

export default function TitleBox(props) {
  return (
    <div className="titleBox glass">
      <span className="text">My favourite subject is {props.subject}. The grade is {props.Grade}</span>
      {props.children}
    </div>
  );
}
