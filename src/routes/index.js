import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Completed from '../screens/Completed';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Completed') {
              iconName = focused ? 'done' : 'done';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#5BED53',
          tabBarInactiveTintColor: '#FFF',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopColor: '#000',
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Bottom;
