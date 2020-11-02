import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../constants';
import { Home, Settings } from '../screens';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: 'black'
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.lightBlue : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (<Ionicons name="md-checkmark-circle" size={32} color={tintColor} />);

            case 'Settings':
              return (<Ionicons name="md-checkmark-circle" size={32} color={tintColor} />);
          }
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
