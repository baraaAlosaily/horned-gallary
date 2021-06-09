import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} dontShow={this.props.dontShow}>
          <Modal.Header>
            <Modal.Title>HornedBeast</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img
                variant="top"
                src={this.props.img}
                alt={this.props.title}
                title={this.props.title}
              />

              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default SelectedBeast;
