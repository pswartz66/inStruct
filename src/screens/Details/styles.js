import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  detailHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  detailsHeaderLeft: {
    color: 'black',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 22,
  },
  detailsHeaderRight: {
    color: '#2679ff',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 22,
  },
  detailDataList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    padding: 5,
  },
  detailCards: {
    height: 200,
    width: '50%',
    margin: 0,
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: .2
  },
  detailsCardInner: {
    height: 180,
    width: '90%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  detailsProfImg: {
    height: 100,
    width: '100%',
    borderRadius: 6,
    backgroundColor: 'gray',
    marginBottom: 6,
  },
  detailsBottomCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
  }
});

export default styles;