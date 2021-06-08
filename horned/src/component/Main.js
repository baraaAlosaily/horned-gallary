import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
class Main extends React.Component {
  render() {
    console.log("hornedbeast", this.props);
    return (
      <div>
        {data.map((beast) => {
          return (
            <HornedBeast
              title={beast.title}
              img={beast.image_url}
              description={beast.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
