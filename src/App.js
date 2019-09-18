import React, { Component } from "react";
import Main from "./components/layout/main";
import Header from "./components/elements/header";
import Footer from "./components/layout/footer";
import Dialog from "./components/patterns/dialog";
import "./App.less";
import { StoryOne, StoryTwo, StoryThree } from "./components/stories";

class App extends Component {
  state = {
    stories: [
      { id: 0, title: "Story one", value: StoryOne },
      { id: 1, title: "Story two", value: StoryTwo },
      { id: 2, title: "Story three", value: StoryThree }
    ],
    story: 0,
    dialogOpen: true
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
