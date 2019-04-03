import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type Props = {
  duration?: number;
  friction?: number;
  tension?: number;
  min?: number;
  max?: number;
  style?: StyleProp<ViewStyle>;
};

export default class KenburnsView extends React.Component<Props> {}
