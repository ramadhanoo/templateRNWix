import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ThemesActions, {ThemeSelectors} from '../../Redux/ThemeRedux';
import {success} from '../../Components/index';
import SampleActions, {SampleSelectors} from '../../Redux/SampleRedux';
import {ActivityIndicator} from 'react-native';

export const useHome = () => {
  const dispatch = useDispatch();
  const themeSelector = useSelector(state => state.theme);
  const themes = useSelector(ThemeSelectors.getColors);
  const sampleRedux = useSelector(state => state.sample);

  useEffect(() => {
    dispatch(SampleActions.setDataSampleReq());
  }, [dispatch]);

  const onRefresh = () => {
    dispatch(SampleActions.setDataSampleReq());
  };

  const renderLoadingComponent = () => {
    if (!sampleRedux.loading) {
      return;
    } else {
      return <ActivityIndicator size={'large'} />;
    }
  };

  const actionsData = () => {
    console.log('haloo');
    dispatch(ThemesActions.changeTheme({dark: !themeSelector.dark}));
  };

  const showToast = () => {
    success('test', 'gaha');
  };

  const navigateToNotification = () => {};

  return {
    state: {
      themes,
      sampleRedux,
    },
    actions: {
      onRefresh,
      actionsData,
      showToast,
      navigateToNotification,
      renderLoadingComponent,
    },
    data: {},
  };
};
