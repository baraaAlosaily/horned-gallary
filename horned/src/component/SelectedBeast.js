import React from "react";

import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} dontShow={this.props.dontShow}>
        <Modal.Header closeButton onClick={this.props.dontShow}>
          <Modal.Title>HornedBeast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img
              variant="top"
              src={this.props.obj.imgUrl}
              alt={this.props.obj.name}
              title={this.props.obj.name}
            />
          </Card>
          <Card.Body>
            <Card.Title>{this.props.obj.name}</Card.Title>
            <Card.Text>{this.props.obj.description}</Card.Text>
          </Card.Body>
        </Modal.Body>
      </Modal>
    );
  }
}
export default SelectedBeast;
