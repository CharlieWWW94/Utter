import React, {useEffect, useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Drawer from '../Components/Drawer';

function Home() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    isOpenDrawer ? drawerSlide(350) : drawerSlide(-350);
  }, [isOpenDrawer, drawerSlide]);

  const translation = useState(new Animated.Value(0))[0];

  const drawerTranslation = {
    transform: [{translateX: translation}],
  };

  const drawerSlide = useCallback(
    value => {
      Animated.timing(translation, {
        toValue: value,
        duration: 700,
        useNativeDriver: true,
      }).start();
    },
    [translation],
  );

  return (
    <View style={{backgroundColor: '#f7f7f7', height: 600}}>
      <Text>home</Text>
    </View>
  );
}

export default Home;
