import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Cards = () => {
  return (
    <View>
      <Text>Cards</Text>
      <Link className='text-white' href='/suceess'>
        Go to sucess
      </Link>
    </View>
  );
};

export default Cards;
