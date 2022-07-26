import React, {useState, useContext, createContext} from "react";

import { 
    SafeAreaView,
    View,
    Text,
    Button,
}
 from "react-native";

 const UserContext = createContext();

const App3 = () => {

    const [user, setUser] = useState(0);

    return (
        <SafeAreaView>
            <View>
                <Text
                style={{
                    fontSize: 22,
                    padding: 20,
                  }}>
                    alllo! the value up here is {user}
                </Text>

                <UserContext.Provider value={[user, setUser]}>
                    <NestedComp />
                </UserContext.Provider>

            </View>

        </SafeAreaView>
    )
}

const NestedComp = () => {
    return (
    <View>
        <Text
        style={{fontSize:22, padding:20,}}>
            'allo! i am nested once and no value!'
        </Text>
        <NestedNestedComp />
    </View>
    )
}

const NestedNestedComp = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <View>
        <Text style={{padding:20,fontSize:22}}>
            i am nested twice! {user} value
        </Text>
        <Button title='click to update the value!' onPress={() => setUser(user + 3)}/>
        </View>

    )
}

export default App3;