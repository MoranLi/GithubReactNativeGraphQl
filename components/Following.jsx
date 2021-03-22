import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

class FollowingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
          This is Following
        </Text>
        <Button
          title="Go to Main"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

export default FollowingScreen;
