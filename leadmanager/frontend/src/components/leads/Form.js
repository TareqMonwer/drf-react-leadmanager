import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads';

export class Form extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="my-3 card p-3 rounded-0">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">name</span>
            </div>
            <input
              type="text" 
              className="form-control" 
              name="name" value={name} 
              onChange={this.onChange} 
            />
          </div>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">email</span>
            </div>
            <input
              type="email" 
              className="form-control" 
              name="email" value={email} 
              onChange={this.onChange} 
            />
          </div>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">message</span>
            </div>
            <textarea 
              className="form-control" 
              name="message" value={message} 
              onChange={this.onChange} 
            />
          </div>
          <input type="submit" value="Add Lead" className="btn btn-success" />
        </form>
      </div>
    )
  }
}

export default connect(null, { addLead })(Form);
