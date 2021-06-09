import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class Filter extends Component {
  render() {
    return (
      <div>
        <Form.Control
          onChange={(e) => this.props.filterResult(e.target.value)}
          as="select"
        >
          <option value="0">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">More</option>
        </Form.Control>
      </div>
    );
  }
}

export default Filter;
