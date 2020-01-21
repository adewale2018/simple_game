import React, { Component } from "react";
import App from './../App';

class Quiz extends Component {
  render() {
    return (
      <div className='quiz'>
        <div className='quiz-content'>
          <p className='question'>
            What is the sum of <span className='text-info'>5</span> and{" "}
            <span className='text-info'>10</span> ?{" "}
          </p>
          <div className='options'>
            <div className='fields'>
              <div className='field-block'>20</div>
            </div>
            <div className='fields'>
              <div className='field-block'>30</div>
            </div>
            <div className='fields'>
              <div className='field-block'>40</div>
            </div>
            <div className='fields'>
              <div className='field-block'>50</div>
            </div>
          </div>
          <div className="play-again">
            <a className="button">Play Again</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
