import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CICD Using Github Runner</h2>
        </div>
        <p className="App-intro">
          Created Pipeline using Github Runner, and hosted on AWS Using Nginx
          Server.
        </p>
      </div>
    )
  }
}

export default App
