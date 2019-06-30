import React from 'react';
import './ViewSlider.css';
import { Row } from 'reactstrap';
import { Button, Modal, ModalBody } from 'reactstrap';

export default class TechModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button size="lg" color="warning" onClick={this.toggle}>Check here!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody onClick={this.toggle}>
            <div className="tech_logos">
              <Row>
                <div className="img_wrapper">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/492px-Adobe_XD_CC_icon.svg.png" alt="adobe xd" />
                  <p className="_tech">Adobe XD</p>
                </div>
              </Row>
              <hr />
              <Row>
                  <div className="img_wrapper">
                    <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="html5" />
                    <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="css3" />
                    <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="javascript" />
                    <img src="https://cdn.svgporn.com/logos/react.svg" alt="react" />
                  </div>
              </Row>
              <Row>
                <p className="_tech">HTML5 / CSS3 / javascript / react.js</p>
              </Row>
              <hr />
              <Row>
                <div className="img_wrapper">
                  <img src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="bootstrap" />
                  <img src="https://madewithnetwork.ams3.cdn.digitaloceanspaces.com//spatie-space-production/1901/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png" alt="reactstrap" />
                </div>
              </Row>
              <Row>
                <p className="_tech">bootstrap / reactstrap</p>
              </Row>
              <hr />
              <Row>
                <div className="img_wrapper">
                  <img src="https://cdn.svgporn.com/logos/npm.svg" alt="npm" />
                  <img src="https://cdn.svgporn.com/logos/git.svg" alt="git" />
                  <img src="https://cdn.svgporn.com/logos/github-icon.svg" alt="github" />
                </div>
              </Row>
              <Row>
                <p className="_tech">npm / git / github</p>
              </Row>
              <hr />
              <Row>
                <div className="img_wrapper">
                  <img src="https://cdn.svgporn.com/logos/netlify.svg" alt="netlify" />
                  <p className="_tech">netlify</p>
                </div>
              </Row>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}