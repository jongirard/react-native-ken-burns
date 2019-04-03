/**
 * Created by Nimila Hiranya Samarasinghe
 * Links: https://github.com/nHiRanZ
 *
 * Version: 2.0.1
 *
 * Description: This reflects the KenBurns effect in a React Native Image
 */

'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import rebound from 'rebound';
import { Image, View } from 'react-native';
import TimerMixin from 'react-timer-mixin';

class KenBurnsView extends Component {
    static defaultProps = {
        duration: 10000,
        tension: 6,
        friction: 50,
        min: 1.0,
        max: 1.6,
        onAnimationEnd: () => {}
    };

    state = {
        scale: null,
    };

    componentWillMount() {
        if (!this._mounted) {
            this.springSystemFunctions();
        }
    }

    componentWillUnmount() {
        this._mounted = false;
        this._scrollSpring && this._scrollSpring.destroy();
    }

    springSystemFunctions() {
        this.springSystem = new rebound.SpringSystem();
        this._scrollSpring = this.springSystem.createSpring();
        var springConfig = this._scrollSpring.getSpringConfig();
        const { tension, friction } = this.props;

        springConfig.tension = tension;
        springConfig.friction = friction;

        this._scrollSpring.addListener({
            onSpringUpdate: () => {
                this.setState({ scale: this._scrollSpring.getCurrentValue() });
            },
        });

        this._scrollSpring.setCurrentValue(1);
    }

    componentDidMount() {
        this._mounted = true;
        this.animLoop();
    }

    animLoop() {
        this.animationFunc();
        TimerMixin.setTimeout(() => {
            this.animLoop();
        }, this.props.duration*2);
    }

    animationFunc = () => {
        const { min, max, duration } = this.props;
        const endValue = (Math.random() * (max - min) + min).toFixed(3);
        this._scrollSpring.setEndValue(endValue);
        TimerMixin.setTimeout(() => {
            this._scrollSpring.setEndValue(1);
        }, duration);
    }

    render() {
        var containerStyle = {
            alignItems: 'stretch',
            transform: [
                {
                    scale: this.state.scale,
                },
            ],
        };

        return (
            <View style={[containerStyle, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

KenBurnsView.propTypes = {
    duration: PropTypes.number,
    tension: PropTypes.number,
    friction: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onAnimationEnd: PropTypes.func,
}

module.exports = KenBurnsView;