import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increaseTheCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  showModal = () => {
    this.props.sowModal({
      name: this.props.title,
      description: this.props.description,
      imgUrl: this.props.img,
    });
  };

  render() {
    return (
      <div>
        <Card bg="Dark" style={{ width: "18rem" }} onClick={this.showModal}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img
              style={{ width: "15rem" }}
              src={this.props.img}
              alt=""
              title={this.props.title}
            />

            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {"\u2728"}
            {this.state.count}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default HornedBeast;
