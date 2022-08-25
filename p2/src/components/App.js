import React from "react";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Post title="Titulo 1"/>
        <Post title="Titulo 2"/>
        <Post title="Titulo 3"/>
      </div>
    )
  }
}