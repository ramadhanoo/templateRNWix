import { Navigation } from 'react-native-navigation';
import { NAVIGATION_NAME } from './NavigationName';
import { Images, Colors } from '../Themes';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


async function prepareIcons() {

  const icons = await Promise.all([
    MaterialIcons.getImageSource('home', 25),
    Ionicons.getImageSource('ios-newspaper-outline', 25),
  ]);

  const [home, berita] = icons;
  return { home, berita };
}

// sample to set Auth.login screen as Root Screen
function setRootAuth() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'auth',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.AUTH.login,
              // name: NAVIGATION_NAME.AGENT.connected
            },
          },
        ],
      },
    },
  });
}


async function setRootHome() {
  const icons = await prepareIcons();
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MAIN_STACK_OTA',
        children: [
          {
            bottomTabs: {
              id: 'bottom_tab_main_ota',
              children: [
                {
                  component: {
                    name: NAVIGATION_NAME.HOME.home,
                    options: {
                      bottomTab: {
                        text: 'Home',
                        textColor: '#9e9e9e',
                        selectedTextColor: '#d82530',
                        iconColor: '#9e9e9e',
                        selectedIconColor: '#d82530',
                        icon: icons.home,
                      },
                    },
                  },
                },
                {
                  component: {
                    name: NAVIGATION_NAME.HOME.notification,
                    options: {
                      bottomTab: {
                        text: 'Notifikasi',
                        textColor: '#9e9e9e',
                        selectedTextColor: '#d82530',
                        iconColor: '#9e9e9e',
                        selectedIconColor: '#d82530',
                        icon: icons.berita,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}



export default {
  setRootAuth,
  setRootHome
};
