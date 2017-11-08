import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        inputValue :"",
        displayValue : []
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

  render() {
    const { inputValue, displayValue } = this.state;
    return (
      <div className="App">        
       <form onSubmit={this.display}>
       <input type = "text" value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
       <button type = "submit">Submit</button>
       <ul>
         {this.state.displayValue.map((listValue) =>{
         return <li>{listValue}</li>})}
        </ul>
       </form>       
      </div>
    )
  }
}

export default App;
