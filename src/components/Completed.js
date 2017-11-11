import React from 'react';


class Completed extends React.Component {
    constructor(props) {
      super(props);
      
  }  
 
  
    render() {
      return (
        <div className="Completed"> 
            <h1>Completed Tasks</h1>              
            <div>{this.props.comTask.map((listValue) => {
                return <ul><li>{listValue}</li></ul>})}
            </div>
        </div>
      )
    }
  }
  
  export default Completed;
  