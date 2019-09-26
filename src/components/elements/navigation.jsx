import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

class Navigation extends Component {
  render() {
    const { stories, onNavigate, readStory, setModalState } = this.props;

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
          <li>
            <a
              onClick={() => {
                setModalState(true);
                return false;
              }}
            >
              activate Welcome modal
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setModalState(true, "goodBye");
                return false;
              }}
            >
              activate Good Bye modal
            </a>
          </li>
        </ol>
      </nav>
    );
  }
  propTypes = {
    stories: PropTypes.array,
    onNavigate: PropTypes.func,
    readStory: PropTypes.number,
    setModalState: PropTypes.func
  }
}

export default Navigation;
