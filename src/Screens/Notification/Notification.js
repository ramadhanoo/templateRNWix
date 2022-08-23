/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Fonts } from '../../Themes';
import styles from './Notification.styles';
import { useNotification } from './useNotification';
import { LoadingOverlay, BaseScreens, ViewBox, Header } from '../../Components/index'

const Notification = (props) => {
    const { data, state, actions } = useNotification();
    const { signOut } = actions;
    const { themes } = state;

    return (
        <BaseScreens safeAreaColor={themes.backgroundColor} style={styles.container}>
            <Header text={"Notifikasi"} />
            <TouchableOpacity onPress={signOut} style={styles.button}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </BaseScreens>
    )
}

Notification.options = {
    topBar: {
        visible: false
    },
};

export default Notification;


