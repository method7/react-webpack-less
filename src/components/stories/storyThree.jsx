import React, { Component } from "react";

class StoryTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Story Three</h1>
        <ol className="editorial">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Nullam a neque interdum, dignissim libero ac, rhoncus quam.
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Nullam a neque interdum, dignissim libero ac, rhoncus quam.
              </li>
              <li>
                Duis scelerisque nunc vulputate, feugiat dui vitae, maximus mi.
              </li>
              <li>Curabitur ut lorem et erat ullamcorper aliquet.</li>
            </ol>
          </li>
          <li>
            Duis scelerisque nunc vulputate, feugiat dui vitae, maximus mi.
          </li>
          <li>Curabitur ut lorem et erat ullamcorper aliquet.</li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
          tortor non lectus bibendum vulputate elementum ut massa. Aliquam non
          vulputate urna. Mauris sollicitudin ut risus ac hendrerit. Mauris
          suscipit nibh quam, vel feugiat orci volutpat non. Proin nec sem mi.
          Nunc sed euismod purus, sit amet aliquet nibh. Etiam mauris augue,
          cursus vitae tincidunt ac, aliquet eu libero.
        </p>
      </React.Fragment>
    );
  }
}
export default StoryTwo;
