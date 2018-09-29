import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.get('http://localhost:4200/users/delete/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">
              {this.state.user.title}
            </h2>
          </div>
          <div class="panel-body">
            <h4><Link to="/">Back To Users</Link></h4>
            
				<div className="row">
					<div className="fieldTitle">Firstname: </div><div className="fieldValue">{this.state.user.firstname}</div>
				</div>
				<div className="row">
					<div className="fieldTitle">Lastname: </div><div className="fieldValue">{this.state.user.lastname}</div>
				</div>
				<div className="row">
					<div className="fieldTitle">Username: </div><div className="fieldValue">{this.state.user.username}</div>
				</div>
				<div className="row">
					<div className="fieldTitle">Email: </div><div className="fieldValue">{this.state.user.email}</div>
				</div>
				<div className="row">
					<div className="fieldTitle">Gender: </div><div className="fieldValue">{this.state.user.gender}</div>
				</div>
				<div className="row">
					<div className="fieldTitle">Age: </div><div className="fieldValue">{this.state.user.age}</div>
				</div>

            <Link to={`/edit/${this.state.user._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.user._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
