# Pet chain of React Component

## Example

```jsx
import { Pet } from '@zswang/petchain';

let props = {
  bgColor: '日落黄',
  body: '灰太狼',
  bodyColor: '牙黄',
  eye: '小惊讶',
  eyeColors: '浅钴蓝',
  pattern: '奶牛',
  patternColor: '变异橙',
  bellyColor: '深灰',
  mouth: '小獠牙',
};

const pet = <Pet {...props} />;
```

## Screenshot

![pet screenshot](./document/pet.png)