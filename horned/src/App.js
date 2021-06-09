import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./component/data.json";
import SelectedBeast from "./component/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: data,
      show: false,
      selectedBeastTitle: "",
      selectedBeastImg: "",
      selectedBeastDesc: "",
    };
  }

  handleModel = (title, img, desc) => {
    console.log("title", img, desc);
    this.setState({
      show: !this.state.show,
      selectedBeastTitle: title,
      selectedBeastImg: img,
      selectedBeastDesc: desc,
    });
  };
  changeClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        {/* passing our data to our component */}
        {/* pass function that will allow to use to change the state inside the app component*/}
        <Main Data={this.state.Data} handleModel={this.handleModel} />
        <SelectedBeast
          show={this.state.show}
          title={this.state.selectedBeastTitle}
          img={this.state.selectedBeastImg}
          desc={this.state.selectedBeastDesc}
          close={this.changeClose}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
