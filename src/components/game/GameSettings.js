import React from 'react';
import { Container, Button } from 'reactstrap';
import SelectCategory from './SelectCategory';
import NumberOfQuestions from './NumberOfQuestions';
import SelectDifficulty from './SelectDifficulty';
import './GameSettings.css';


export default class GameSettings extends React.Component {
  static defaultProps = {
    url: 'https://opentdb.com/'
  }

  constructor(props) {
    super(props);

    this.generateAPIRequestURL = this.generateAPIRequestURL.bind(this);
    this.getSessionToken = this.getSessionToken.bind(this);
    this.setCategoryHandler = this.setCategoryHandler.bind(this);
    this.setAmountHandler = this.setAmountHandler.bind(this);
    this.setDifficultyHandler = this.setDifficultyHandler.bind(this);
    this.customizeGame = this.customizeGame.bind(this);
    this.checkAmountOfAvailableQuestions = this.checkAmountOfAvailableQuestions.bind(this);

    this.state = {
      gameSetting: 'default', // 'default', 'selectCategory', 'selectDifficulty', 'selectAmount'
      category: 'any',
      difficulty: 'any',
      amount: 10,
      token: '', // by appending a Session Token to a API Call, the API will never give you the same question twice. 
      availableQuestionsList: [], // after category is selected ask API for available count of questions in DB for specific category
      availableQuestions: 50
    };
  }

  componentDidMount() {
    this.getSessionToken();
  }

  getSessionToken() {
    fetch(this.props.url + 'api_token.php?command=request')
      .then(res => res.json())
      .then(data => { this.setState({ token: data.token }) })
      .catch(error => console.log(error));
  }

  setCategoryHandler(category) {
    this.setState({
      category: category,
      gameSetting: 'selectDifficulty'
    }, this.checkAmountOfAvailableQuestions)
  }

  setAmountHandler(amount) {
    this.setState({
      amount: amount
    })
  }

  setDifficultyHandler(difficulty) {
    this.setState({
      difficulty: difficulty,
      gameSetting: 'selectAmount'
    })

    if (this.state.category !== "any") {
      const param = `total_${difficulty}_question_count`;
      const availableQuestionsCount = this.state.availableQuestionsList[param];
      this.setState({
        availableQuestions: availableQuestionsCount
      })
    }
  }

  generateAPIRequestURL() {
    const url = this.props.url
      + "api.php?token=" + this.state.token
      + (this.state.category === 'any' ? "" : "&category=" + this.state.category)
      + (this.state.difficulty === 'any' ? "" : "&difficulty=" + this.state.difficulty)
      + "&amount=" + (this.state.amount !== "" ? this.state.amount : "10");

    if (this.props.getURL != null) {
      this.props.getURL(url);
    }
  }

  customizeGame() {
    this.setState({
      gameSetting: 'selectCategory'
    })
  }

  checkAmountOfAvailableQuestions() {
    if (this.state.category !== "any") {
      fetch(this.props.url + "api_count.php?category=" + this.state.category)
        .then(res => res.json())
        .then(data => { this.setState({ availableQuestionsList: data.category_question_count }) })
        .catch(error => console.log(error));
    }
  }

  render() {
    var gameSettings;
    switch (this.state.gameSetting) {
      case 'default':
        gameSettings = <Container className="welcome">
          <p className="welcome">Welcome to Wild Quiz</p>
          <div className="game">
            <Button className="game" color="success" size="lg" onClick={this.generateAPIRequestURL}>Play</Button>
            <Button className="game" color="success" size="lg" onClick={this.customizeGame}>Custom Game</Button>
          </div>
        </Container>
        break;

      case 'selectCategory':
        gameSettings = <SelectCategory setCategoryHandler={this.setCategoryHandler} />
        break;

      case 'selectDifficulty':
        gameSettings = <SelectDifficulty setDifficultyHandler={this.setDifficultyHandler} />
        break;

      case 'selectAmount':
        gameSettings = <div className="selectAmount">
          <NumberOfQuestions setAmountHandler={this.setAmountHandler} maxCount={this.state.availableQuestions} />
          <Button className="game" size="lg" color="success" onClick={this.generateAPIRequestURL}>Play</Button>
        </div>
        break;

      default:
        gameSettings = <div>Default</div>
        break;
    }

    return (
      <div className="game-settings text-center">
        {gameSettings}
      </div>
    )
  }
}
