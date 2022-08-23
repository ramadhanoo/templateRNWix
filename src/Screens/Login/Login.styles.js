import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Themes';
import { ScreenHeight, ScreenWidth, scaleWithPixel } from '../../Transforms';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: Colors.greyText,
        fontFamily: Fonts.type.black,
    },
    image: {
        width: 100,
        height: 100 
    },
    button: {
        position: 'absolute',
        bottom: 0,
        width: '60%',
        height: scaleWithPixel(40),
        backgroundColor: Colors.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: Colors.grey,
        zIndex: 1000
    },
    buttonText: {
        ...Fonts.style.inputBoldWhite
    },
    text: {
        color: Colors.white, 
        fontWeight: '700', 
        letterSpacing: 0.5
    }
});
