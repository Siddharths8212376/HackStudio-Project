import React, {Component} from 'react';

import { Form, Col, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { Link, Redirect, withRouter } from "react-router-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class register extends Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     student: {
  //       name: '',
  //       phNo: '',
  //       email: '',
  //       password: '',
  //       skills: '',
  //       desc: '', 
  //     },
  //   };
  //   this.onChange = this.onChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }
  // onChange(e) {
  //   const { student } = { ...this.state };
  //   const currentState = student;
  //   const { name, value } = e.target;
  //   currentState[name] = value;
  //   this.setState( { student: currentState });
  // }
  // onSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.student);
  //   // let messageRef = fire.database().ref('Users').orderByKey().limitToLast(100);
  //   // fire.database().ref('Users').push(this.state.user);
  //   db.collection("Student").doc(this.state.student.name).set(this.state.student);
  //   // this.setState({
  //   //   student: {
  //   //     name: '',
  //   //     phNo: '',
  //   //     email: '',
  //   //     password: '',
  //   //     skills: '',
  //   //     desc: '', 
  //   //   },
  //   // })
  // }


  render(){
    return(
      <div className="fundraiser" >
          <div className="header">
            STUDENT REGISTRATION
              </div>
          <Form>
<Form.Row>
<Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" className='Form' />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Phone No.</Form.Label>
    <Form.Control type="number" placeholder="(+91) " className='Form'  />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className='Form'  />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form.Row>


<Form.Row>

 
  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>Skills</Form.Label>
    <Form.Control as="select" >
      <option>Choose...</option>
      <option>React</option>
      <option>JS</option>
      <option>Python</option>
      <option>C++</option>
      <option>Game Dev</option>
      <option>.NET</option>

    </Form.Control>
  </Form.Group>

</Form.Row>

<Form.Group id="formGridCheckbox">
  <Form.Check type="checkbox" label="Request Verification"  />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Describe yourself. About your hobbies, achievements, etc</Form.Label>
  <Form.Control as="textarea" rows="3" />
</Form.Group>

<Link to='/dashboard'>
<Button variant="primary" type="submit" >
  Submit
</Button>
</Link>

</Form>
      </div>
  )
  }
      
}


export default register;
