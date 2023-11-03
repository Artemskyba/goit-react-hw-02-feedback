import styled from "styled-components";

const FeedbackButton = ({onUpdate, name, children}) => {
  return(
    <button onClick={onUpdate} name={name}>{children}</button>
  )
};

const Button = styled(FeedbackButton)``;

export const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <div>
      <Button onUpdate={onLeaveFeedback} name={"good"}>good</Button>
      <Button onUpdate={onLeaveFeedback} name={"neutral"}>neutral</Button>
      <Button onUpdate={onLeaveFeedback} name={"bad"}>bad</Button>
    </div>
  )
}

