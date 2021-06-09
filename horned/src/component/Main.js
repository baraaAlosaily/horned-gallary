import React from "react";
import HornedBeast from "./HornedBeast";
import CardGroup from "react-bootstrap/CardGroup";
class Main extends React.Component {
  render() {
    return (
      <CardGroup>
        {this.props.Data.map((beast) => {
          return (
            <HornedBeast
              title={beast.title}
              img={beast.image_url}
              description={beast.description}
              handleModel={this.props.handleModel}
            />
          );
        })}
      </CardGroup>
    );
  }
}

export default Main;
