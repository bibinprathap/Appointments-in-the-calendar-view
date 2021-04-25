/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'; 
import {Provider} from 'react-redux';
import store from './src/redux/store';
//import Login from './src/app'

import Main from './src/components/Main';

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Main/>
        {/* <Login/> */}
      </Provider>
    )
  }
}
