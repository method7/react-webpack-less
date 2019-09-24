import React, { Component } from "react";
import Modal from "./components/modal/modal";
import Main from "./components/layout/main";
import Header from "./components/elements/header";
import Footer from "./components/elements/footer";
import "../styles/App.less";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <hr />
        <Main onNavigate={this.navigate} setModalState={this.setModalState} />
        <Footer />
        <Modal
          setModalState={this.setModalState}
          modalActive={this.state.modalActive}
          Content={this.state.modalContent}
        />
      </React.Fragment>
    );
  }

  setModalState = (bool, content) => {
    content = content || null;
    this.setState({ modalActive: bool, modalContent: content });
  };
}

export default App;
