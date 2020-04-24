# rocketact plugin for @jdcfe/icons-react use svg


## 自定义 SVG 图标

添加webpack配置 ，通过配置 @svgr/webpack 来将 svg 图标作为 React 组件导入。


```
import Icon from '@jdcfe/icons-react';
import FollowSvg from 'path/to/follow.svg'; // 直接导入`*.svg`.

ReactDOM.render(<Icon component={FollowSvg} />, mountNode);
```
