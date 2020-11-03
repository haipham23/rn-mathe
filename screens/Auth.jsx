import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import { SIZES, COLORS } from '../constants';

const Auth = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ paddingVertical: SIZES.padding, alignItems: 'center' }}>
      <Text>Auth</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          height: 40,
          width: 100,
          paddingLeft: 3,
          paddingRight: SIZES.radius,
          borderRadius: 20
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white
            }}
          >
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default Auth;
