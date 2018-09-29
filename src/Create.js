import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
       user: {}
    };
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userObj = this.state.user

    axios.post('http://localhost:4200/users/add', userObj)
      .then((result) => {
        this.props.history.push("/")
      })
	   .catch(error => {
	   console.log('error:'+error);
	 });
  }

  render() {
    const { firstname, lastname, gender, email, published_year, username } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-lastname">
              Create New User
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/">Back To Users</Link></h4>
            
			<form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="firstname">Firstname:</label>
                <input type="text" class="form-control" name="firstname" value={this.state.user.firstname} onChange={this.onChange} placeholder="Firstname" />
              </div>
              <div class="form-group">
                <label for="lastname">Lastname:</label>
                <input type="text" class="form-control" name="lastname" value={this.state.user.lastname} onChange={this.onChange} placeholder="Lastname" />
              </div>
			   <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" class="form-control" name="username" value={this.state.user.username} onChange={this.onChange} placeholder="Username" />
              </div>
			  <div class="form-group">
                <label for="password">Password:</label>
                <input type="text" class="form-control" name="password" value={this.state.user.password} onChange={this.onChange} placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="gender">Gender:</label>
                <input type="text" class="form-control" name="gender" value={this.state.user.gender} onChange={this.onChange} placeholder="Gender" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <textArea class="form-control" name="email" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{this.state.user.email}</textArea>
              </div>
              <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" class="form-control" name="age" value={this.state.user.age} onChange={this.onChange} placeholder="Age" />
              </div>
			  
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
			
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
