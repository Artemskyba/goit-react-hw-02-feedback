import { Component } from "react";
import { FeedbaksWrapper} from "./App.styled";
import { Section } from "./section";
import { Statistics } from "./statistiks";
import { FeedbackOptions } from "./feedkack-options";

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  increment = (e) => {
    this.setState(prevState => {
      const name = e.target.name
      return {
        [name]: prevState[name] + 1,
      }
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = total ? Math.round((good / total) * 100) : 0;
    return (
      <FeedbaksWrapper>
        <Section title={"Pleaseleave feebback"}>
          <FeedbackOptions onLeaveFeedback={this.increment}/>
        </Section>
        <Section title={"Statistics"}>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive}/>
        </Section>
      </FeedbaksWrapper>
    )
  }
};
