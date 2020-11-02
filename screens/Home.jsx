import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { SIZES } from '../constants';

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ paddingVertical: SIZES.padding, alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  </SafeAreaView>
);

export default Home;
