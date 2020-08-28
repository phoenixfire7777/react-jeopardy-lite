import React, { Component } from "react";
import JeopardyBoard from "../jeopardyBoard/JeopardyBoard";
import Results from "../results/Results";
//import our service
import JeopardyService from "../../services/jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      correctAnswer: true,
      submitted: false,
      data: { category: {} },
      score: 0,
      formData: {
        UserAnswer: "",
      },
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //   updates the users answer
  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({
      formData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.formData.userAnswer === this.state.data.answer) {
      let newScore = Number(this.state.score + this.state.data.value);
      //   this.getNewQuestion();
      this.setState({
        correctAnswer: true,
        submitted: true,
        score: newScore,
        formData: {
          answer: "",
        },
      });
    } else if (this.state.formData.userAnswer !== this.state.data.answer) {
      let newScore = Number(this.state.score - this.state.data.value);
      //   this.getNewQuestion();

      this.setState({
        correctAnswer: false,
        submitted: true,
        score: newScore,
      });
    }
  };
  handleReset = (event) => {
    this.getNewQuestion();
    this.setState({
      submitted: false,
      formData: {
        answer: "",
      },
    });
  };

  //display the results on the screen
  render() {
    if (this.state.submitted) {
      return (
        <Results
          score={this.state.score}
          onreset={this.handleReset}
          answer={this.state.correctAnswer}
        />
      );
    }

    return (
      <JeopardyBoard
        onSubmit={this.handleSubmit}
        data={this.state.data}
        score={this.state.score}
        inputValue={this.state.formData}
        onChange={this.handleChange}
      />
    );
  }
}
export default Jeopardy;
