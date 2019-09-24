import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GetStory from "../stories/getStory";
import Navigation from "../elements/navigation";

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
                BANG
                <GetStory />
              </div>
            </section>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainElements;
