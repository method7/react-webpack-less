import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const { stories, onNavigate, readStory } = this.props;

    return (
      <nav role="navigation" className="navigation-lhs">
        <ol>
          {stories.map(story => (
            <li
              key={story.id}
              className={this.getClassName(readStory, story.id)}
            >
              <a onClick={() => onNavigate(story.id)}>{story.title}</a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  getClassName(readStory, id) {
    return readStory === id ? "selected" : "";
  }
}

export default Navigation;
