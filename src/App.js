import React from "react";
import "./App.css";
import Container from "./components/Container";
import Quote from "./components/Quote";
import Textarea from "./components/Textarea";
import Timer from "./components/Timer";

class App extends React.Component {
  state = {
    quote: "",
    duration: 0,
    value: "",
    isTimer: false
  };

  fetchData = async () => {
    const res = await fetch("http://api.quotable.io/random");
    const data = await res.json();
    return data.content;
  };

  getQuote = async val => {
    const quote = await this.fetchData();
    this.setState({ ...this.state, quote, value: val ? val : "" });
  };

  componentDidMount() {
    this.getQuote();
  }

  changeHandler = event => {
    const { value } = event.target;
    let isDone = true;
    this.state.quote.split("").forEach((q, i) => {
      isDone = isDone && q === value.split("")[i];
    });

    this.setState({
      ...this.state,
      value,
      isTimer: true
    });

    if (isDone) {
      this.getQuote();
    }

    if (!this.state.isTimer) {
      this.startTimer();
    }
  };

  startTimer = () => {
    const date = new Date();
    setInterval(() => {
      let startTime = Math.floor((new Date() - date) / 1000);
      this.setState({
        ...this.state,
        duration: startTime
      });
    }, 1000);
  };

  render() {
    return (
      <Container className="center">
        <Timer duration={this.state.duration} />
        <Quote quote={this.state.quote} value={this.state.value} />
        <Textarea value={this.state.value} onChange={this.changeHandler} />
      </Container>
    );
  }
}
export default App;
