import React, { Component } from "react";

class StoryOne extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Story One</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
          tortor non lectus bibendum vulputate elementum ut massa. Aliquam non
          vulputate urna. Mauris sollicitudin ut risus ac hendrerit. Mauris
          suscipit nibh quam, vel feugiat orci volutpat non. Proin nec sem mi.
          Nunc sed euismod purus, sit amet aliquet nibh. Etiam mauris augue,
          cursus vitae tincidunt ac, aliquet eu libero.
        </p>
        <ul className="editorial">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Nullam a neque interdum, dignissim libero ac, rhoncus quam.
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Nullam a neque interdum, dignissim libero ac, rhoncus quam.
              </li>
              <li>
                Duis scelerisque nunc vulputate, feugiat dui vitae, maximus mi.
              </li>
              <li>Curabitur ut lorem et erat ullamcorper aliquet.</li>
            </ul>
          </li>
          <li>
            Duis scelerisque nunc vulputate, feugiat dui vitae, maximus mi.
          </li>
          <li>Curabitur ut lorem et erat ullamcorper aliquet.</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default StoryOne;
