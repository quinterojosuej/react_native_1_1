import React, { useState, useEffect} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button,

} from 'react-native';

export const HiddenCounter = () => {

    // useEffect(() => {
    //     console.log("works at mount, update and unmount");
    // })

    // useEffect(() => {
    //     console.log("works at the update");
    // }, [hiddenValue])

    useEffect(() => {
        console.log("works at willUnmount");
        return () => {
            console.log("the return is being ran!")
        }
    }, [])

    const [hiddenValue, setHiddenValue] = useState(0);

    increaseHiddenValue = () => {
        setHiddenValue(hiddenValue + 1);
    }

    return (
        <SafeAreaView>
            <View>
                <Text>
                    {hiddenValue}
                </Text>
                <Button title='Increment the Value!' onPress={() => increaseHiddenValue()}/>
            </View>
        </SafeAreaView> 
    );
}