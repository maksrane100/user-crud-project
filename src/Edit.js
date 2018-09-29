import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

const buttonStyle = {
  margin: '10px',
  textAlign: 'center'
};


class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4200/users/edit/'+this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state.user);
      });
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  cancel = (e) => {
     //return <Redirect to='/' />;
	 this.props.history.push(`/`)
  }
  
  onSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, gender, email, username, age } = this.state.user;
    
    axios.post('http://localhost:4200/users/update/'+this.props.match.params.id, this.state.user)
      .then((result) => {
		alert('User data updated.');
        this.props.history.push("/show/"+this.props.match.params.id)
      })
	  .catch(error => {
   console.log('error:'+error);
 });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              Update User
            </h2>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.user._id}`}>Go Back</Link></h4>
            <form>
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
			  
              <button onClick={this.cancel.bind()} class="btn btn-danger" style={buttonStyle}>Cancel</button>
			  <button onClick={this.onSubmit.bind()}  class="btn btn-default" style={buttonStyle}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
