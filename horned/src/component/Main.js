import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import CardGroup from "react-bootstrap/CardGroup";

class Main extends React.Component {
  render() {
    return (
      <CardGroup>
        {data.map((beast) => {
          return (
            <HornedBeast
              title={beast.title}
              img={beast.image_url}
              description={beast.description}
            />
          );
        })}
      </CardGroup>
    );
  }
}

export default Main;
