import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: '#000000a0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#89DEB0',
    width: '80%',
    alignSelf: 'center',
    height: 38,
    borderRadius: 15,
    marginTop: 10,
  },
  button: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 7,
    fontSize: 16,
  },
  mainContainer: {
    position: 'absolute',
  },
});
export default styles;
