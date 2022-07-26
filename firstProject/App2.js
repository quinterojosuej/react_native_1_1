import React, { useState } from 'react';

import {
    View,
    SafeAreaView,
    Button,
    Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Comp2 } from './components/TestChild';

const Stack = createNativeStackNavigator();

const App2 = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={ HomeScreen }
                options={{ title: 'Welcome' }}
                />

                <Stack.Screen
                name="Profile"
                component={ ProfileScreen }
                />

                <Stack.Screen 
                name="Test Screen"
                component={ Comp2 }
                options={{ title: 'Test Screen' }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

const HomeScreen = ({ navigation }) => {

    const[upperVal, setUpperVal] = useState(0);

    return (
        <SafeAreaView>
            <View>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
                }
            />

            <Button
            title="Go to Test Screen"
            onPress={() => navigation.navigate('Test Screen', { passed: upperVal })}
            />

            <Text>
                Here is the upper value { upperVal }
            </Text>
            <Button title="Increase the value here" onPress={() => setUpperVal(upperVal+3)} />
        </View>
      </SafeAreaView>
    );
};

const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default App2;