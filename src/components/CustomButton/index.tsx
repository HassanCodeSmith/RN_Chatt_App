import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import theme, {scale} from '../../theme';

interface CustomButtonProps {
  text: string;
  active?: boolean;
  onPress: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        styles.container,
        {backgroundColor: props.active ? theme.colors.black : ''},
      ]}>
      <Text
        style={[styles.text, {color: props.active ? theme.colors.white : ''}]}>
        {props.text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: scale(1),
    borderColor: theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(15),
    borderRadius: scale(10),
    width: '90%',
    alignSelf: 'center',
    marginVertical: scale(5),
  },

  text: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.black,
  },
});
