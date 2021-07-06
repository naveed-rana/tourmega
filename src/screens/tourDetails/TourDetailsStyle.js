import {StyleSheet, Platform} from 'react-native';
const HEADER_HEIGHT = Platform.OS === 'ios' ? 80 : 45;
const HEADER_TITLE = Platform.OS === 'ios' ? 42 : 0;
const HEADER_ICON = Platform.OS === 'ios' ? 38 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  header: {
    width: '100%',
    height: HEADER_HEIGHT,
    backgroundColor: '#2c2a2a',
    flexDirection: 'row',
  },
  headerIcon: {
    marginTop: HEADER_ICON,
    marginLeft: 15,
  },
  headerTitle: {
    marginTop: HEADER_TITLE,
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
    position: 'absolute',
    left: '36%',
  },
  cardContainer: {
    marginHorizontal: 10,
  },
  card: {
    width: '100%',
    height: 360,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 235,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contantMain: {
    marginHorizontal: 10,
  },
  cityTitle: {
    // marginTop: 10,
    color: '#666666',
    marginLeft: 2,
    fontSize: 14,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    marginTop: 10,
  },
  ViewersText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  ratingText: {
    color: '#222222',
    fontWeight: 'bold',
    marginRight: 3,
    fontSize: 14,
  },
  tourDisc: {
    marginTop: 10,
    fontSize: 15,
    color: '#333333',
  },
  priceText: {
    color: '#222222',
    marginTop: 10,
    fontWeight: 'bold',
  },
  priceSubText: {
    color: 'gray',
    fontSize: 14,
    marginTop: 10,
  },
  averageRow: {
    flexDirection: 'row',
    marginRight: 5,
  },
  locationIcon: {
    marginTop: 2,
  },
  ratingIcon: {
    marginRight: 1,
  },
  cityRow: {
    flexDirection: 'row',
  },
});
export default styles;
