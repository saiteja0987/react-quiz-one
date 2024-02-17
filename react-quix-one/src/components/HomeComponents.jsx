import React,{Component} from "react";
import "./HomeComponent.css"
export default class HomeComponent extends Component {
    render() {
      return (
        <div id="homeComponent">
          <h1 id="QuizAPPheading">Quiz App</h1>
          <button id="playbutton">Play</button>
        </div>
      )
    }
  }