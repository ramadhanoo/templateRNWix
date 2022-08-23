import React, { useState } from "react";
import {
    View,
    ActivityIndicator,
    Text
} from "react-native";
import Modal from 'react-native-modal';
import styles from './Header.styles'

export const Header = ({ text }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

Header.defaultProps = {
    text: ""
};
