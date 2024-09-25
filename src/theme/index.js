import {Platform} from 'react-native';
import {
  responsiveHeight as height,
  responsiveScreenWidth as width,
  responsiveFontSize as fontSize,
} from 'react-native-responsive-dimensions';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export {scale, verticalScale, moderateScale};
export const normalized = {height, width, fontSize};
export default theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
  },
  fontFamily: {
    genosBold: 'Genos-Bold',
    genosSemiBold: 'Genos-SemiBold',
    genosMedium: 'Genos-Medium',
    genosRegular: 'Genos-Regular',
  },
  fontSizes: {
    xxbig: normalized.fontSize(5.92),
    xbig: normalized.fontSize(4.53),
    big: normalized.fontSize(3.77),
    xxmedium: normalized.fontSize(3.23),
    xmedium: normalized.fontSize(2.84),
    medium: normalized.fontSize(2.46),
    small: normalized.fontSize(2.07),
    verySmall: normalized.fontSize(1.69),
    tinySmall: normalized.fontSize(1.3),
  },
};
