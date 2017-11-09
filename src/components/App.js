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
  console.log(this.state);
}

handleChange = (event) => {
  this.setState({inputValue: event.target.value})
}

showTask = (listValue) => {
  return <label>
  <input type="checkbox"
    checked={this.state.isChecked}
    onChange={this.toggleChange}
  />{listValue}</label>
  }

  toggleChange = () =>{
    this.setState(prevState => ({isChecked: !prevState.isChecked }));
  }


  render() {
    const { inputValue, displayValue } = this.state;
    return (
      <div className="App">        
       <form onSubmit={this.display}>
       <input type = "text" value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
       <button type = "submit">Submit</button>
       <div>
         {this.state.displayValue.map(this.showTask)}         
        </div>
       </form>       
      </div>
    )
  }
}

export default App;
