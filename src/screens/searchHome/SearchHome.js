import React from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import GooglePlaceSearch from '../../components/googlePlaceSearch/GooglePlaceSearch';
import image from '../../assets/bg.png';
import styles from './SearchHomeStyle';
import UseSearchHome from '../../customHooks/UseSearchHome';

const Home = ({navigation}) => {
  const [placeId, setPlaceId, submitHandler] = UseSearchHome(navigation);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <View style={styles.mainContainer}>
            <Text style={styles.text}>
              Search hundreds of travel sites at once
            </Text>
            <GooglePlaceSearch setPlaceId={setPlaceId} placeId={placeId} />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={submitHandler}>
              <Text style={styles.button}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
