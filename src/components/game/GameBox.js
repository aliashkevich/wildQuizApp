import React from 'react';
import {
  Button, CardTitle, CardText, CardBody,
  CardHeader, CardFooter, Row, Col
} from 'reactstrap';
import './GameBox.css';
import Question from './Question';
import Answers from './Answers';
import ProgressBar from './ProgressBar';

const GameBox = ({ quiz, score, clickButton, answered, nextButton, amount, progress, currentQuiz }) => {
  // FOR DECODING
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  const nextQuestionButton = [];
  if (answered) {
    if (amount === (currentQuiz + 1)) {
      nextQuestionButton.push(
        <Button key="next" className="next" size="lg" onClick={(e) => {
          e.preventDefault();
          nextButton(e);
        }}>Finish</Button>
      )
    } else {
      nextQuestionButton.push(
        <Button key="next" className="next" size="lg" onClick={(e) => {
          e.preventDefault();
          nextButton(e);
        }}>Next</Button>
      )
    }
  }

  return (
    <div className="Jumbo-container p-5">
      <Row className="d-flex justify-content-center">
        <Col className="box-container" xl="8" lg="8" md="10" sm="12" xs="12">
          <CardHeader tag="h3" className="card">
            <CardTitle className="text-white d-flex justify-content-between">
              <Button size="md" color="light" className="m-1 d-inline" active outline disabled><h1 className="num"> {currentQuiz + 1} </h1>/ {amount} </Button>
              <Button color="light" active outline disabled>Score: <h1 className="num">{score}</h1></Button>
            </CardTitle>
          </CardHeader>
          <ProgressBar amount={amount} progress={progress} />
          <CardBody className="bg-light">
            <CardText>
              <Button outline color="info" className="m-1 d-inline _category" disabled>{quiz.category}</Button>
              <Button outline color="info" className="m-1 d-inline _difficulty" disabled>Difficulty : {quiz.difficulty}</Button>
            </CardText>
            <Question question={renderHTML(quiz.question)} />
            <Answers correct_answer={quiz.correct_answer} incorrect_answers={quiz.incorrect_answers} clickButton={clickButton} answered={answered} />
          </CardBody>
          <CardFooter className="card d-flex flex-row-reverse">
            {nextQuestionButton}
            <Button style={{ visibility: 'hidden' }}>a</Button>
          </CardFooter>
        </Col>
      </Row>
    </div>
  );
}

export default GameBox;
