import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.callApi();
  }
  async callApi() {
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json',
    );
    let responseJson = await response.json();
    this.setState({ data: responseJson.movies });
  }

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 40,
            margin: 10,
            textAlign: 'center',
          }}>
          Api Integration Basic Example{' '}
        </Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text
              style={{ fontSize: 25, margin: 10, backgroundColor: 'skyblue' }}>
              {item.id}, {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      </View>
    );
  }
}
export default App;
