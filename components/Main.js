import React, { Component } from 'react';
import { ActivityIndicator, View, Image, StyleSheet, Button, Text } from 'react-native';
import Profile from '../model/Profile';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('http://api.github.com/graphql',{
        method: 'POST',
        headers: {
          'Authorization' : 'bearer '
        },
        body: JSON.stringify({query:'{viewer { avatarUrl name login bio websiteUrl email repositories{ totalCount } followers{ totalCount } following{ totalCount } createdAt }}'})
      })
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: new Profile(responseJson["data"].viewer)
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={{uri: this.state.dataSource.getLogo()}}
        />
        <Text>
          {this.state.dataSource.getName()}
        </Text>
        <Text>
          {this.state.dataSource.getUsername()}
        </Text>
        <Text>
          {this.state.dataSource.getBio()}
        </Text>
        <Text>
          {this.state.dataSource.getWebsite()}
        </Text>
        <Text>
          {this.state.dataSource.getEmail()}
        </Text>
        <Text>
          {this.state.dataSource.getDate()}
        </Text>
        <Button
          title={"Repos: "+this.state.dataSource.getRepoCount()}
          onPress={() =>
            this.props.navigation.navigate('Repo')
          }
        />
        <Button
          title={"Following: "+this.state.dataSource.getFollowingCount()}
          onPress={() =>
            this.props.navigation.navigate('Following')
          }
        />
        <Button
          title={"Follower: "+this.state.dataSource.getfollowerCount()}
          onPress={() =>
            this.props.navigation.navigate('Follower')
          }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default MainScreen;