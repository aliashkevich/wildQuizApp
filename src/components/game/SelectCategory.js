import React from 'react';
import PropTypes from 'prop-types';
import { Container, CardColumns, Card, CardBody, Spinner } from 'reactstrap';
import './SelectCategory.css';

export default class SelectCategory extends React.Component {
  static defaultProps = {
    setCategoryHandler: null,
    defaultCategory: "any",
    defaultCategoryText: "Any Category"
  }

  static propTypes = {
    setCategoryHandler: PropTypes.func,
    defaultCategory: PropTypes.string,
    defaultCategoryText: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.selectCategoryHandler = this.selectCategoryHandler.bind(this);

    this.state = {
      categoryList: [],
      selectedCategory: "any",
      loading: true
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  getCategoryList() {
    fetch("https://opentdb.com/api_category.php")
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryList: data.trivia_categories,
          loading: false
        })
      })
      .catch(error => console.log(error));

  }

  selectCategoryHandler(e) {
    if (e) {
      e.preventDefault();

      var categoryId = e.target.id ? e.target.id.replace("category-", "") : "any";

      this.setState({
        selectedCategory: categoryId
      });

      if (this.props.setCategoryHandler != null) {
        this.props.setCategoryHandler(categoryId);
      }
    }
  }

  render() {
    var categoryId = "category-";
    if (this.state.loading) {
      return (
        <div className="text-center spinners">
          <Spinner type="grow" />
          <Spinner type="grow" />
          <Spinner type="grow" />
        </div>
      )
    } else {
      return (
        <Container id="select-category">
          <div className="setting-text text-center">
            <p>Select the category of questions</p>
          </div>
          <CardColumns className="categories">
            <a className="category-card" href="/" key={this.props.defaultCategoryText} id={categoryId + this.props.defaultCategory} onClick={this.selectCategoryHandler}>
              <Card className="category" onClick={this.selectCategoryHandler}>
                <CardBody id={categoryId + this.props.defaultCategory}>{this.props.defaultCategoryText}</CardBody>
              </Card>
            </a>
            {this.state.categoryList.map((item) =>
              <a className="category-card" href="/" key={item.name} id={categoryId + item.id} onClick={this.selectCategoryHandler}>
                <Card className="category" onClick={this.selectCategoryHandler}>
                  <CardBody id={categoryId + item.id}>
                    {item.name}
                  </CardBody>
                </Card>
              </a>
            )}
          </CardColumns>
        </Container>
      );
    }
  }
}
