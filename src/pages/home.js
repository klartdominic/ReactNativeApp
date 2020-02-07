import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Button,
  Alert,
  Platform,
} from 'react-native';
import styles from '.././styles/styles'
import { ListItem } from 'react-native-elements';

//array data
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
  //props variables
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

  //Load Before running program
  componentDidMount() {

    // const { navigation } = this.props //i do not know why this does not work
    // navigation.setParams({
    //   navigateTodoList: this._navigateTodoList,
    // })
    this.props.navigation.setParams({ navigateTodoList: this._navigateTodoList });
    this.makeRemoteRequest();
    this.remoteRequestPoke();
  }

  //navigation Option for header 
  static navigationOptions = ({navigation}) => {
    return{
      headerTitle: () => <Text>Testing1</Text>,
      headerRight: () => (
        <Button 
          onPress = { () => navigation.navigate("AddTodo")}
          title = "Add Todo"
          color = {
            Platform.OS === "ios"
            ? "#fff"
            : "#000"
          }
        />
      ),
    }
  };

  _navigateTodoList = () => {
    console.log("testalert")
  };


  //getting the data from API
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

  //handle the data more than 1 page. this also helps for scrolling
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

  //data separator
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
  
  //creating my own fetch data from another API
  remoteRequestPoke = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    fetch(url)
      .then(pokemon => pokemon.json())
      .then(pokemon => {
        this.setState({
          //used for multi-page API
          // pokemonData: page === 1 ? pokemon.results : [...this.state.pokemonData, ...pokemon.results],
          pokemonData: pokemon.results,
          error: pokemon.error || null,
          loading: false,
          refreshing: false,
        })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }
  
  //no idea yet what is the use 
  renderHeader = () => {
    return <Text>testing2</Text>;
  }

  //function for clicking the data
  pressHandler = (item) => {
    this.props.navigation.navigate("Posts", {
        name: item.name
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          // data={DATA}
          data={this.state.pokemonData}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.pressHandler(item)}> 
              <ListItem 
                roundAvatar
                title={`${item.name}`}
                subtitle={item.url}
                // avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
              <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                  <Text>Oops! You don't have any Tasks</Text>
              </View>
          }
          keyExtractor={item => item.url}
          ItemSeparatorComponent={this.renderSeparator}
          // ListHeaderComponent={this.renderHeader}
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
