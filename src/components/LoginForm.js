import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import EmailValidator from 'email-validator';
import { isEmpty } from 'lodash';



class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          userDetails:{
              email:"",
              password:""
          },
          errors:{}
      }
      console.log(this.state.userDetails);       
    }
    
    
    onChange = e => {
        e.preventDefault();
        this.setState({ ...this.state, 
            userDetails:{
                ...this.state.userDetails, [e.target.name]:e.target.value
            }
        });
        
    }
    
    onSubmit = (e) => {
        const error = this.validate(this.state.userDetails);
        this.setState({...this.state, errors:error});
        console.log(error);
        this.showError(error);        
    }

    showError = (errors) => {
        
        if(isEmpty(errors)){
            console.log("Valid");
        }
        else if(errors.hasOwnProperty('email') && (errors.hasOwnProperty('password')))  {
            console.log(errors.email + " " + errors.password);
        }
        else if(errors.hasOwnProperty('email'))  {
            console.log(errors.email);
        }
        else if(errors.hasOwnProperty('password'))  {
            console.log(errors.password);
        }
    }

    validate = (userDetails) => {
        const errors = {};
        if(!EmailValidator.validate(userDetails.email))
        errors.email = "Invalid Email";
        if(!userDetails.password)
        errors.password = "Password required";
        return errors;
    }


   
    render() {
        const{ userDetails } = this.state;
      return (
        <div>
            <Form onSubmit={this.onSubmit}>
                <Form.Field> 
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={userDetails.email} name="email" onChange={this.onChange} placeholder="example@example.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={userDetails.password} name="password" onChange={this.onChange} placeholder="password"/>            
                </Form.Field>
                <Button primary>Login</Button>
            </Form>            
        </div>
        
      )
    }
  }
  
  export default LoginForm;