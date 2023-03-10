import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import play from '../play-64.png';
import bin from '../bin.png';
import book from '../read.png';
import Tts from 'react-native-tts';
import {removeNote} from '../redux/audioSlice';

export default function NoteBarControl({title, body, onRead = null}) {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  Tts.addEventListener('tts-progress', event => console.log('progress', event));
  Tts.addEventListener('tts-finish', event => setIsPlaying(false));

  const playAudio = useCallback(text => {
    setIsPlaying(true);
    Tts.speak(text);
  }, []);

  const pauseAudio = useCallback(() => {
    setIsPlaying(false);
    Tts.stop();
  }, []);

  const playButton = (
    <TouchableOpacity onPress={() => playAudio(body)}>
      <View style={[styles.sky, styles.playContainer]}>
        <Image source={play} style={[styles.playButton]} />
      </View>
    </TouchableOpacity>
  );

  const pauseButton = (
    <TouchableOpacity onPress={pauseAudio}>
      <View style={[styles.magenta, styles.playContainer]}>
        <View style={[styles.stopButton]} />
      </View>
    </TouchableOpacity>
  );

  const deleteButton = (
    <TouchableOpacity onPress={() => dispatch(removeNote(title))}>
      <View style={[styles.danger, styles.deleteContainer]}>
        <Image source={bin} style={[styles.deleteButton]} />
      </View>
    </TouchableOpacity>
  );

  const readNoteButton = (
    <TouchableOpacity onPress={() => onRead({title, body})}>
      <View style={[styles.mint, styles.bookContainer]}>
        <Image source={book} style={[styles.bookButton]} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.newNoteBar}>
      <View style={styles.newNoteTextContainer}>
        <Text style={styles.noteTitle}>{title}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {onRead && deleteButton}
        {onRead && readNoteButton}
        {isPlaying ? pauseButton : playButton}
      </View>
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

  danger: {
    backgroundColor: '#dd1e1e',
  },

  mint: {
    backgroundColor: '#00c898',
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

  buttonContainer: {
    width: 170,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  playContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    maxHeight: 40,
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

  deleteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    maxHeight: 40,
    borderRadius: 10,
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
    height: 20,
    width: 20,
    marginLeft: 5,
  },

  bookContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    maxHeight: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 3,
  },

  bookButton: {
    height: 25,
    width: 25,
  },

  stopButton: {
    height: 20,
    width: 20,
    backgroundColor: 'white',
    borderRadius: 2,
  },
});
