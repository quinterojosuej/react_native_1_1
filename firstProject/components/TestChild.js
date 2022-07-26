import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Button, 
    Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const Comp2 = ({ route }) => {

    const [localVal, setLocalVal] = useState(0);
    
    const { passed } = route.params;
    const [upper, setUpper] = useState( ( passed ) );

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
            Value here: {localVal}
            
            Passed value here: { upper }
          </Text>
  
          <Button title='the local button' onPress={() => setLocalVal(localVal + 2)}/>
          <Button title='the passed button' onPress={() => setUpper(upper+2)} />
        </View>
      </SafeAreaView>
    );
};