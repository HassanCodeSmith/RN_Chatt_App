import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import theme, {scale} from '../../theme';

interface CustomParagraphProps {
  header: string;
  description?: string;
}
const CustomParagraph: React.FC<CustomParagraphProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.header}</Text>
      {props.description ? (
        <Text style={styles.description}>{props.description}</Text>
      ) : null}
    </View>
  );
};

export default CustomParagraph;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: theme.fontSizes.big,
    fontWeight: 'bold',
    paddingVertical: scale(5),
    color: theme.colors.black,
  },

  description: {
    textAlign: 'center',
    fontSize: theme.fontSizes.medium,
    fontWeight: 'medium',
  },
});
