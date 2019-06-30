import React from 'react';
import PropTypes from 'prop-types';
import { Container, FormGroup, Label, Input, FormText } from 'reactstrap';
import './NumberOfQuestions.css';

export default class NumberOfQuestions extends React.Component {
  static defaultProps = {
    setAmountHandler: null,
    defaultNumber: 10,
    maxCount: 50
  }

  static propTypes = {
    setAmountHandler: PropTypes.func,
    defaultNumber: PropTypes.number,
    maxCount: PropTypes.number
  }

  componentDidMount() {
    if (this.props.maxCount < 10) {
      this.setState({
        numOfQuestions: this.props.maxCount
      })
      this.props.setAmountHandler(this.props.maxCount);
    }
  }

  constructor(props) {
    super(props);

    this.setNumberOfQuestionsHandler = this.setNumberOfQuestionsHandler.bind(this);
    this.state = {
      numOfQuestions: 10
    };
  }

  setNumberOfQuestionsHandler(e) {
    let filteredValue = e.currentTarget.value;
    var max = this.props.maxCount > 50 ? 50 : this.props.maxCount;

    // limit max number of question to max, min to 1
    if (filteredValue !== "") {
      filteredValue = filteredValue > max ? max : filteredValue;
      filteredValue = filteredValue < 1 ? 1 : filteredValue;
    }

    this.setState({
      numOfQuestions: filteredValue
    });

    if (this.props.setAmountHandler != null) {
      this.props.setAmountHandler(filteredValue);
    }
  }

  render() {
    return (
      <Container id="select-amount" className="text-center">
        <FormGroup>
          <Label for="number-of-questions" className="setting-text text-center">Number of questions:</Label>
          <Input id="number-of-questions"
            type="number"
            value={this.state.numOfQuestions}
            maxLength={2}
            min={1}
            max={this.props.maxCount}
            onChange={this.setNumberOfQuestionsHandler} />
          <FormText>{`Specify number of questions (no more than ${this.props.maxCount > 50 ? 50 : this.props.maxCount}).`}</FormText>
        </FormGroup>
      </Container>
    );
  }
}
