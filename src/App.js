import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {

  display(event){
    event.preventDefault();
    const storeID = this.storeInput.value;
  }
  render() {
    return (
      <div className="App">
        <p> Hello World! </p>
        <input type="text" placeholder = "Enter task" ref={(input) => {this.storeInput = input}}/>
        <button onClick={(e) => this.display(e)}> Submit </button>
      </div>
    );
  }
}




export default App;
