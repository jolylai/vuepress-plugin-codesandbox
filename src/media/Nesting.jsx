import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import './index.css';

const Icon = ({ style = {} }) => (
  <svg
    style={style}
    class="bd-placeholder-img mr-3"
    width="64"
    height="64"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    role="img"
    aria-label="Placeholder: 64x64"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
      64x64
    </text>
  </svg>
);

export function index() {
  return (
    <div className="media">
      <Icon style={{ marginRight: 16, alignSelf: 'center' }} />
      <div className="media-body">
        <h5 className="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
        <div className="media">
          <div className="media-body">
            <h5 className="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
          <Icon style={{ marginRight: 16 }} />
        </div>
      </div>
    </div>
  );
}

export default index;
