/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import KenBurnsView from 'react-native-kenburns-view';
const Dimensions = require('Dimensions');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Using KenBurns View!
            </Text>
            <View style={styles.imageContainer}>
                <KenBurnsView tension={6} friction={50} duration={5000}>
                    <Image source={require('./images/image1.jpg')} />
                </KenBurnsView>
            </View>
            <View style={styles.imageContainer}>
            <KenBurnsView tension={6} friction={50} duration={5000}>
                    <Image source={require('./images/image2.jpg')} />
                </KenBurnsView>
            </View>
            <View style={styles.imageContainer}>
            <KenBurnsView tension={6} friction={50} duration={5000}>
                    <Image source={require('./images/image3.jpg')} />
                </KenBurnsView>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    innerText: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    imageContainer: {
        overflow: 'hidden',
        width: Dimensions.get('window').width,
        flrx: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
