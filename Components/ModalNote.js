import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import cancel from '../cancel.png';
import Tts from 'react-native-tts';
import play from '../play-64.png';

export default function ModalNote({onClose, displayModal, title, body}) {
  return (
    <Modal
      visible={displayModal}
      animationType="fade"
      hardwareAccelerated={true}
      transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.contentView}>
          <View style={styles.closeContainer}>
            <TouchableOpacity
              style={[styles.closeButton, styles.salmon]}
              onPress={() => onClose(false)}>
              <Image source={cancel} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.formTitleContainer}>
            <Text style={styles.formTitle}>{title}</Text>
          </View>
          <View style={styles.formBodyContainer}>
            <Text style={styles.formBody}>{body}</Text>
          </View>
          <TouchableOpacity
            style={[styles.submitButton, styles.sky]}
            onPress={() => Tts.speak(body)}>
            {/* <Text style={styles.submitButtonText}>Turn to Speech</Text> */}
            <Image source={play} style={styles.playButton} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  salmon: {
    backgroundColor: '#F1505D',
  },

  sky: {
    backgroundColor: '#2EB2E6',
  },

  modalView: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 10,
  },

  contentView: {
    backgroundColor: '#f7f7f7',
    width: '95%',
    height: '85%',
    borderRadius: 20,
    marginTop: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  formTitleContainer: {
    backgroundColor: '#edecec',
    borderRadius: 5,
  },

  formTitle: {
    fontSize: 20,
    height: 35,
    paddingLeft: 10,
    paddingTop: 5,
    fontWeight: 'bold',
  },

  formBodyContainer: {
    backgroundColor: '#edecec',
    borderRadius: 5,
    marginTop: 10,
  },

  formBody: {
    fontSize: 16,
    height: 450,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  closeButton: {
    padding: 10,
    backgroundColor: '#D4D4D4',
    borderRadius: 4,
    width: 40,
    height: 40,
  },

  closeIcon: {
    width: 20,
    height: 20,
  },

  closeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    maxHeight: 45,
    marginBottom: 10,
  },

  submitButton: {
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },

  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  playButton: {
    height: 20,
    width: 20,
  },
});
