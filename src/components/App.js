import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        inputValue :"",
        displayValue : [],
        isChecked: true
    };
}  

display = (event) => {
  event.preventDefault();
  const newArr = this.state.displayValue;
  newArr.push(this.state.inputValue);
  this.setState({displayValue: newArr});
  this.setState({inputValue: ""});
  console.log(this.state);
}

handleChange = (event) => {
  this.setState({inputValue: event.target.value})
}

showTask = (listValue, index) => {
  return <ul><label>
  <input type="checkbox" key={index}
    checked={this.state.isChecked}
    onChange={this.toggleChange}
  />{listValue}</label></ul>
  }

  toggleChange = () =>{
    this.setState(prevState => ({isChecked: !prevState.isChecked }));
  }


  render() {
    const { inputValue, displayValue } = this.state;
    return (
      <div className="App">               
        <form onSubmit={this.display}>
          <input type = "text" value={this.state.inputValue} placeholder="Enter task ..." onChange={(e) => this.handleChange(e)}/>
          <button type = "submit">Submit</button>
          <h1>To Do List</h1> 
            <div>
              {this.state.displayValue.map(this.showTask)}         
            </div>
        </form>       
      </div>
    )
  }
}

export default App;
