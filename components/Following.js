import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class FollowingScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.baseText}>
          This is Following
        </Text>
        <Button
          title="Go to Main"
          onPress={() =>
            this.props.navigation.navigate('Main')
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default FollowingScreen;