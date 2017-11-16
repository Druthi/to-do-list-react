import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import LoginForm from './LoginForm';



class LoginPage extends React.Component {
    constructor(props) {
      super(props);
            
  }  
  
    render() {
      return (
        <div> 
          <Link to="/">Home</Link>
          <h1>Login Page</h1>
          <LoginForm />
            
                      
        </div>
        
      )
    }
  }
  
  export default LoginPage;
  