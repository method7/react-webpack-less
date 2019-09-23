import React, { Component } from "react";
import Modal from "./components/modal/modal";
import Main from "./components/layout/main";
import Header from "./components/elements/header";
import Footer from "./components/elements/footer";
import "./App.less";
import { Home, StoryOne, StoryTwo, StoryThree } from "./components/stories";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false,
      stories: [
        { id: 0, url: "/", title: "Home", value: Home },
        { id: 1, url: "/one", title: "Story one", value: StoryOne },
        { id: 2, url: "/two", title: "Story two", value: StoryTwo },
        { id: 3, url: "/three", title: "Story three", value: StoryThree }
      ],
      story: null
    };
  }

  componentDidMount() {
    const activePage = this.state.stories.filter(obj => {
      return obj.url === window.location.pathname;
    });

    if (activePage.length != 0) {
      this.setState({
        story: activePage[0].url
      });
    }
  }

  navigate = clicked => {
    this.setState({
      story: clicked
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <hr />
        <Main
          stories={this.state.stories}
          readStory={this.state.story}
          onNavigate={this.navigate}
          setModalState={this.setModalState}
        />
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
