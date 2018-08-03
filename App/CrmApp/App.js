import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Beijo no ombro pro recalque passar longe </Text>
        <Text>Beijo no ombro pro recalque passar longe </Text>
        <Text>Como noiz é foda, as mudaças serão automaticamente uploadadas.</Text>
        <Text>Mexe esse telefone pra sair dessa bagaça.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
