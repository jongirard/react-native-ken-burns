# react-native-kenburns-view [![npm version](https://badge.fury.io/js/react-native-kenburns-view.svg)](https://badge.fury.io/js/react-native-kenburns-view)

[`KenBurns`](https://en.wikipedia.org/wiki/Ken_Burns_effect) Ken Burns Effect for React Native.
Version: 4.0.0

Tested on React Native 0.40+ iOS and Android.

## Installation

```bash
$ npm i react-native-kenburns-view --save
```

## Demo/Example

![kenburns view demo](https://media.giphy.com/media/xTcnT8ju8pHKhIZY9G/giphy.gif)

Go to `react-native-kenburns-view/example/KenBurnsExample` to view the example.

## Usage

```jsx
<BurnsImage tension={4} friction={50} imageWidth={200} imageHeight={100} sourceUri={require(./images/kenburnsimage.jpg)} placeholderSource={require( './images/placeholder.jpg')}>
</BurnsImage>
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
