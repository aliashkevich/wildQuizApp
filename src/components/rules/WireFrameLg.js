import React from 'react';
import './ViewSlider.css';
import { Button, Modal, ModalBody } from 'reactstrap';

export default class WireFrameLg extends React.Component {
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
        <Modal className="my-modal-lg" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody onClick={this.toggle} className="modal_wrapper">
            <div className="container d-flex justify-content-center">
              <img className="_wireframeBig" src="https://i.imgur.com/8Ziewbl.png" alt="wireframe" />
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}