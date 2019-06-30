import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';
import './GameBox.css';

export default class Answers extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.answered) {  // if already answered, don't update
      return false;
    }
    return true;
  }

  render() {
    // DESTRUCTURING
    const { correct_answer, incorrect_answers, clickButton } = this.props;

    // FOR SHUFFLE BUTTONS
    let list = [];

    const answerList = [].concat(correct_answer).concat(incorrect_answers);
    for (let i = 0; i < answerList.length; i++) {
      if (i === 0) {  // correct_answer
        list.push(
          <Col lg="6" sm="12" className="answer" key={i}>
            <Button className="m-1 answer-btn" style={{ backgroundColor: '#3cc3b2' }} size="lg" block id="ans" key={i} data-answer="correct"
              onClick={(e) => {
                e.preventDefault();
                clickButton(e, i);
              }}
              dangerouslySetInnerHTML={{ __html: answerList[i] }}></Button>
          </Col>
        )
      } else {  // incorrect_answers
        list.push(
          <Col lg="6" sm="12" className="answer" key={i}>
            <Button className="m-1 answer-btn" style={{ backgroundColor: '#3cc3b2' }} size="lg" block id="ans" key={i} data-answer="incorrect"
              onClick={(e) => {
                e.preventDefault();
                clickButton(e, i);
              }}
              dangerouslySetInnerHTML={{ __html: answerList[i] }}></Button>
          </Col>
        )
      }
    }

    const shuffle = (array) => {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    return (
      <Card className="border-0 bg-light">
        <Row>
          {shuffle(list)}
        </Row>
      </Card>
    )
  }
}
