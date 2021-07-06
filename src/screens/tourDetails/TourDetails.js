import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './TourDetailsStyle.js';
import Icon from 'react-native-vector-icons/Ionicons';

const TourDetails = ({route, navigation}) => {
  const {data} = route.params;

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.card}>
        <Image style={styles.image} source={{uri: item.thumbnail_url}} />
        <View style={styles.contantMain}>
          <View style={styles.firstRow}>
            <View style={styles.cityRow}>
              <Icon
                style={styles.locationIcon}
                name="location-sharp"
                size={14}
                color="#666666"
              />
              <Text style={styles.cityTitle}>{item.city}</Text>
            </View>
            <View style={styles.averageRow}>
              <Icon
                style={styles.ratingIcon}
                name="star-sharp"
                size={15}
                color="#42c88a"
              />
              <Text style={styles.ratingText}>{item.average_rating}</Text>
              <Text style={styles.ViewersText}>({item.number_of_reviews})</Text>
            </View>
          </View>
          <Text style={styles.tourDisc}>{item.name}</Text>
          <View style={styles.cityRow}>
            <Text style={styles.priceText}>From ${item.price_in_usd}</Text>
            <Text style={styles.priceSubText}> / Person</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            style={styles.headerIcon}
            name="ios-arrow-back-sharp"
            size={30}
            color="white"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Tour Mega</Text>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default TourDetails;
