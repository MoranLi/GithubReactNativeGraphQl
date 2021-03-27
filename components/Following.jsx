import React from 'react';
import {
  FlatList, StyleSheet, Text, View, Button, Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    textAlign: 'center',
  },
  logo: {
    width: 66,
    height: 58,
    display: 'flex',
    margin: 'auto'
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

class FollowingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.state.datas = this.props.route.params;
  }
  render() {
    console.log(this.state.datas)
    return (
      <View style={styles.container}>
         <FlatList
          data={this.state.datas}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image
                style={styles.logo}
                source={{ uri: item.avatarUrl }}
              />
              <Text style={styles.baseText}>
                {item.name}
              </Text>
              <Button
                title={item.login}
                onPress={() => this.props.navigation.navigate('Main',{currName: item.login})}
              />
            </View>
          )}
        />
        <Button
          title="Go to Main"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

export default FollowingScreen;
