import {useState} from 'react';

import axios from 'axios';
import {endPoint} from '../config/EndPoint';

export default function UseSearchHome(navigation) {
  const [placeId, setPlaceId] = useState(null);

  const submitHandler = async () => {
    try {
      const response = await axios.get(`${endPoint}/api/v2/tours`, {
        params: {
          location_id: placeId,
        },
      });

      navigation.navigate('Details', {data: response.data});
    } catch (error) {
      console.error(error);
    }
  };
  return [placeId, setPlaceId, submitHandler];
}
