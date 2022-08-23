import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes';
import { scaleWithPixel, ScreenHeight, ScreenWidth } from '../../Transforms';

export default StyleSheet.create({
    container: {
        width: ScreenWidth,
        height: ScreenHeight * 0.1,
        backgroundColor: Colors.opsicorp,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    text: {
        ...Fonts.style.inputBoldWhite,
        Colors: Colors.white

    }
});
