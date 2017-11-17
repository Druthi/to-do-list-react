
import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { pickBy } from 'lodash';
import { Link } from 'react-router-dom';
import { Input, Button, Segment, Grid } from 'semantic-ui-react';

import '../css/App.css';

const Task = ({ name, isComplete, onChange }) => {
  return (
    <Segment> 
      <label>
        <input type="checkbox" checked={isComplete} onChange={onChange} />
        {name}
      </label>
    </Segment>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {},
      inputValue: '',
    };
  }

  onInputChange = e => {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    });
  };

  createTask = (event) => {
    event.preventDefault();
    const { inputValue, tasks } = this.state;
    const taskId = uuidv4();
    this.setState({
      ...this.state,
      tasks: {
        ...tasks,
        [taskId]: { id: taskId, name: inputValue, isComplete: false },
      }, inputValue: ""
    });
  };

  onChange = toggleId => {
    const taskToToggle = this.state.tasks[toggleId];
    this.setState({
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [toggleId]: { ...taskToToggle, isComplete: !taskToToggle.isComplete },
      },
    });
  };

  render() {
    const { tasks, inputValue } = this.state;
    const completedTasks = pickBy(
      tasks,
      ({ isComplete }) => isComplete == true
    );
    const incompletedTasks = pickBy(
      tasks,
      ({ isComplete }) => isComplete == false
    );

    return (
      <div className = "ui container">
        <Link to="/">Home</Link>
        <div className="App-Head">
          <h3>To-do-list App</h3>
          <form onSubmit={this.createTask}>          
            <Input type="text" value={inputValue} onChange={this.onInputChange} placeholder="Enter task..."/>
            <Button>Create task</Button>
          </form>
        </div>
            <Grid>
              <Grid.Column floated='left' width={5}>
                <h3>Incompleted Tasks</h3>
                  <Segment.Group>
                    {Object.entries(incompletedTasks).map(
                      ([id, { name, isComplete }]) => (
                        <Task
                          key={id}
                          name={name}
                          isComplete={isComplete}
                          onChange={e => this.onChange(id)}
                        />
                    ))}
                  </Segment.Group>
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <h3>Completed Tasks</h3>
                  <Segment.Group>
                    {Object.entries(completedTasks).map(([id, { name, isComplete }]) => (
                      <Task
                        key={id}
                        name={name}
                        isComplete={isComplete}
                        onChange={e => this.onChange(id)}
                      />
                    ))}
                  </Segment.Group>
              </Grid.Column>
            </Grid>          
        
      </div>
    );
  }
}

export default App;