import React, {useEffect, useState, useCallback} from 'react';
import Navbar from './Navbar';
import Drawer from './Drawer';
import {Animated} from 'react-native';

function Navigation() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    isOpenDrawer ? drawerSlide(350) : drawerSlide(-350);
  }, [isOpenDrawer, drawerSlide]);

  const translation = useState(new Animated.Value(0))[0];

  const drawerTranslation = {
    transform: [{translateX: translation}],
  };

  const isOpen = useCallback(
    val => {
      setIsOpenDrawer(val);
    },
    [setIsOpenDrawer],
  );

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
    <>
      <Navbar burgerAction={isOpen} />
      <Drawer drawerOpen={isOpen} drawerTranslation={drawerTranslation} />
    </>
  );
}

export default Navigation;
