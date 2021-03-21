import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  FlatList, ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import Repository from '../model/Repository';

class RepoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, datas : [] };
  }
  componentDidMount() {
    return fetch('http://api.github.com/graphql',{
        method: 'POST',
        headers: {
          'Authorization' : 'bearer 3fd2164e9c663e72caebee19950ef7b9347e3c44'
        },
        body: JSON.stringify({query:'{ viewer { repositories(first: 100) { nodes { name owner { login } description } } } }'})
      })
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        for (let i = 0; i < responseJson["data"].viewer.repositories.nodes.length; i ++){
          this.state.datas.push(new Repository(responseJson["data"].viewer.repositories.nodes[i]));
        }
        this.setState(
          {
            isLoading: false,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  render(){
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View style={styles.container}>
         <FlatList
          data={this.state.datas}
          renderItem={({ item }) => (
            <Text>
              {item.getName()}, {item.getUsername()}, {item.getDescription()}
            </Text>
          )}
        />
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

export default RepoScreen;