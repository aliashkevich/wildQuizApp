import React from 'react';
import './ViewSlider.css';
import { Button, Modal, ModalBody } from 'reactstrap';

export default class WireFrameSm extends React.Component {
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
      <div className="wrapper">
        <Button size="lg" color="warning" onClick={this.toggle}>Check here!</Button>
        <Modal className="my-modal-sm" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody onClick={this.toggle} className="modal_wrapper">
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJCQ9BLV9/screen_shot_2019-05-15_at_15.02.34.png" alt="wireframe for mobile"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJPMYRYUC/screen_shot_2019-05-15_at_15.03.15.png" alt="wireframe for mobile"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJSD08C06/screen_shot_2019-05-15_at_15.04.02.png" alt="wireframe for mobile"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJCQYTC2E/screen_shot_2019-05-15_at_15.04.22.png" alt="wireframe for mobile"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJCQ9BPFV/screen_shot_2019-05-15_at_15.04.51.png" alt="wireframe for mobile"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJCQ9BPFV/screen_shot_2019-05-15_at_15.04.51.png" alt="wireframe for mobile"/></div>
                </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}