---
title: 阴影
---

## 外阴影

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  display: flex;
  background: #05ffb0;
`;

const Shadow = styled.span`
  padding: 8px 16px;
  display: inline-block;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default () => (
  <Container>
    <Shadow>Shadow</Shadow>
  </Container>
);
```

```css
.shadow-xs {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
}
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-none {
  box-shadow: none;
}
```

## 内阴影

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const InnerShadow = styled.div`
  padding: 1em;
  background: #05ffb0;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`;

export default () => <InnerShadow>Inner Shadow</InnerShadow>;
```

```css
.shadow-inner {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

## outline

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  background: #05ffb0;
`;

const Shadow = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  outline: none;
  border: none;
  :focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export default () => (
  <Container>
    <Shadow>Shadow</Shadow>
  </Container>
);
```

```css
.shadow-outline {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
```
