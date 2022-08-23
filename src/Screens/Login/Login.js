/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    Image
} from 'react-native';
import { Fonts, Images } from '../../Themes';
import styles from './Login.styles';
import { useLogin } from './useLogin';
import { LoadingOverlay, BaseScreens, ViewBox } from '../../Components/index'

const Login = (props) => {
    const { data, state, actions } = useLogin();
    const { actionsData, showToast, navigateToNotification, navigateToHome } = actions;
    const { themes } = state;

    const url = "templatereactnavigation://app/notification"

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <Image style={styles.image} source={Images.background} />
            <TouchableOpacity onPress={navigateToHome} style={styles.button}>
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </BaseScreens>
    )
}

Login.options = {
    topBar: {
        visible: false
    },
};


export default Login;


