import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Button,
    FlatList,
    ActivityIndicator
} from 'react-native';


export const TestAPICall = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [theResponse, setTheResponse] = useState([]);

    const tryAPICall = async () => {
        try{
            const response = await fetch('https://reactnative.dev/movies.json');

            const json = await response.json();
            
            console.log("le json:", json.movies);
            setTheResponse(json.movies);
        }
        catch(error){
            console.log('error:', error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView>
            <View>
                {isLoading ? <ActivityIndicator /> : (

                <FlatList
                    data = {theResponse}
                    keyExtractor = {({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                    />
                )}
                </View>
                <Button title='Try me!' onPress={() => tryAPICall()}/>
            </SafeAreaView>
    );

}