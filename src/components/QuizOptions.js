import React from "react";

const QuizOptions = ({ option, checkResults }) => {
  const callParentsOption = props => {
    return checkResults(option);
  }
  return (
    <div className='fields animated zoomIn' onClick={callParentsOption}>
      <div className='field-block'>{option}</div>
    </div>
  );
};

export default QuizOptions;
