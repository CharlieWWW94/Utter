import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import play from '../play-64.png';
import Tts from 'react-native-tts';

export default function NoteBar({title, body}) {
  return (
    <View style={styles.newNoteBar}>
      <View style={styles.newNoteTextContainer}>
        <Text style={styles.noteTitle}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => Tts.speak(body)}>
        <View style={[styles.sky, styles.playContainer]}>
          <Image source={play} style={[styles.playButton]} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  salmon: {
    backgroundColor: '#F1505D',
  },

  sky: {
    backgroundColor: '#2EB2E6',
  },

  magenta: {
    backgroundColor: '#BF72E9',
  },
  newNotesView: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },

  newNotesTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    transform: [{skewX: '25deg'}],
  },

  newNoteBar: {
    width: '90%',
    maxHeight: 60,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#e7e7e7',
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },

  noteTitle: {
    fontWeight: 'bold',
    color: '#242424',
    fontSize: 15,
    marginLeft: 10,
  },

  playContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    maxHeight: 50,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 3,
  },

  playButton: {
    height: 25,
    width: 25,
    marginLeft: 5,
  },
});
