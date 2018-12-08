import React, { Component } from 'react';

export default class ApiSend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


handleChange(event) {
    this.setState({email: event.target.value});
    }

handleSubmit(event) {
    event.preventDefault();
    let email = this.state.email;
    fetch('https://python-api3.herokuapp.com/collections/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:email})
    }).then((res) => res.json())
    .then(responseData => {return responseData;})
    .catch((err)=>console.log(err))
    
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
