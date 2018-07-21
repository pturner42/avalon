import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class AddPlayersScreen extends React.Component {

  state = { newName: '' }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%'}}>
          <Text style={{ color: '#acf', fontSize: 40, margin: 20, textAlign: 'center' }}>avalon</Text>
        </View>
        <Text style={{ color: 'white', fontSize: 24 }}>Add new player:</Text>
        <TextInput
          style={{height: 40, width: '100%', borderColor: '#fff', borderWidth: 1, borderTopWidth: 0, marginTop: 10, marginBottom: 10, padding: 5, color: 'white'}}
          onChangeText={(newName) => this.setState({newName})}
          value={this.state.newName}
          onSubmitEditing={() => {
            this.props.addPlayer(this.state.newName);
            this.setState({ newName: '' });
          }}
          autoCorrect={false}
          returnKeyType="done"
        />
        <TouchableOpacity
          onPress={this.props.begin}
          style={{borderColor: '#4f5', borderWidth: 1, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, margin: 10}}
        >
          <Text style={{ color: this.props.players.length >= 5 ? '#4f5' : '#666', fontSize: 24 }}>Begin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.reset}
          style={{borderColor: '#fff', borderWidth: 1, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, margin: 10}}
        >
          <Text style={{ color: '#fff', fontSize: 24 }}>Reset</Text>
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 24 }}>Current player list:</Text>
        {
          this.props.players.map((player) => <Text style={{ color: '#bbb', fontSize: 22 }} key={player}>{player}</Text>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 50,
  },
});
