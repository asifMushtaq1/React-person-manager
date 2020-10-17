import React from 'react';

const fromClass = (WrappedComponent, className) => {
  return props => (
    <div className = {className}>
       <WrappedComponent {...props}/>
       </div>
  );
};

export default fromClass;