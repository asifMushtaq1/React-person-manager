import React from 'react';

const validation  = (props) => {

  let validationMessage = 'Text Long enough!';

  if (props.inputLenght <= 5 ){
     validationMessage = 'Text Too short!';
  }
  return (
    <div>
       <p>{validationMessage}</p>
      
    </div>
  );
};

export default validation;