import React, { Children, cloneElement, useRef, useState } from 'react';

import './style/index.scss';

interface CarouselProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

function setStyle(target: any, styles: any) {
  const { style } = target;

  Object.keys(styles).forEach(attribute => {
    style[attribute] = styles[attribute];
  });
}

function Carousel(props: CarouselProps) {
  const containerRef = useRef();
  const { children, style } = props;

  const [carouselWidth, setCarouselWidth] = useState(300);
  const [containerStyle, setContainerStyle] = useState({});

  const getCarouselRef = (ref: HTMLDivElement) => {
    console.log(containerRef.current);
    if (ref) {
      const carouselWidth = ref.getBoundingClientRect().width;
      // setContainerStyle({ width: Children.count(children) * carouselWidth });
    }

    console.log('carouselWidth: ', carouselWidth);
    // if (containerRef.current) {
    //   setStyle(containerRef.current, {
    //     width: Children.count(children) * carouselWidth,
    //   });
    // }
  };

  const cloneChildren = (children: React.ReactNode) => {
    const length = Children.count(children);

    if (length <= 1) {
      return children;
    }

    const clonedChildren = new Array(length + 2);

    Children.forEach(children, (child: any, index: number) => {
      clonedChildren[index + 1] = child;
      if (index === 0) {
        clonedChildren[length + 1] = child;
      } else if (index === length - 1) {
        clonedChildren[0] = child;
      }
    });

    return clonedChildren;
  };

  const clonedChildren = cloneChildren(children);

  return (
    <div ref={getCarouselRef} style={style} className="chengyou-carousel">
      <div
        ref={containerRef}
        className="chengyou-carousel-container"
        // style={{ width: Children.count(clonedChildren) * carouselWidth }}
        style={containerStyle}
      >
        {Children.map(children, (child: any, index: number) =>
          cloneElement(child, {
            key: index,
            style: {
              float: 'left',
              height: '100%',
              width: carouselWidth,
              // todo delete
              background: 'skyblue',
              textAlign: 'center',
              // verticalAlign:
              fontSize: 24,
            },
          }),
        )}
      </div>
    </div>
  );
}

export default Carousel;
