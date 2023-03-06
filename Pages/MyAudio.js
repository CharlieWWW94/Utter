import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {selectNotes} from '../redux/audioSlice';
import NoteBarControl from '../Components/NoteBarControl';
import ModalNote from '../Components/ModalNote';
function MyAudio() {
  const [displayModal, setDisplayModal] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const allNotes = useSelector(state => selectNotes(state));

  const toggleModal = useCallback(val => {
    setDisplayModal(val);
  }, []);
  const updateCurrentNote = useCallback(note => {
    setCurrentNote(note);
    setDisplayModal(true);
  }, []);

  return (
    <View style={styles.myAudioView}>
      {currentNote && (
        <ModalNote
          displayModal={displayModal}
          onClose={toggleModal}
          title={currentNote.title}
          body={currentNote.body}
        />
      )}
      <View
        style={[
          styles.newNotesView,
          styles.salmon,
          {
            transform: [{skewX: '-25deg'}],
          },
        ]}>
        <Text style={styles.newNotesTitle}>All Notes</Text>
      </View>
      {allNotes.map(note => (
        <NoteBarControl
          title={note.title}
          body={note.body}
          onRead={updateCurrentNote}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  myAudioView: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    height: '100%',
  },
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
    width: '60%',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 12,
    justifyContent: 'center',
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

  newNotesPlaceholder: {
    backgroundColor: '#ebebeb',
    height: 200,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#cbcbcb',
    borderRadius: 8,
  },

  notesPlaceholderText: {
    color: '#959595',
  },
});

export default MyAudio;
