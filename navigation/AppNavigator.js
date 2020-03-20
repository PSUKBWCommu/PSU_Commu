import React from 'react';
import {   
  createAppContainer, 
  createSwitchNavigator } 
from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

import PSUTabNavigator from './PSUTabNavigator';



/*
export default createAppContainer(createSwitchNavigator({
  MainTabNavigator,
}));
*/

export default createAppContainer(createDrawerNavigator({    
  
  //Main: MainTabNavigator,
  'ม.อ.' : PSUTabNavigator, // PSU
  //ประชาสัมพันธ์ : SchedulesTabNavigator, // PR  
  //สถานที่ : LocationsTabNavigator,  // Locations       
  
}));



