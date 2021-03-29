import React from 'react';
import {
  FlatList, ActivityIndicator, StyleSheet, Text, View, Button,
} from 'react-native';
import Repository from '../model/Repository';

const repoQuery = '{ viewer { repositories(first: 100) { nodes { name owner { login } description } } } }';

function fetchWithQuery(queryString){
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'bearer',
    },
    body: JSON.stringify({ query : queryString}),
  })
}

export default class RepoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, datas: [] };
  }

  async componentDidMount() {
    return fetchWithQuery(repoQuery)
      .then((response) => response.json())
      .then((responseJson) => {
        for (let i = 0; i < responseJson.data.viewer.repositories.nodes.length; i++) {
          this.state.datas.push(new Repository(responseJson.data.viewer.repositories.nodes[i]));
        }
        this.setState(
          {
            isLoading: false,
          },
          () => {},
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.datas}
          keyExtractor={(item, index) =>index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.baseText}>
              {item.getName()}
              ,
              {item.getUsername()}
              ,
              {item.getDescription()}
            </Text>
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

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    borderStyle: 'solid',
    borderWidth: 1
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
