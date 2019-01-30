import React from 'react';
import axios from 'axios';
import { UncontrolledCollapse, Button, CardBody } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomInput, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

class Place_id extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      placeData: {}
    };

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillMount(){
    const placeId = this.props.match.params.id;
    axios.get(`/places/${placeId}`)
      .then( res => {
        this.setState({placeData: res.data});
        console.log(res.data)
      })
  };

  render() {
    return (
      <div>
        <Button className="register" id="toggler" onClick={this.toggle}>
          Some Place!
        </Button>
  
        <div className="middle_all">
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="pop_windows">
            <ModalHeader toggle={this.toggle}>Place Title!</ModalHeader>
              <Form onSubmit = {this._handleSubmit}>
                <ModalBody>
                  <div>Owner Matching %: {this.state.placeData.matchPercent * 100}%</div>

                  <div>Price: ${this.state.placeData.price}</div>
                  
                  <div>Address: {this.state.placeData.street_number} {this.state.placeData.street_name}, {this.state.placeData.city}, {this.state.placeData.postal_code}</div>

                  <div>Building Type: {this.state.placeData.type}</div>

                  <div># of Baths: {this.state.placeData.number_of_bathrooms}</div>

                </ModalBody>
              <ModalFooter>
                <Button type="submit" className="button_char" onClick={this.toggle}>Ask to be Roomys</Button>{' '}
                <Button className="cancel" onClick={this.toggle}>CANCEL</Button>
              </ModalFooter>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
  
}

export default Place_id;