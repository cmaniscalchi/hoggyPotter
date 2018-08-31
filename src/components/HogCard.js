import React, { Component } from 'react';

class HogCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  toggleHogDetails = () => {
    this.setState({
      ...this.state,
      clicked: !this.state.clicked
    }, console.log("newState is", this.state))
  }

  showHogDetails = () => {
    return (
      <div className="content">
        <div className="header">{this.props.hog.name}</div>
        <div className="meta">
          <span className="date">Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</span>
        </div>
        <div className="description">
          {this.props.hog["highest medal achieved"]}
        </div>
      </div>
    )
  }

  render() {
    // console.log("HogCard props are", this.props);
    // console.log("----------------");
    let hogImageSource = this.props.hog.name.toLowerCase().replace(/ /g, "_")
    return (
      <div className="ui four wide column">
        <div className="ui card" onClick={this.toggleHogDetails}>
          <div className="image">
            <img src={require(`../hog-imgs/${hogImageSource}.jpg`)} alt="hog" />
          </div>
          { this.state.clicked === true ? this.showHogDetails() : null }
        </div>
      </div>
    )
  }
}

export default HogCard;
