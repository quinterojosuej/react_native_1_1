/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';


import FuncComp from './FuncComp.js';
import {SimpleBody, SimplerBody} from './components/classComp1';
import { HiddenCounter } from './components/lifecycleComp.js';
import { TestAPICall } from './components/apiTests.js';


/// Fancy Component start
const Section = ({children, title}): Node => { // custom function
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
/// Fancy component end

const App: () => Node = () => { // actual app
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [aCount, setCount] = useState(0); // initial value goes here
  const [showBool, setShowBool] = useState(false);
  increaseFunc = () => {
    setCount(aCount + 1);
  };
  
  return (

    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <Section title="Api test">
            <TestAPICall />

          </Section>

          <Section title="My Custom texts">
            <Text>Why, hello there. :33 </Text>
            <SimplerBody />

            <Button title="show/hide" onPress={() => setShowBool(!showBool)} />
            {showBool ? <HiddenCounter /> : null}

          </Section>

          <Section title="Simple body with image">
            <SimpleBody />

          </Section>
          
          <Section title="Passing function definition down">
            <Button 
            title="my button"
            color="#2eb82e"
            onPress={() => Alert.alert('my button pressed! :3')}
            />

          <FuncComp text={aCount} 
            onPress={this.increaseFunc} />
          </Section>

          {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
