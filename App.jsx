import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/Main';
import RepoScreen from './components/Repo';
import FollowingScreen from './components/Following';
import FollowerScreen from './components/Follower';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen
          name="Repo"
          component={RepoScreen}
        />
        <Stack.Screen
          name="Following"
          component={FollowingScreen}
        />
        <Stack.Screen
          name="Follower"
          component={FollowerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
