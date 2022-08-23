import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index'
import SessionActions from '../../Redux/SessionRedux'
import StackComponent from '../../Navigation/StackComponent';


export const useNotification = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);

    useEffect(() => {
        
    }, []);

    const signOut = () => {
        console.log("haloo")
        dispatch(SessionActions.clearSession());
        StackComponent.setRootAuth();
    }


    return {
        state: {
            themes
        },
        actions: {
            signOut
        },
        data: {},
    };
}


