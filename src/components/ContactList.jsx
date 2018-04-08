import React from 'react';
import ReactDOM from 'react-dom';

export default class ContactList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : this.props.SearchList,
      filteredItems : this.props.SearchList
    }
  }


searchInList = (event) => {
    let updatedList = this.state.items;
    let contact = ReactDOM.findDOMNode(this.refs.sContact).value;
    let fname = ReactDOM.findDOMNode(this.refs.sFName).value;
    let lname = ReactDOM.findDOMNode(this.refs.sLName).value;
    let occupation = ReactDOM.findDOMNode(this.refs.sOccupation).value;
    
    updatedList = updatedList.filter(function(item){
      console.log((item.ContactNumber === contact || item.Firstname === name));
      return (item.ContactNumber === contact || item.Firstname.toLowerCase() === fname.toLowerCase() 
      || item.LastNmae.toLowerCase() === lname.toLowerCase() 
      || item.Occupation.toLowerCase() === occupation.toLowerCase()
    );
      // return item.ContactNumber == event.target.value;
    });
    this.setState({filteredItems: updatedList});
  }


resetList = (event) => {
    ReactDOM.findDOMNode(this.refs.sContact).value = '';
    ReactDOM.findDOMNode(this.refs.sFName).value = '';
    ReactDOM.findDOMNode(this.refs.sLName).value = '';
    ReactDOM.findDOMNode(this.refs.sOccupation).value = '';
    this.setState({filteredItems: this.state.items});
  }

addNewContact = (event) =>{
  event.preventDefault();
  // let  fname = ReactDOM.findDOMNode(this.refs.iFName).value;
  // let lname = ReactDOM.findDOMNode(this.refs.iLName).value;
  // let contact = ReactDOM.findDOMNode(this.refs.iContact).value;
  // let occupation = ReactDOM.findDOMNode(this.refs.iOccupation).value;
  // let address = ReactDOM.findDOMNode(this.refs.iAddress).value;

  let contact = ReactDOM.findDOMNode(this.refs.sContact).value;
  let fname = ReactDOM.findDOMNode(this.refs.sFName).value;
  let lname = ReactDOM.findDOMNode(this.refs.sLName).value;
  let occupation = ReactDOM.findDOMNode(this.refs.sOccupation).value;
  let address = ReactDOM.findDOMNode(this.refs.sAddress).value;
  if(fname != null && contact != null){
    let newContact = {Firstname : fname,LastNmae : lname,ContactNumber : contact,Address :address,Occupation :occupation};
    let oldState = this.state.items;
    oldState.push(newContact);
    this.setState({filteredItems : oldState});
  }
  

  // ReactDOM.findDOMNode(this.refs.iFName).value = '';
  // ReactDOM.findDOMNode(this.refs.iLName).value = '';
  // ReactDOM.findDOMNode(this.refs.iContact).value = '';
  // ReactDOM.findDOMNode(this.refs.iOccupation).value = '';
  // ReactDOM.findDOMNode(this.refs.iAddress).value ='';
  
  ReactDOM.findDOMNode(this.refs.sContact).value = '';
  ReactDOM.findDOMNode(this.refs.sFName).value = '';
  ReactDOM.findDOMNode(this.refs.sLName).value = '';
  ReactDOM.findDOMNode(this.refs.sOccupation).value = '';
  ReactDOM.findDOMNode(this.refs.sAddress).value ='';

}

