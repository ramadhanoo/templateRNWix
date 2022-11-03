/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  FlatList,
  RefreshControl,
} from 'react-native';
import styles from './Home.styles';
import {useHome} from './useHome';
import {BaseScreens, Header} from '../../Components/index';
import ListComponent from './content/ListComponent/ListComponent';

const Home = props => {
  const {data, state, actions} = useHome();
  const {showToast, onRefresh} = actions;
  const {themes} = state;

  return (
    <BaseScreens
      safeAreaColor={themes.backgroundColor}
      style={styles.container}>
      <Header text={'Home'} />
      <FlatList
        ListHeaderComponent={actions.renderLoadingComponent()}
        refreshControl={
          <RefreshControl
            refreshing={state.sampleRedux.loading}
            onRefresh={onRefresh}
          />
        }
        data={state.sampleRedux.data}
        contentContainerStyle={styles.listStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <ListComponent item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </BaseScreens>
  );
};

Home.options = {
  topBar: {
    visible: false,
  },
};

export default Home;
