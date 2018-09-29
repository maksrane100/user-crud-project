import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, Card, Icon, Image, Label, Item, Message, Segment, Loader, Dimmer, Progress, Button } from 'semantic-ui-react'
import ReactLoading from 'react-loading';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			percent: 10,
			loading: true
		};
	}

	componentDidMount() {
	  
		axios.get('http://localhost:4200/users/getUsers')
		.then(res => {
			this.setState({ users: res.data, loading: false });
			console.log(this.state.users);
		});
	}

	render() {
    
	if (this.state.loading) {
		return (
		<div class="container">
			<div class="panel panel-default">
			  <div class="panel-heading">
				<h2 class="panel-title">
				  Users
				</h2>
			  </div>
		  
				<div>
				<Message color='green'>Loading User Data.... Please Wait....</Message>
				 <ReactLoading type="spin" color="red" />
				</div>
			</div>
		</div>
		);
	  }
  
	return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              Users
            </h2>
          </div>
		 
          <div class="panel-body">
            <h4><Link to="/create">Add New User</Link></h4>
			
			<div class="panel-heading">
				<h4 class="panel-title">
				  Total Users : {this.state.users.length}
				</h4>
			</div>
		  
		  
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Username</th>
				  <th>Email</th>
				  <th>Gender</th>
				  <th>Age</th>
				  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user =>
                  <tr>
                    
                    <td>{user.firstname}</td>
                     <td>{user.lastname}</td>
					  <td>{user.username}</td>
					   <td>{user.email}</td>
					    <td>{user.gender}</td>
						 <td>{user.age}</td>
					<td><Link to={`/show/${user._id}`}>View</Link></td>                 
				 </tr>
                )}
              </tbody>
            </table>
			
          </div>
        </div>
      </div>
    );
  }
}

export default App;
