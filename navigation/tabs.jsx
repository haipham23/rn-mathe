import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../constants';
import { Home, Settings } from '../screens';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  activeTintColor: COLORS.lightBlue,
  inactiveTintColor: COLORS.gray,
  style: {
    height: '10%'
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabOptions={tabOptions}
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.lightBlue : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return <Ionicons name="md-home" size={32} color={tintColor} />;

            case 'Settings':
              return (
                <Ionicons name="md-settings" size={32} color={tintColor} />
              );

            default:
              return null;
          }
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Tabs;
