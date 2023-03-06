import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useState, useEffect, useCallback} from 'react';
import {NativeRouter, Switch, Route, Routes} from 'react-router-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import MyAudio from './Pages/MyAudio';
import Create from './Pages/Create';
import Settings from './Pages/Settings';

function App() {
  return (
    <NativeRouter>
      <SafeAreaView>
        <Provider store={store}>
          <Navigation />
          <View>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/audio" element={<MyAudio />} />
              <Route path="/create" element={<Create />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </View>
        </Provider>
      </SafeAreaView>
    </NativeRouter>
  );
}

export default App;
