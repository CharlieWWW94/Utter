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
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import MyAudio from './Pages/MyAudio';
import Create from './Pages/Create';
import Settings from './Pages/Settings';

let persistor = persistStore(store);

function App() {
  return (
    <NativeRouter>
      <SafeAreaView>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
            <View>
              <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route exact path="/" element={<Create />} />
                <Route path="/audio" element={<MyAudio />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </View>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </NativeRouter>
  );
}

export default App;
