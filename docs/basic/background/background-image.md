## 垂直线性渐变

颜色从 `#fb3` 过渡到 `#58a`

```css
.container {
  height: 200px;
  background-image: linear-gradient(#fb3, #58a);
}
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  background-image: linear-gradient(#fb3, #58a);
`;

export default () => {
  return <Container></Container>;
};
```

```css
.container {
  height: 200px;
  background-image: linear-gradient(#fb3 20%, #58a 80%);
}
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  position: relative;
  background-image: linear-gradient(#fb3 20%, #58a 80%);
`;

const Line = styled.div`
  position: absolute;
  background: #ff4538;
  background-size: 1px auto;
  line-height: 0;
  top: 20%;
  height: 1px;
  width: 100%;
`;

export default () => {
  return (
    <Container>
      <Line style={{ top: '20%' }}>20%</Line>
      <Line style={{ top: '80%' }}>80%</Line>
    </Container>
  );
};
```

```css
.container {
  height: 200px;
  background-image: linear-gradient(#fb3 50%, #58a 50%);
}
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  position: relative;
  background-image: linear-gradient(#fb3 50%, #58a 50%);
`;

const Line = styled.div`
  position: absolute;
  background: #ff4538;
  background-size: 1px auto;
  line-height: 0;
  top: 20%;
  height: 1px;
  width: 100%;
`;

export default () => {
  return (
    <Container>
      <Line style={{ top: '50%' }}>50%</Line>
    </Container>
  );
};
```

```css
.container {
  height: 200px;
  background-image: linear-gradient(#fb3 50%, #58a 50%);
  background-size: 100% 50px;
  background-repeat: no-repeat;
}
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  position: relative;
  background-image: linear-gradient(#fb3 50%, #58a 50%);
  background-size: 100% 50px;
  background-repeat: no-repeat;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Line = styled.div`
  position: absolute;
  background: #ff4538;
  background-size: 1px auto;
  line-height: 0;
  top: 20%;
  height: 1px;
  width: 100%;
`;

export default () => {
  return <Container></Container>;
};
```

```css
.container {
  height: 200px;
  background-image: linear-gradient(#fb3 50%, #58a 0);
  background-size: 100% 50px;
  background-repeat: no-repeat;
}
```

<Alert>
如果某个色标的位置值比整个列表中在它之前的色标的位置值都要 小，则该色标的位置值会被设置为它前面所有色标位置值的最大值。
</Alert>

## 斜向条纹

```css
.container {
  height: 200px;
  background: linear-gradient(
    45deg,
    #fb3 25%,
    #58a 0,
    #58a 50%,
    #fb3 0,
    #fb3 75%,
    #58a 0
  );
  background-size: 42.426406871px 42.426406871px;
  background-repeat: no-repeat;
}
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  position: relative;
  background-image: linear-gradient(
    45deg,
    #fb3 25%,
    #58a 0,
    #58a 50%,
    #fb3 0,
    #fb3 75%,
    #58a 0
  );
  background-size: 50px 50px;
  background-repeat: no-repeat;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Line = styled.div`
  position: absolute;
  background: #ff4538;
  background-size: 1px auto;
  line-height: 0;
  top: 20%;
  height: 1px;
  width: 100%;
`;

export default () => <Container></Container>;
```

```css
.container {
  height: 200px;
  background: linear-gradient(
    45deg,
    #fb3 25%,
    #58a 0,
    #58a 50%,
    #fb3 0,
    #fb3 75%,
    #58a 0
  );
  background-size: 42.426406871px 42.426406871px;
  background-repeat: no-repeat;
}
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  position: relative;
  background-image: linear-gradient(
    45deg,
    #fb3 25%,
    #58a 0,
    #58a 50%,
    #fb3 0,
    #fb3 75%,
    #58a 0
  );
  background-size: 50px 50px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Line = styled.div`
  position: absolute;
  background: #ff4538;
  background-size: 1px auto;
  line-height: 0;
  top: 20%;
  height: 1px;
  width: 100%;
`;

export default () => <Container></Container>;
```

```css
.container {
  height: 200px;
  background: repeating-linear-gradient(45deg, #fb3, #58a 30px);
}
```

它相当于下面这个简单的线性渐变:

```css
.container {
  height: 200px;
  background: linear-gradient(
    45deg,
    #fb3,
    #58a 30px,
    #fb3 30px,
    #58a 60px,
    #fb3 60px,
    #58a 90px,
    #fb3 90px,
    #58a 120px,
    #fb3 120px,
    #58a 150px,
    ...
  );
}
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  position: relative;
  background-image: repeating-linear-gradient(
    60deg,
    #fb3,
    #fb3 15px,
    #58a 0,
    #58a 30px
  );
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Line = styled.div`
  position: absolute;
  background: #ff4538;
  background-size: 1px auto;
  line-height: 0;
  top: 20%;
  height: 1px;
  width: 100%;
`;

export default () => <Container></Container>;
```

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 16px;
  background-color: #fb3;
  background-size: 16px 16px;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export default () => <Container></Container>;
```
