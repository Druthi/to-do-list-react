import React from 'react';
import Completed from './Completed';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        inputValue :"",
        displayValue : [],
        completed :[]
        
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
  //console.log(this.state);
}

handleChange = (event) => {
  this.setState({inputValue: event.target.value})
}

showTask = (listValue, index) => {
  return <ul><label>
  <input type="checkbox" key={index}
    checked={this.state.displayValue[index].isChecked}
    onClick={(e) => this.toggleChange(index, e)}
  />{listValue.task}</label></ul>
}

toggleChange = (index, event) =>{
  console.log(event);   
  const newArr = this.state.displayValue;
  newArr[index]= {
    task: this.state.displayValue[index].task,
    isChecked: !this.state.displayValue[index].isChecked
  };
  this.setState({displayValue: newArr}, function() {
    this.completedTask(index);    
  }); 
}

completedTask = (index) =>{
  const newArr = this.state.completed;
  if(this.state.displayValue[index].isChecked == true){
    newArr.push(this.state.displayValue[index].task);
    this.setState({completed:  newArr});  
  }
  else if(this.state.displayValue[index].isChecked == false){
    for(var com in newArr){
      if(this.state.displayValue[index].task == newArr[com]){
        newArr.splice(com);
        this.setState({completed: newArr});
      }
    }
  }
  else {
      this.setState({completed: newArr});
      console.log(this.state.completed);
    }
  }


  render() {
    const { inputValue, displayValue, completed } = this.state;
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
        <Completed comTask= {this.state.completed} /> 
      </div>
    )
  }
}

export default App;
