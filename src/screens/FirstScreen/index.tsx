import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {stars} from '../../assets/svgs';
import {scale} from '../../theme';
import {SvgXml} from 'react-native-svg';
import CustomParagraph from '../../components/CustomParagraph';
import CustomButton from '../../components/CustomButton';

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <SvgXml xml={stars} width={scale(315)} height={scale(273)} />
      </View>
      <View style={styles.textAndButtonContainer}>
        <CustomParagraph
          header="Explore the app"
          description="Now your finances are in one place and always under control"
        />

        <View>
          <CustomButton
            text="Sign In"
            active
            onPress={() => {
              console.log('Sign In button pressed');
            }}
          />
          <CustomButton
            text="Sign Up"
            onPress={() => {
              console.log('Sign up button pressed');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
