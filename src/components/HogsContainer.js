import React, { Component } from 'react';
import HogsList from './HogsList.js';

class HogsContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      hogs: this.props.hogs,
      filteredHogs: this.props.hogs,
      searchQuery: ''
    }
  }

  filterHogs = event => {
    let searchInput = event.target.value
    let filteredHogs = this.state.hogs.filter(hog => {
      // console.log("search input is", searchInput);
      // debugger
      return hog.name.toLowerCase().includes(searchInput)
    })
    // debugger
    this.setState({
      ...this.state,
      searchQuery: searchInput,
      filteredHogs: filteredHogs
    }, console.log("state is", this.state))
  }

  render() {
    // console.log("props are", props)
    // console.log("-----------------")
    return (
      <div>
        <div className="ui input focus">
          <input type="text" placeholder="Search By Name..." value={this.state.searchQuery} onChange={this.filterHogs}/>
        </div>
        <br ></br>
        <br ></br>
        <HogsList hogs={this.state.filteredHogs} />
      </div>
    )
  }
}

export default HogsContainer;
