import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h2>{this.props.title}</h2>
          <img src={this.props.img} alt="" title={this.props.title} />
          <p>{this.props.desc}</p>
        </div>
      </main>
    );
  }
}
export default HornedBeast;
