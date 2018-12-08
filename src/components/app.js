import React, { Component } from 'react';
import ApiCaller from "./apicaller";
import ApiSend from "./apisend";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Micro example</h1>
        <h3>Fill in form to add email to database</h3>
        <ApiSend />
        <p>These are the emails</p>
        <ApiCaller />
      </div>
    );
  }
}
