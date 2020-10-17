import React, { useEffect,useRef,useContext } from 'react';
import classes from './cockpit.css';
import AuthContext from '../../context/auth-context';


const Cockpit = props => {

  const btnToggleRef = useRef(null );
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request...
  // const timer = setTimeout(() => {
  //  alert("Data Saved!!");    
  //    }, 1000);
    btnToggleRef.current.click();
     return () => {
         //clearTimeout(timer);
         console.log('[Cockpit.js] cleanup work in useEffect');
     };
  }, []); //[props.persons]

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
      return () => {
         console.log('[Cockpit.js] cleanup work in 2nd useEffect');
     };
  }); 


  const assignedClasses = [];

  let btnClass = '';
  if(props.showPerson){
    btnClass = classes.Red;
  }
  
  // if (props.persons.length <= 3 ){
  //   assignedClasses.push(classes.green); // classes = ['red']
  // }
  if (props.persons.lenght <=2 ){
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <=1 ){
    assignedClasses.push(classes.bold); // classes = ['red' , 'bold']
  }
      return (
        <div className = {classes.Cockpit}>
        <h1 className = {classes.green}>{props.title}</h1>
        <p className = {assignedClasses.join(' ') }>This is really working!</p>
  
    <button ref = {btnToggleRef} className = {btnClass} onClick ={props.clicked}>
         Toggle Person</button>

        {/* <AuthContext.Consumer>
        { context => <button 
        className = {classes.green}
        onClick = {context.login}>
          Login
        </button>}
        </AuthContext.Consumer> */}

      <button className = {classes.green}
        onClick = {authContext.login}>
          Login</button>
        </div>
      )
}
export default React.memo(Cockpit);