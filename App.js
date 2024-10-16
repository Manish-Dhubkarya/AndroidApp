/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Provider} from "react-redux"
import { createStore } from 'redux';
import RootReducer from './src/Storage/RootReducer';
var store=createStore(RootReducer)
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {
  return (
    <Provider store={store}>
  <RootNavigation/>
  </Provider>
  );
}
