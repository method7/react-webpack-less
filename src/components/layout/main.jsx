import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GetStory from "../stories/getStory";
import Navigation from "../elements/navigation";

class Main extends Component {
  render() {
    const { stories, onNavigate, readStory, setModalState } = this.props;
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
}

export default Main;
