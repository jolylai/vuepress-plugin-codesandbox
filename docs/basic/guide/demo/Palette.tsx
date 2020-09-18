import React from 'react';
import { Typography } from 'antd';

interface PaletteProps {
  colors: string[];
}

function Palette(props: PaletteProps) {
  // const { colors = ['#9DC8C8', '#58C9B9', '#519D9E', '#D1B6E1'] } = props;
  const { colors = ['#05ffb0', '#00e7eb', '#ff3860', '#ffdd57'] } = props;
  return (
    <ul style={{ listStyle: 'none' }}>
      {colors.map(color => (
        <li key={color} style={{ backgroundColor: color, padding: 8 }}>
          <Typography.Paragraph copyable={{ text: color }}>
            {color}
          </Typography.Paragraph>
        </li>
      ))}
    </ul>
  );
}

export default Palette;
