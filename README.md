# react-native-ken-burns [![npm version](https://badge.fury.io/js/react-native-ken-burns.svg)](https://badge.fury.io/js/react-native-ken-burns)

[`KenBurns`](https://en.wikipedia.org/wiki/Ken_Burns_effect) Ken Burns Effect for React Native.
Version: 4.0.0

Tested on React Native 0.40+ iOS and Android.

## Installation

```bash
$ npm i react-native-ken-burns --save
```
```bash
$ yarn add react-native-ken-burns
```

## Demo/Example

![kenburns view demo](https://media.giphy.com/media/xTcnT8ju8pHKhIZY9G/giphy.gif)

Go to `react-native-ken-burns/example/KenBurnsExample` to view the example.

## Usage

```jsx
import KenBurnsView from 'react-native-ken-burns';

<KenBurnsView tension={4} friction={50} duration={5000} min={1.5} max={2.0}>
  // render any children here, usually Image
</KenBurnsView>
```

## API (props)

| Prop | Description | Default
|---|---|---|
|**`duration`**| `int` Time (in ms) to zoom in/out. | 10000
|**`tension`**| `int` Tension Value. |  6
|**`friction`**| `int` Friction Value. | 50
|**`min`**| `int` The min scale the image will zoom to | 1.3
|**`max`**| `int` The max scale the image will zoom to | 1.6


## npm

Link: [`react-native-ken-burns on npm`](https://www.npmjs.com/package/react-native-ken-burns)

## License

[`ISC`](http://opensource.org/licenses/ISC) License

## Feedback

Email: nimilahiran@gmail.com
Twitter: [`nHiRanZ on Twitter`](https://twitter.com/nHiRanZ)
