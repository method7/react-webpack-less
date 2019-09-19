import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, StoryOne, StoryTwo, StoryThree, ErrorPage } from "../stories";

class GetStory extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/one" component={StoryOne} />
        <Route path="/two" component={StoryTwo} />
        <Route path="/three" component={StoryThree} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default GetStory;
