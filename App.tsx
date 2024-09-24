import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FirstScreen from './src/screens/FirstScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <FirstScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
