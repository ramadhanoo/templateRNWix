import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../Themes';
import {ScreenWidth, scaleWithPixel} from '../../../../Transforms';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.greyLight2,
    width: ScreenWidth * 0.8,
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: scaleWithPixel(50),
    height: scaleWithPixel(50),
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.blackLuckyDraw,
    fontSize: 20,
    marginLeft: 10,
  },
  textDesc: {
    color: Colors.greyLight,
    ...Fonts.style.normal,
    marginTop: 10,
  },
});
