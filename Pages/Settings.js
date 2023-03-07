import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const VOICES = Object.freeze([
  'com.apple.ttsbundle.siri_male_en-US_compact',
  'com.apple.speech.synthesis.voice.Fred',
  'com.apple.ttsbundle.siri_female_en-US_compact',
  'com.apple.ttsbundle.Samantha-compact',
]);

function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

export default Settings;
