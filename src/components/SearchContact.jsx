import React from 'react'

export default class SearchContact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchContact : ''
    };
  }

  handleSearch(svalue) {
    this.setState({searchContact: svalue})
  }

  render() {
    return (
      <div>
        <section className="searchSection">
        <h2>Search master contact </h2>
        <label>Contact Number : </label>
        <input type="search" onChange={this.handleSearch}/>&nbsp;&nbsp;
        <button type="button"> Search </button> 
       </section>
      </div>
    )
  }
}
