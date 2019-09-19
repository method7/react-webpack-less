import React, { Component } from "react";
import { Nav, NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    const { stories, onNavigate, readStory } = this.props;

    return (
      <nav role="navigation" className="navigation-lhs">
        <ol>
          {stories.map(story => (
            <li
              key={story.id}
              className={readStory === story.url ? "selected" : ""}
            >
              <NavLink
                exact={true}
                to={story.url}
                onClick={() => onNavigate(story.url)}
              >
                {story.title}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="badURL" onClick={() => onNavigate("badURL")}>
              404 page
            </NavLink>
          </li>
        </ol>
      </nav>
    );
  }
}

export default Navigation;
