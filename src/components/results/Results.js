import React from "react";

function Results(props) {
  if (props.answer)
    return (
      <div>
        <form onReset={props.onReset}>
          <h2> correct answer</h2>
          <strong>Score</strong> {props.score}
          <button>Reset</button>
        </form>
      </div>
    );

  return (
    <div>
      <form onReset={props.onReset}>
        <h2> incorrect answer</h2>
        <strong>Score</strong> {props.score}
        <button>Reset</button>
      </form>
    </div>
  );
}

export default Results;
