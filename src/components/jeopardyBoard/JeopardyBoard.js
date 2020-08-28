import React from "react";

function JeopardyBoard(props) {
  return (
    <div>
      <strong>Question:</strong> {props.data.question}
      <br />
      <strong>Category:</strong> {props.data.category.title}
      <br />
      <strong>Point Value:</strong> {props.data.value}
      <br />
      <strong>Score</strong> {props.score}
      <form onSubmit={props.onSubmit}>
        <label htmlFor="userAnswer">Answer</label>
        <input
          type="text"
          name="userAnswer"
          value={props.inputValue.userAnswer}
          onChange={props.onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default JeopardyBoard;
