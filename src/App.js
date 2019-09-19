import React, { Component } from "react";
import Main from "./components/layout/main";
import Header from "./components/elements/header";
import Footer from "./components/elements/footer";
import Dialog from "./components/patterns/dialog";
import "./App.less";
import { Home, StoryOne, StoryTwo, StoryThree } from "./components/stories";

class App extends Component {
  state = {
    stories: [
      { id: 0, url: "/", title: "Home", value: Home },
      { id: 1, url: "/one", title: "Story one", value: StoryOne },
      { id: 2, url: "/two", title: "Story two", value: StoryTwo },
      { id: 3, url: "/three", title: "Story three", value: StoryThree }
    ],
    story: null,
    dialogOpen: true
  };

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

  getStory = () => {
    debugger;
    return 0;
  };

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
        />
        <Footer />
        <Dialog
          isOpen={false}
          onClose={this.dialogClose}
          message={this.getMessage()}
        />
      </React.Fragment>
    );
  }

  getMessage() {
    return <h1>Hello Dialog</h1>;
  }

  dialogClose() {
    console.log("dialog CLOSE");
  }
}

export default App;
