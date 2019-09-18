import React, { Component } from "react";
import GetStory from "../stories/getStory";
import Navigation from "../patterns/navigation";

class Main extends Component {
  render() {
    const { stories, onNavigate, readStory } = this.props;
    return (
      <div role="main">
        <div className="column-1">
          <Navigation
            readStory={readStory}
            stories={stories}
            onNavigate={onNavigate}
          />
        </div>
        <div className="column-2">
          <section>
            <div className="page">
              <GetStory
                viewStory={stories[readStory].value || stories[0].value}
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
