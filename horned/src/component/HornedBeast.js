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

  render() {
    return (
      <div>
        <Card
          style={{
            width: "15rem",
            background: "black",
            color: "white",
            margin: "1rem",
          }}
        >
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Img
              style={{ width: "13rem", height: "13rem" }}
              src={this.props.img}
              alt=""
              title={this.props.title}
              onClick={() => {
                this.increaseTheCounter();
                this.props.handleModel(
                  this.props.title,
                  this.props.img,
                  this.props.description
                );
              }}
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
