import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Dialog extends Component {
  render() {
    const { isOpen, onClose, message } = this.props;
    return (
      <TransitionGroup component={null}>
        {isOpen && (
          <CSSTransition classNames="dialog" timeout={300}>
            <div className="dialog--overlay" onClick={onClose}>
              <div className="dialog">{message}</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default Dialog;
