import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { SIZES } from '../constants';

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingVertical: SIZES.padding, alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
