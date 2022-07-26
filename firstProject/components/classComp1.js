import React from 'react';

import {
    SafeAreaView,
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';

import art from '../assets/pixel_highway.gif';

export class SimpleBody extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.simpleBody}>
                    <Image style={styles.simpleBodyImage} source={art}></Image>
                </View>
            </SafeAreaView>
        )
    }
}

export class SimplerBody extends Component {
    render () {
        return ( 
            <SafeAreaView>
                <View>
                    <Text>Hello! #2</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    simpleBody: {
        height: 300,
    },
    simpleBodyImage: {
        height: 300,
        width: 300,
        alignSelf: 'center',
        
    }
})

