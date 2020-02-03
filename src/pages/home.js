import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import { ListItem } from 'react-native-elements';



const DATA = [
  {
    id: '1',
    title: 'First Item',
    name: 'test1',
  },
  {
    id: '2',
    title: 'Second Item',
    name: 'test2',
  },
  {
    id: '3',
    title: 'Third Item',
    name: 'test3',
  },
];


class HomeScreen extends Component {  
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      data: [],
      pokemonData: [] ,
      localData: [DATA],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  };

  componentDidMount() {
    this.makeRemoteRequest();
    this.remoteRequestPoke();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };
  
  remoteRequestPoke = () => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    
    fetch(url)
      .then(pokemon => pokemon.json())
      .then(pokemon => {
        this.setState({
          pokemonData: pokemon.results,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }

  pressHandler = (item) =>{
    this.props.navigation.navigate("Posts", {
        id:item.login.uuid,
        firstname: item.name.first,
        lastname: item.name.last
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          // data={DATA}
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.pressHandler(item)}> 
              <ListItem 
                roundAvatar
                // title={`${item.id} ${item.title} ${item.name}`}
                title={`${item.name.first} ${item.name.last} ${item.login.uuid}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        /> 
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
