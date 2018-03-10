# Pet chain of React Component

```jsx
import { Pet } from '@zswang/petchain';
const { Body, Eye, Moth, Pattern, Colors } = Pet;

const pet = (
  <Pet color={Colors.土黄}>
    <Body color={Colors.中黄} name={Body.中分} />
    <Pattern color={Colors.春日青} name={Pattern.八字纹} />
    <Eye color={Colors.赭石} name={Eye.小严肃} />
    <Mouth name={Mouth.北极熊} />
  </Pet>
);
```
