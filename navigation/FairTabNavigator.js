
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

//import ITSScreen from '../screens/sub_module/ITSScreen';
import NFRScreen from '../screens/sub_module/NFRScreen';

//import CoPTOld_ListScreen from '../screens/copt_old/CoPTOld_ListScreen';
//import CoPTOld_ViewScreen from '../screens/copt_old/CoPTOld_ViewScreen';
import CoPTNew_ListScreen from '../screens/copt_new/CoPTNew_ListScreen';
import CoPTNew_ViewScreen from '../screens/copt_new/CoPTNew_ViewScreen';

/*import DTS_Personnel_ListScreen from '../screens/dts/DTS_Personnel_ListScreen';
import DTS_Personnel_AddScreen from '../screens/dts/DTS_Personnel_AddScreen';
import DTS_Personnel_ViewScreen from '../screens/dts/DTS_Personnel_ViewScreen';
import DTS_Personnel_EditScreen from '../screens/dts/DTS_Personnel_EditScreen';*/

import NFRL_Customer_ListScreen from '../screens/nfrl/NFRL_Customer_ListScreen';
import NFRL_Customer_ViewScreen from '../screens/nfrl/NFRL_Customer_ViewScreen';
import NFRL_Customer_EditScreen from '../screens/nfrl/NFRL_Customer_EditScreen';
import NFRL_Customer_AddScreen from '../screens/nfrl/NFRL_Customer_AddScreen';
import NFRL_NotebookRent_ListScreen from '../screens/nfrl/NFRL_NotebookRent_ListScreen';
import NFRL_NotebookAll_ListScreen from '../screens/nfrl/NFRL_NotebookAll_ListScreen';
import NFRL_Reserve_ListScreen from '../screens/nfrl/NFRL_Reserve_ListScreen';
import NFRL_Reserve_AddScreen from '../screens/nfrl/NFRL_Reserve_AddScreen';
import NFRL_Reserve_ViewScreen from '../screens/nfrl/NFRL_Reserve_ViewScreen';
import NFRL_Reserve_EditScreen from '../screens/nfrl/NFRL_Reserve_EditScreen';
import NFRL_ListScreen from '../screens/nfrl/NFRL_ListScreen';
import NFRL_NBAllScreen from '../screens/nfrl/NFRL_NBAllScreen';
import NFRL_LoginScreen from '../screens/nfrl/NFRL_LoginScreen';

import EXS_Customer_AddScreen from '../screens/exs/EXS_Customer_AddScreen';
import EXS_Customer_EditScreen from '../screens/exs/EXS_Customer_EditScreen';
import EXS_Customer_ListScreen from '../screens/exs/EXS_Customer_ListScreen';
import EXS_Customer_ViewScreen from '../screens/exs/EXS_Customer_ViewScreen';
import EXS_ListScreen from '../screens/exs/EXS_ListScreen';
import EXS_Reserve_AddScreen from '../screens/exs/EXS_Reserve_AddScreen';
import EXS_Reserve_EditScreen from '../screens/exs/EXS_Reserve_EditScreen';
import EXS_Reserve_ListScreen from '../screens/exs/EXS_Reserve_ListScreen';
import EXS_Reserve_ViewScreen from '../screens/exs/EXS_Reserve_ViewScreen';
import EXS_LoginScreen from '../screens/exs/EXS_LoginScreen';

import Home_Screen from '../screens/nfrl/Home_Screen';

/*
const DTSStack = createStackNavigator({
    DTS_Personnel_List: DTS_Personnel_ListScreen,
    DTS_Personnel_Add: DTS_Personnel_AddScreen,
    DTS_Personnel_View: DTS_Personnel_ViewScreen,
    DTS_Personnel_Edit: DTS_Personnel_EditScreen,
  });
  DTSStack.navigationOptions = {
    tabBarLabel: 'DTS',    
};

const ITSStack = createStackNavigator({
    ITS: ITSScreen,
  });
  ITSStack.navigationOptions = {
    tabBarLabel: 'ITS',    
};*/




/*const NFRStack = createStackNavigator({
  NFR: NFRScreen,
});
NFRStack.navigationOptions = {
  tabBarLabel: 'NFR',  
};
*/
const HomeStack = createStackNavigator({
  Home: Home_Screen,

});
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',  
};


/*const NFRStack = createStackNavigator({
  NFR: NFRScreen,
});
NFRStack.navigationOptions = {
  tabBarLabel: 'NFR',  
};*/





const NFRLStack = createStackNavigator({
  
  NFRL_Login: NFRL_LoginScreen,
  //NFRL_NBAll: NFRL_NBAllScreen,
  NFRL_List: NFRL_ListScreen,
  NFRL_Reserve_List: NFRL_Reserve_ListScreen,
  NFRL_Reserve_View: NFRL_Reserve_ViewScreen,
  NFRL_Reserve_Add: NFRL_Reserve_AddScreen,
  NFRL_Customer_Add: NFRL_Customer_AddScreen,
  NFRL_Reserve_Edit: NFRL_Reserve_EditScreen,
  NFRL_NotebookRent_List: NFRL_NotebookRent_ListScreen,
  NFRL_NotebookAll_List: NFRL_NotebookAll_ListScreen,
  NFRL_Customer_List: NFRL_Customer_ListScreen,
  NFRL_Customer_View: NFRL_Customer_ViewScreen,
  NFRL_Customer_Edit: NFRL_Customer_EditScreen,
  
  
});
NFRLStack.navigationOptions = {
  tabBarLabel: 'NFRL',  
};

const EXSStack = createStackNavigator({
  
  EXS_Login: EXS_LoginScreen,
  EXS_List: EXS_ListScreen,
  EXS_Reserve_List: EXS_Reserve_ListScreen,
  EXS_Reserve_View: EXS_Reserve_ViewScreen,
  EXS_Reserve_Add: EXS_Reserve_AddScreen,
  EXS_Reserve_View: EXS_Reserve_ViewScreen,
  EXS_Customer_Add: EXS_Customer_AddScreen,
  EXS_Customer_List: EXS_Customer_ListScreen,
  EXS_Customer_View: EXS_Customer_ViewScreen,
  EXS_Customer_Edit: EXS_Customer_EditScreen,
  
  
});
EXSStack.navigationOptions = {
  tabBarLabel: 'EXS',  
};

/*const CoPTOldStack = createStackNavigator({
  CoPTOld_List: CoPTOld_ListScreen,
  CoPTOld_View: CoPTOld_ViewScreen,
});
CoPTOldStack.navigationOptions = {
  tabBarLabel: 'CoPT-Old',  
};*/

const CoPTNewStack = createStackNavigator({
  CoPTNew_List: CoPTNew_ListScreen,
  CoPTNew_View: CoPTNew_ViewScreen,
});
CoPTNewStack.navigationOptions = {
  tabBarLabel: 'CoPT-New',
};


export default createBottomTabNavigator({
    HomeStack,
    NFRLStack,
    EXSStack,
    //DTSStack,
    //ITSStack,
    //NFRStack,
    //ITSStack,
    //CoPTOldStack,
    CoPTNewStack,
    //DTSStack, 
});




