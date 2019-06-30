import React from 'react';
import './ViewSlider.css';
import TechModal from './TechModal';
import { StaggeredMotion } from 'react-motion';
import { Container } from 'reactstrap';
import { Button } from 'reactstrap';
import WireFrameLg from './WireFrameLg';

class ViewSlide extends React.Component {
  render() {
    const isActive = this.props.active ? "active" : "";
    const classes = "ViewSlide " + isActive;
    return (
      <div
        style={this.props.style}
        className={classes}
        onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}

class ViewSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      activeSlideIndex: 0,
      // Working on a better version where you just pass children with a triggers and x prop.
      slides: [
        {
          triggers: 1,
          x: 0,
          content: (
            <Container className="ppt_container">
              <h1>How we built this App</h1>
            </Container>

          )
        },
        {
          triggers: 2,
          x: 100,
          content: (
            <Container className="ppt_container">
              <h1>What technologies we used</h1>
              <TechModal />
            </Container>
          )
        },
        {
          triggers: 3,
          x: 200,
          content: (
            <Container className="ppt_container">
              <h1>WireFrame</h1>
              <WireFrameLg />
            </Container>
          )
        },
        {
          triggers: 0,
          x: 300,
          content: (
            <Container className="ppt_container_code">
              <div className="code_editor">
                <code contentEditable="true">
                  <p>while(project)&#x7B;</p>
                  <p>  coffee();</p>
                  <p>  code();</p>
                  <p>  repeat();</p>
                  <p>&#x7D;</p>
                </code>
              </div>
            </Container>
          )
        },
        {
          triggers: 0,
          x: 500,
          content: (
            <h1>Secret slide!</h1>
          )
        },
      ]
    }

    // this.toggle = this.toggle.bind(this);
  }
  setActiveSlide(slideIndex) {
    this.setState({ activeSlideIndex: slideIndex });
  }

  // toggle() {
  //   this.setState(prevState => ({
  //     modal: !prevState.modal
  //   }));
  // }

  render() {
    const slides = this.state.slides;
    return (
      <StaggeredMotion
        defaultStyles={slides}
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? { x: -(this.state.activeSlideIndex * 100) }
            : { x: prevInterpolatedStyles[i - 1].x + 100 }
        })}>
        {interpolatingStyles =>
          <div className="ViewSlider">
            {interpolatingStyles.map((style, i) => {
              const active = i === this.state.activeSlideIndex,
                slide = this.state.slides[i];
              return (
                <ViewSlide
                  // modal={this.state.modal}
                  style={{ left: `${style.x}%` }}
                  active={active}
                  key={i}
                // onClick={this.setActiveSlide.bind(this, slide.triggers)}
                >
                  <Container className="ppt_container">
                    <h1>{slide.content}</h1>
                    <Button className="circle-button _smBtn" onClick={this.setActiveSlide.bind(this, slide.triggers)}> <i className="fas fa-angle-double-right"></i> </Button>
                  </Container>
                </ViewSlide>
              )
            }
            )}
          </div>
        }
      </StaggeredMotion>
    )
  }
}

export default ViewSlider;
