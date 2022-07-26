import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

// functional component

const Comp = props => { // child data
  return (
    <SafeAreaView>
      <View
        style={{
          height: 100,
          padding: 10,
        }}>

        <Text
          style={{
            fontSize: 22,
          }}>
          Custom text here: {props.text}
        </Text>

        <Button title='my custom button #2' onPress={() => props.onPress()}/>

      </View>
    </SafeAreaView>
  );
};

export default Comp;
