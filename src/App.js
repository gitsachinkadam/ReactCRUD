import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactList from './components/ContactList';
import SearchContact from './components/SearchContact';
import FilteredList from './components/FilteredList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactList :[
        {Firstname : 'Sachin',LastNmae : 'kadam',ContactNumber :'8125127708',Address :'Gachibowli',Occupation :'SE'},
        {Firstname : 'John',LastNmae : 'Sina',ContactNumber :'123456719',Address :'Madhapur',Occupation :'Business'},
        {Firstname : 'Rohan',LastNmae : 'Bukte',ContactNumber :'9412456781',Address :'Begumpeth',Occupation :'Digital Marketing'},
        {Firstname : 'Anto',LastNmae : 'Maria',ContactNumber :'9988776622',Address :'Kukatpally',Occupation :'SE'},
        {Firstname : 'Rama',LastNmae : 'Kundula',ContactNumber :'9182643744',Address :'Tank Bund',Occupation :'Business'},
        {Firstname : 'Shyam',LastNmae : 'Srinivasa',ContactNumber :'9177773744',Address :'Hyderabad',Occupation :'Teacher'}
        // {Firstname : 'Sundar',LastNmae : 'Reddy',ContactNumber :'9182648884',Address :'Pune',Occupation :'Business'},
        // {Firstname : 'Naryan',LastNmae : 'Laturkar',ContactNumber :'9185553744',Address :'Hyderabad',Occupation :'SE'}
      ],
    }
  }
  
  render() {
    return (
      <div>
        {/* <SearchContact/> */}
        <ContactList SearchList={this.state.contactList}/>
        {/* <FilteredList/> */}
      </div>
    )
  }
}
export default App;