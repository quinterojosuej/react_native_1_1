/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; // the one with crazy stuff
import App2 from './App2'; // has navigation stuff lol
import App3 from './App3'; // has some Context fun
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
