import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import AdviceBox from '../Components/AdviceBox';
import ModalForm from '../Components/Modal';
import play from '../play-64.png';
import Tts from 'react-native-tts';
import {useSelector, useDispatch} from 'react-redux';
import {selectNotes} from '../redux/audioSlice';
import {addNote} from '../redux/audioSlice';
import NoteBarControl from '../Components/NoteBarControl';

function Create() {
  const audioNotes = useSelector(state => selectNotes(state));
  const dispatch = useDispatch();
  const [displayTip, setDisplayTip] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);

  const saveNewNote = useCallback(
    note => {
      dispatch(addNote(note));
      setDisplayModal(false);
    },
    [dispatch],
  );

  const closeAdviceBox = useCallback(() => {
    setDisplayTip(false);
  }, []);

  const closeModal = useCallback(val => {
    setDisplayModal(val);
  }, []);

  const renderNewNotes = () => {
    const noteNumber = audioNotes.length > 3 ? 3 : audioNotes.length;
    const newNotes = [];
    for (let i = 0; i < noteNumber; i++) {
      newNotes.push(
        <NoteBarControl
          title={audioNotes[i].title}
          body={audioNotes[i].body}
        />,
      );
    }
    return newNotes;
  };

  const newNotesPlaceholder = (
    <View style={styles.newNotesPlaceholder}>
      <Text style={styles.notesPlaceholderText}>Nothing to see here!</Text>
    </View>
  );

  const newNoteSection = (
    <>
      <View
        style={[
          styles.newNotesView,
          styles.salmon,
          {
            transform: [{skewX: '-25deg'}],
          },
        ]}>
        <Text style={styles.newNotesTitle}>Your New Notes</Text>
      </View>
      {audioNotes.length > 0 && renderNewNotes()}
      {!audioNotes.length && newNotesPlaceholder}
    </>
  );

  const adviceMessage =
    'Press the purple plus button to create a new voice note.';

  return (
    <View style={{backgroundColor: '#f5f5f5', height: '100%'}}>
      <View style={styles.pageContainer}>
        <View
          style={[
            styles.titleContainer,
            styles.magenta,
            styles.rotateLeft,
            {zIndex: -1, marginBottom: -4},
          ]}>
          <Text style={styles.titleText}>Bring</Text>
        </View>
        <View
          style={[styles.titleContainer, styles.salmon, styles.rotateRight]}>
          <Text style={styles.titleText}>Your Text</Text>
        </View>
        <View
          style={[
            styles.titleContainer,
            styles.sky,
            styles.rotateLeft,
            {zIndex: -1, marginTop: -8},
          ]}>
          <Text style={styles.titleText}>To Life</Text>
        </View>
        {displayTip && (
          <AdviceBox message={adviceMessage} onPress={closeAdviceBox} />
        )}
        {newNoteSection}
      </View>
      <ModalForm
        onClose={closeModal}
        displayModal={displayModal}
        onSave={saveNewNote}
      />
      <TouchableOpacity
        style={styles.addContainer}
        onPress={() => setDisplayModal(true)}>
        <Text style={styles.addPlus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    minHeight: 400,
    zIndex: 0,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#f7f7f7',
  },

  titleContainer: {
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 3,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  rotateRight: {
    transform: [{rotate: '1deg'}],
  },

  rotateLeft: {
    transform: [{rotate: '-2deg'}],
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

  titleText: {
    color: 'white',
    fontWeight: 'bold',
  },

  addContainer: {
    position: 'absolute',
    backgroundColor: '#BF72E9',
    right: 20,
    top: 630,
    width: 80,
    height: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },

  addPlus: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
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

export default Create;