updateContact = (event) => {
  let updatedList = this.state.items;
  // let fname = ReactDOM.findDOMNode(this.refs.iFName).value;
  // let lname = ReactDOM.findDOMNode(this.refs.iLName).value;
  // let contact = ReactDOM.findDOMNode(this.refs.iContact).value;
  // let occupation = ReactDOM.findDOMNode(this.refs.iOccupation).value;
  // let address = ReactDOM.findDOMNode(this.refs.iAddress).value;
  
  let contact = ReactDOM.findDOMNode(this.refs.sContact).value;
  let fname = ReactDOM.findDOMNode(this.refs.sFName).value;
  let lname = ReactDOM.findDOMNode(this.refs.sLName).value;
  let occupation = ReactDOM.findDOMNode(this.refs.sOccupation).value;
  let address = ReactDOM.findDOMNode(this.refs.sAddress).value;

  let newContact = {Firstname : fname,LastNmae : lname,ContactNumber : contact,Address :address,Occupation :occupation};
  
  updatedList.splice(updatedList.findIndex(function(item){return item.ContactNumber === contact;}), 1);
  
  // updatedList = updatedList.filter(function(item){
  //   return (item.ContactNumber === contact);
  // });
  updatedList.pop();
  updatedList.push(newContact);
  this.setState({filteredItems: updatedList});
  ReactDOM.findDOMNode(this.refs.sContact).value = '';
  ReactDOM.findDOMNode(this.refs.sFName).value = '';
  ReactDOM.findDOMNode(this.refs.sLName).value = '';
  ReactDOM.findDOMNode(this.refs.sOccupation).value = '';
  ReactDOM.findDOMNode(this.refs.sAddress).value ='';
}

render(){
    return(
    <div>
      <section>
      <div>
        {/* &nbsp;&nbsp; */}
        <section className="searchSection">
        <center>
        <h2>Search master contact </h2>
        <table>
          <tr>
          <td><label>First Name : </label></td>
          <td><input type="search" ref='sFName'/></td>
          <td><label>Last Name : </label></td>
          <td><input type="search" ref='sLName'/></td>
          </tr>
          <tr>
          <td><label>Contact Number : </label></td>
          <td><input type="search" ref='sContact'/></td>
          <td><label>Occupation : </label></td>
          <td><input type="search" ref='sOccupation'/></td>
          </tr>
          <tr>
          <td><label>Address : </label></td>
          <td><input type="search" ref='sAddress'/></td>
          </tr>
          <tr>
          <td><center><button type="button" onClick={this.searchInList}> Search </button></center></td>
          <td><center><button type="button" onClick={this.resetList}> Reset </button></center>  </td>
          <td><center><button type="button" onClick={this.addNewContact}> Save </button></center></td>
          <td><center><button type="button" onClick={this.updateContact}> Update </button></center></td>
         <td></td>
          </tr>
  </table>
        
        {/* <label>First Name : </label><input type="search" ref='sFName'/><br/>
        <label>Last Name : </label><input type="search" ref='sLName'/><br/>
        <label>Contact Number : </label><input type="search" ref='sContact'/><br/>
        <label>Occupation : </label> <input type="search" ref='sOccupation'/><br/> */}
        </center>
        </section>
      </div>
  
    <h2>Search Result </h2>
    <center>
        <table className="tableSkin">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact Number</th>
          <th>Address</th>
          <th>Occupation</th>
          {
            this.state.filteredItems.map((contactList) => {
              return (
                <tr key={contactList.ContactNumber} className="resultComp">
                  <td>{contactList.Firstname}</td>
                  <td>{contactList.LastNmae}</td>
                  <td>{contactList.ContactNumber}</td>
                  <td>{contactList.Address}</td>
                  <td>{contactList.Occupation}</td>
                </tr>
              );
            })}
        </table>
        </center>
      </section>
      {/* <div>
        <table>
          <tr>
          <td><label>First Name : </label></td>
          <td><input type="input" ref='iFName'/></td>
          <td><label>Last Name : </label></td>
          <td><input type="input" ref='iLName'/></td>
          </tr>
          <tr>
          <td><label>Contact Number : </label></td>
          <td><input type="input" ref='iContact'/></td>
          <td><label>Occupation : </label></td>
          <td><input type="input" ref='iOccupation'/></td>
          </tr>
          <tr>
          <td><label>Address : </label></td>
          <td><input type="input" ref='iAddress'/></td>
          </tr>
          <tr/>
          <tr>
          <td></td>
          <td><center><button type="button" onClick={this.addNewContact}> Save </button></center></td>
          <td><center><button type="button" onClick={this.updateContact}> Update </button></center></td>
         </tr>
        </table>
      </div> */}

   </div>
    )
  }
}