import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        inputValue :"",
        displayValue : [{
          task:"",
          isChecked: false
        }],
        
    };
}  

display = (event) => {
  event.preventDefault();
  const newArr = this.state.displayValue;
  newArr.push({
    task: this.state.inputValue,
    isChecked: false
  });
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
    checked={this.state.displayValue[index].isChecked}
    onChange={(e) => this.toggleChange(index, e)}
  />{listValue.task}</label></ul>
}

toggleChange = (index, event) =>{   
  const newArr = this.state.displayValue;
  newArr[index]= {
    task: this.state.displayValue[index].task,
    isChecked: !this.state.displayValue[index].isChecked
  };
  this.setState({displayValue: newArr});   
  this.setState({ displayValue: newArr});
  //console.log(this.state.displayValue[index].isChecked);

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
