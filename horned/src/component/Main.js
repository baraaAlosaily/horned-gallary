import React from "react";
import HornedBeast from "./HornedBeast";
import CardGroup from "react-bootstrap/CardGroup";
import Filter from "./Filter";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFiltering: this.props.Data,
    };
  }
  filterResult = (value) => {
    let newFilteredData = [];

    newFilteredData = this.props.Data.filter((beast) => value == beast.horns);
    if (value == 0) {
      newFilteredData = this.props.Data;
    }
    this.setState({
      dataFiltering: newFilteredData,
    });
  };

  render() {
    return (
      <div>
        <Filter filterResult={this.filterResult} />
        <CardGroup>
          {this.state.dataFiltering.map((beast) => {
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
      </div>
    );
  }
}

export default Main;
