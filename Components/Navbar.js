import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import burger from '../burger.png';

function Navbar({burgerAction}) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.burgerButton}
        onPress={() => burgerAction(true)}>
        <Image source={burger} />
      </TouchableOpacity>
      <View style={styles.brandContainer}>
        <Text style={styles.brand}>Utter.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 3,
    zIndex: 1,
  },

  burgerButton: {
    margin: 8,
  },

  brandContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%',
  },

  brand: {
    alignSelf: 'center',
    fontFamily: 'Hanuman-Regular',
    fontSize: 16,
  },
});

export default Navbar;
