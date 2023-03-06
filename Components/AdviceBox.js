import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import cancel from '../cancel.png';

export default function AdviceBox({message, onPress}) {
  return (
    <View style={styles.adviceNote}>
      <View style={styles.adviceHeader}>
        <Text>Tip!</Text>
        <TouchableOpacity style={styles.exitButton} onPress={onPress}>
          <Image source={cancel} style={styles.cross} />
        </TouchableOpacity>
      </View>
      <View style={styles.adviceBody}>
        <Text>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adviceNote: {
    backgroundColor: '#dbffe6',
    marginHorizontal: 5,
    marginTop: 30,
    height: 100,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  adviceHeader: {
    paddingVertical: 5,
    backgroundColor: '#9bfcb9',
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 30,
    borderTopRightRadius: 8,
  },

  adviceBody: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },

  exitButton: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbffe6',
    borderRadius: 10,
  },

  cross: {
    width: 10,
    height: 10,
  },
});
