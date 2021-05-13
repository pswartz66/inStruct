import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  profileSettingsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
    width: Dimensions.get('window').width,
  },
  settingsHeader: {
    color: 'gray',
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    paddingLeft: 20,
    paddingBottom: 10,

  },
  settingsTabsContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: '#e6e6e6',
    borderWidth: 0.5,
    paddingHorizontal: 20
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    backgroundColor: 'white',
    height: 40,
    width: Dimensions.get('window').width,
    paddingTop: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 0.5,
  },
  settingsIcons: {
    marginLeft: 2,
    marginRight: 15
  },
  settingsSignOut: {
    textAlign: 'center',
    height: 40,
    width: Dimensions.get('window').width,
    fontSize: 18,
    color: '#2679ff',
    fontWeight: '700',
    marginTop:20,
  }
});

export default styles;