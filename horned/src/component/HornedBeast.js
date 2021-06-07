import React from "react";

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
      <main>
        <div>
          <h2>{this.props.title}</h2>
          <img
            onClick={this.increaseTheCounter}
            style={{ width: "25rem" }}
            src={this.props.img}
            alt=""
            title={this.props.title}
          />
          <p>{this.props.description}</p>
          <p>
            <span>{"\u2728"}</span> {this.state.count}
          </p>
        </div>
      </main>
    );
  }
}
export default HornedBeast;
