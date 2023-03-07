import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Link} from 'react-router-native';
import cancel from '../cancel.png';
import house from '../house.png';
import avatar from '../avatar.png';
import waves from '../audio-waves.png';
import speaker from '../speaker.png';

function Drawer({drawerOpen, drawerTranslation}) {
  const pageLink = (name, icon, destination) => (
    <Link to={destination}>
      <View style={styles.pageLinkView}>
        <Text style={styles.pageLinkText}>{name}</Text>
        <Image source={icon} style={styles.pageLinkIcon} />
      </View>
    </Link>
  );
  return (
    <Animated.View style={[styles.animatedDrawer, drawerTranslation]}>
      <View style={styles.iconContainer}>
        <Text style={styles.drawerTitle}>Pages</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => drawerOpen(false)}>
          <Image source={cancel} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      {pageLink('Home', house, '/')}
      {pageLink('My Audio', waves, '/audio')}
      {pageLink('Settings', avatar, '/settings')}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animatedDrawer: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    height: 1000,
    width: 250,
    left: -350,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 50,
    zIndex: 2,
  },

  drawerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
    marginLeft: 10,
  },

  iconContainer: {
    width: '100%',
    height: 103,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1505D',
    flexDirection: 'row',
  },

  closeButton: {
    padding: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 4,
  },

  closeIcon: {
    width: 20,
    height: 20,
  },

  pageLinkView: {
    textAlign: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(108,108,108,0.2)',
    padding: 12,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pageLinkIcon: {
    height: 20,
    width: 20,
    marginRight: 7,
  },

  pageLinkText: {
    fontSize: 16,
  },
});

export default Drawer;
