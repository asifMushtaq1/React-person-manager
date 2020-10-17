import React,{Component} from 'react';

import classes from "./Person.css"; 
import Aux from '../../../hoc/Auxillary';
import fromClass from '../../../hoc/fromClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props){
      super(props);
      this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount(){
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render(){
    console.log('[Person.js] Person...');
    return (
     <Aux>
       {/* <AuthContext.Consumer>
       {
         (context) => context.authenticated ? 
       <p>Authenticated!</p> : 
       <p>Please Login! </p>
       }
       </AuthContext.Consumer> */}
      { this.context.authenticated ? 
       <p>Authenticated!</p> : 
       <p>Please Login! </p>
       }
        <p onClick = {this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
  
        <p>{this.props.children}</p>
  
        <input
         ref = {this.inputElementRef}
         type = "text" 
         onChange = {this.props.change} 
         value = {this.props.name}
         />
     </Aux>
    )
  }
  }
  
Person.propTypes = {
  click  : PropTypes.func,
  name   : PropTypes.string,
  age    : PropTypes.number,
  change : PropTypes.func
};
export default fromClass(Person,classes.Person);
