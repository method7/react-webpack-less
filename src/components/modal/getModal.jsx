import React, { Component } from "react";
import Welcome from "./welcome";
class GetModal extends Component {
  components = {
    welcome: Welcome
  };
  render() {
    const TagName = this.components[this.props.modal];
    return <TagName />;
  }
}
export default GetModal;
