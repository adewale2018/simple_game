import React, { Component } from "react";
import QuizOptions from "./QuizOptions";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
    let riddle = {
      resultsArray: [6, 7, 8, 9],
      field1: 5,
      field2: 8,
      answer: 15
    };
    this.state = { riddle };
  }
  renderOptions() {
    return (
      <div className='options'>
        <QuizOptions />
        <QuizOptions />
        <QuizOptions />
      </div>
    );
  }
  render() {
    return (
      <div className='quiz'>
        <div className='quiz-content'>
          <p className='question'>
            What is the sum of <span className='text-info'>5</span> and{" "}
            <span className='text-info'>10</span> ?{" "}
          </p>
          {this.renderOptions()}
          <div className='play-again'>
            <a className='button'>Play Again</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
