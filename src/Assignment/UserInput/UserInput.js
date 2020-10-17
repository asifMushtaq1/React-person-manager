import React from 'react';
import { EventEmitter } from 'events';

const UserInput = (props) => {
  const style = {
    backgroundColor : "#eee",
    border : "1px  solid blue",
    padding : "4px",
    margin : "auto",
    font : "inherit",
    textAlign : "center"
  }
  return <input 
           style = {style}
           type = "text" 
           onChange = {props.changed}
           value = {props.currentName}/>
};

export default UserInput;