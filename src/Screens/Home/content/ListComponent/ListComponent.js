/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import styles from './ListComponent.styles'

const ListComponent = (props) => {
    const {
        title,
        id,
        description,
        image
    } = props.item

    return (
        <View style={styles.container}>
            <View style={styles.boxContent}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.text}>{title}</Text>
            </View>

            <Text style={styles.textDesc}>{description}</Text>
        </View>

    )
}

ListComponent.defaultProps = {
    item: {
        title: "",
        id: 0,
        description: "",
        image: ""
    }
}

export default ListComponent;


