import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  DetailsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  DetailHeaderRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  DetailsHeaderLeft: {
    color: 'black',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 22,
  },
  DetailsHeaderRight: {
    color: '#2679ff',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 22,
  }
});

export default styles;