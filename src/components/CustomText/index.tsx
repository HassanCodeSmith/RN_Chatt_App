import {StyleSheet, Text, View, TextProps} from 'react-native';
import React from 'react';

const index = (props: TextProps) => {
  return (
    <Text {...props} style={(styles.text, props.style)}>
      index
    </Text>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {},
});
