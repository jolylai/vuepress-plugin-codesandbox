import React from 'react';
import { Carousel } from 'chengyou';

const pages = [1, 2, 3, 4, 5];

function Basic() {
  return (
    <Carousel style={{ width: 300, height: 180 }}>
      {pages.map((item: any, index: number) => {
        return (
          <div
            className="swiper-demo-simple-h"
            style={{ background: 'skyblue' }}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </Carousel>
  );
}

export default Basic;
