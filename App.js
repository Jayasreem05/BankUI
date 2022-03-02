import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Navigation from './components/navigation/code';
import Cards from './components/cards/code';
import Stocks from './components/stocks/code';
import HeadCard from './components/header/code';
import Userinfo from './components/userinfo/code';
const deviceHeight = Dimensions.get('window').height;
export default function App() {
  return (
    <View style={s.bg}>
      <View>
        <Userinfo />
      </View>
      <View>
        <HeadCard />
      </View>
      <View>
        <Cards />
      </View>
      <View>
        <Stocks />
      </View>
      <View style={{ position: 'absolute', top: deviceHeight - 75 }}>
        <Navigation />
      </View>
    </View>);
}
const s = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(236, 239, 240)',
  }
})