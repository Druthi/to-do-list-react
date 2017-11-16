
import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { pickBy } from 'lodash';
import { Link } from 'react-router-dom';

import '../css/App.css';

const Task = ({ name, isComplete, onChange }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={isComplete} onChange={onChange} />
        {name}
      </label>
    </li>
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
      <div className = "App">
        <Link to="/">Home</Link>
        <h3 className = "App-header">To-do-list App</h3>
        <form onSubmit={this.createTask}>          
          <input type="text" value={inputValue} onChange={this.onInputChange} />
          <button>Create task</button>
          <div className="para-left">
            <h3>Incompleted Tasks</h3>
            <ul>
              {Object.entries(incompletedTasks).map(
                ([id, { name, isComplete }]) => (
                  <Task
                    key={id}
                    name={name}
                    isComplete={isComplete}
                    onChange={e => this.onChange(id)}
                  />
                )
              )}
            </ul>
          </div>
          <div className="para-right">
            <h3>Completed Tasks</h3>
            <ul>
              {Object.entries(completedTasks).map(([id, { name, isComplete }]) => (
                <Task
                  key={id}
                  name={name}
                  isComplete={isComplete}
                  onChange={e => this.onChange(id)}
                />
              ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default App;