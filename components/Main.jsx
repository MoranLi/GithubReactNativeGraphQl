import React from 'react';
import {
  ActivityIndicator, View, Image, StyleSheet, Button, Text,
} from 'react-native';
import Profile from '../model/Profile';

const viewerQuery = 'query{ viewer{ 	avatarUrl name login bio websiteUrl email repositories{ totalCount } followers(first:100){ totalCount nodes{ avatarUrl name login } } following(first:100){ totalCount nodes{ avatarUrl name login } } createdAt } }';

const userQueryBegin = 'query{ user(login:\"';
const userQueryEnd = '\"){ avatarUrl name login bio websiteUrl email repositories{ totalCount } followers(first:100){ totalCount nodes{ avatarUrl name login } } following(first:100){ totalCount nodes{ avatarUrl name login } } createdAt } }';

function fetchWithQuery(queryString){
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'bearer',
    },
    body: JSON.stringify({ query : queryString}),
  })
}

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, haveName: false, currName: "" };
  }
  
  async componentDidMount() {
    return fetchWithQuery(viewerQuery).then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: new Profile(responseJson.data.viewer),
          },
          () => {},
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }


  async componentDidUpdate(prevProps){
    if (this.props != prevProps){
      if (this.props.route.params != null){
        this.state = { isLoading: true, haveName: this.props.route.params.haveName, currName: this.props.route.params.currName};
      }
      let queryStr = viewerQuery;
      if(this.state.haveName == true){
        queryStr = userQueryBegin+this.state.currName+userQueryEnd;
      }
      return fetchWithQuery(queryStr)
        .then((response) => response.json())
        .then((responseJson) => {
          let data = responseJson.data.viewer;
          if (this.state.haveName == true){
            data = responseJson.data.user;
          }
          this.setState(
            {
              isLoading: false,
              dataSource: new Profile(data),
            },
            () => {},
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
        <Image
          style={styles.logo}
          source={{ uri: this.state.dataSource.getLogo() }}
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
          title={`Repos: ${this.state.dataSource.getRepoCount()}`}
          onPress={() => this.props.navigation.navigate('Repo')}
        />
        <Button
          title={`Following: ${this.state.dataSource.getFollowingCount()}`}
          onPress={() => this.props.navigation.navigate('Following', this.state.dataSource.getFollowing())}
        />
        <Button
          title={`Follower: ${this.state.dataSource.getfollowerCount()}`}
          onPress={() => this.props.navigation.navigate('Follower', this.state.dataSource.getFollowers())}
        />
      </View>
    );
  }
}

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
});