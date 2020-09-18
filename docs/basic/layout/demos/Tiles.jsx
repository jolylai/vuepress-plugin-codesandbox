import React from 'react';
import './Tiles.css';

export default () => (
  <div className="tile tile-ancestor">
    <div className="tile tile-vertical tile-8 bg-blue">
      <div className="tile">
        <div className="tile tile-parent tile-vertical">
          <article className="tile tile-child notification tile-primary">
            <p className="title">Vertical...</p>
            <p className="subtitle">Top tile</p>
          </article>
          <article className="tile tile-child notification tile-warning">
            <p className="title">...tiles</p>
            <p className="subtitle">Bottom tile</p>
          </article>
        </div>
        <div className="tile tile-parent">
          <article className="tile tile-child notification tile-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image tile-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile tile-parent">
        <article className="tile tile-child notification tile-danger">
          <p className="title">Wide tile</p>
          <p className="subtitle">Aligned with the right tile</p>
          <div className="content"></div>
        </article>
      </div>
    </div>
    <div className="tile tile-parent bg-green">
      <article className="tile tile-child notification tile-success">
        <div className="content">
          <p className="title">Tall tile</p>
          <p className="subtitle">With even more content</p>
          <div className="content"></div>
        </div>
      </article>
    </div>
  </div>
);
