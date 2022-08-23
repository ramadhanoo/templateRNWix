import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index';
import StackComponent from '../../Navigation/StackComponent';
import SessionActions from '../../Redux/SessionRedux'


export const useLogin = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);

    useEffect(() => {
        
    }, []);

    const actionsData = () => {
        console.log("haloo")
        dispatch(ThemesActions.changeTheme({ dark: !themeSelector.dark }))
    }

    const showToast = () => {
        success("test", "gaha")
    }

    const navigateToNotification = () => {

    }

    const navigateToHome = () => {
        dispatch(SessionActions.login());
        StackComponent.setRootHome()
    }

    return {
        state: {
            themes
        },
        actions: {
            actionsData,
            showToast,
            navigateToNotification,
            navigateToHome
        },
        data: {},
    };
}


