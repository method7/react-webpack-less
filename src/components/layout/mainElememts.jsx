import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GetStory from "../stories/getStory";
import Navigation from "../elements/navigation";
import PropTypes from 'prop-types';

class MainElements extends Component {
  render() {
    const { readStory, stories, onNavigate, setModalState } = this.props;
    return (
      <Router>
        <div role="main">
          <div className="column-1">
            <Navigation
              readStory={readStory}
              stories={stories}
              onNavigate={onNavigate}
              setModalState={setModalState}
            />
          </div>
          <div className="column-2">
            <section>
              <div className="page">
                <GetStory />
              </div>
            </section>
          </div>
        </div>
      </Router>
    );
  }
  propTypes = {
    stories: PropTypes.array,
    onNavigate: PropTypes.func,
    readStory: PropTypes.number,
    setModalState: PropTypes.func
  }
}

export default MainElements;
