import React, { Component } from "react";
import './App.css';


class App extends Component {

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.lenth)
    return this.props.allColors[colorIndex];
  }
  
  render(){
    return (
      <div className="App">
        Todo: Show 40 boxes color boxes
      </div>
    );
  }
}

App.defaultProps = {
  allColors: 
}


export default App;