import React, { Component } from "react";
import MainElements from "./mainElememts";
import * as util from "../utils.js";
import PropTypes from 'prop-types';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: 'home',
      stories: util.myStories()
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
    const { setModalState } = this.props;
    return (
      <MainElements
        readStory={this.state.story}
        stories={this.state.stories}
        onNavigate={this.navigate}
        setModalState={setModalState}
      />
    );
  }

}

Main.propTypes = {
  setModalState: PropTypes.func.isRequired
}
export default Main;
