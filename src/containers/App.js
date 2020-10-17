import React,{Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxillary';
import fromClass from '../hoc/fromClass';
import AuthContext from '../context/auth-context';

class App extends Component{
  constructor (props){
  super(props);
  console.log('[App.js] constructor');

}
state = {
  persons : [
    { id : 1 , name : "Saif" , age : 20},
    {id : 2 ,name : "Asfand" , age : 25},
    {id : 3 ,name : "Sugfiyan" , age : 30}
  ],
  showPerson : false,
  showCockpit : true,
  changeCounter : 0,
  authentication : false
 }

 static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps' , props);
    return state; 
 }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
 shouldComponentUpdate(nextProps,nextState){
   console.log('[App.js] shouldComponentUpdate');
   return true;
 }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

   changeNameHandler = (event , id) => 
   {
       const personIndex = this.state.persons.findIndex( p => {
          return p.id === id;
        });
       const person = {
            ...this.state.persons[personIndex]
          };
       person.name = event.target.value;
       const persons = [...this.state.persons];
       persons[personIndex] = person;
       this.setState((prevState , props) => {  
         return {
         persons : persons ,
         changeCounter : prevState.changeCounter + 1  }
        })
   }; 
  togglePersonhandle = () => {
      const doesShow = this.state.showPerson;
       this.setState({showPerson : !doesShow})
    };
   deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex ,1);
      this.setState({persons :persons })
    };

    loginHandler = () => {
      this.setState({authentication : true})
    }

    // removeCockpitHandler = () => {
    //   const cockpitShow = this.state.showCockpit;
    //     if(this.state.showCockpit){
    //       this.setState({showCockpit : !cockpitShow })
    //     }
    // }
render(){
  console.log('[App.js] Render...');
     let persons = null;
    
   if ( this.state.showPerson ) {
        persons = <Persons 
                     persons={this.state.persons}
                     clicked = {this.deletePersonHandler}
                     changed = {this.changeNameHandler}
                    // isAuthenticated = {this.state.authentication}
                   />}   
  return (
     <Aux>
      <button 
      onClick = { ()=> {this.setState({showCockpit : false}) }}>
        Remove Cockpit
        </button>
        <AuthContext.Provider 
          value = {{
            authenticated : this.state.authentication,
            login : this.loginHandler
          }}
        >
        {this.state.showCockpit ?
        <Cockpit 
          title = {this.props.appTitle}
          showPerson = {this.state.showPerson}
          persons = {this.state.persons}
          clicked = {this.togglePersonhandle}
          login = {this.loginHandler}
        /> : null}
           {persons}
           </AuthContext.Provider>
           </Aux>
           );
  }}
  export default fromClass(App, classes.App);


// Assignment of folder 4
// export default class App extends Component {

//  state = {
//    userInput : ''
//  }
//   inputChangeHandler = (event) => {
//     this.setState({userInput : event.target.value})
//   }

//   deleteCharHandle = (index) => {
//     const text = this.state.userInput.split('');
//     text.splice(index ,1);
//     const updatedText = text.join('');
//     this.setState({userInput : updatedText});

//   }
//   render() {

//     const charList = this.state.userInput.split('').map((ch , index) => {
//       return <Char 
//               character = {ch} 
//               key = {index}
//               clicked = { () => this.deleteCharHandle(index)}/>
//     });

//     return (
//       <div className = "App">
//         <h1>Hi, I'm React App</h1>
//         <input type = "text" onChange = {this.inputChangeHandler} value = {this.state.userInput}/>
//         <p>{this.state.userInput}</p>

//         <Validation inputLenght = {this.state.userInput.length}/>
//         {charList}
//       </div>
//     )
//   }
// }







    //     <div>
    //     <Person 
    //     name = {this.state.persons[0].name} 
    //     age = {this.state.persons[0].age} 
    //     click = {this.handleSwitch.bind(this,"Apple")}
    //     >
    //       My Hobbies : Running
    //     </Person>
  
    //     <Person 
    //     name = {this.state.persons[1].name}  
    //     age = {this.state.persons[1].age} 
    //     change = {this.changeNameHandler}>
    //       My Hobbies : Racing
    //     </Person>
  
    //     <Person 
    //     name = {this.state.persons[2].name}  
    //     age = {this.state.persons[2].age} 
    //     />
    // </div>
    






// Assignment upto/of  folder 3

// export default class App extends Component {
//   state = {
//     userName : "Asif"
//   }
//   inputChangeHandle = (event) => {
//     this.setState({
//       userName : event.target.value
//     })
//   };

//   render() {
//     return (
//       <div className = "App">
//         <h1>React Assignment </h1>

//         <UserInput  
//         changed = {this.inputChangeHandle} 
//         currentName = {this.state.userName}
//         />

//         <UserOutput userName = {this.state.userName}/>
//         <UserOutput userName = {this.state.userName}/>
//         <UserOutput userName = "Hamza"/>
//       </div>
//     )
//   }
// }



// Using state in arrow function(hooks)

// const App = props => {
//   const [personState, setPersonState] = useState({
//     person : [
//               {name : "Max" , age : "20"},
//               {name : "Manu" , age : "25"},
//               {name : "Maximilian" , age : "30"}
//              ],       
//     });
    
//     console.log(personState);
//     const handleSwitch = () => {
//       setPersonState({
//         person : [
//                    {name : "Asif" , age : "21"},
//                    {name : "Bilal" , age : "23"},
//                    {name : "Hamza" , age : "32"}
//                  ], 
//         otherstate : personState.otherstate   
    
//       })
//     };
    
//   return (
//     <div className = "App">
//       <h1>Hi  , I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick = {handleSwitch}>Switch Button</button>

//       <Person 
//       name = {personState.person[0].name} 
//       age = {personState.person[0].age}>
//         My Hobbies : Racing
//       </Person>

//       <Person 
//       name = {personState.person[1].name} 
//       age = {personState.person[1].age}
//       />

//       <Person 
//       name = {personState.person[2].name} 
//       age = {personState.person[2].age}
//       >My Hobbies : Cycling
//       </Person>
//     </div>
//   )
// }

