import React from 'react';
import { Container, Button } from 'reactstrap';
import './Results.css';

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.tryAgain = this.tryAgain.bind(this);
    this.state = {
      score: this.props.score
    }
  }

  tryAgain() {
    if (this.props.again != null) {
      this.props.again();
    }
  }

  render() {
    return (
      <Container id="score" className="text-center">
        <div className="results">
          <h1 className="text-center">Your score: {this.state.score} points</h1>
          <Button className="circle-button" onClick={this.tryAgain}>Try Again?</Button>
        </div>
      </Container>
    )
  }
}
