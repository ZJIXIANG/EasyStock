import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

// 导入底部导航栏的4个根组件
import Items from './app/modules/items/items.js'
import Groups from './app/modules/groups/groups.js'
import Overview from './app/modules/overview/overview.js'
import Settings from './app/modules/settings/settings.js'


export default createBottomTabNavigator(
    {
		Items,
		Groups,
		Overview,
		Settings,
		},
		{
			initialRouteName:'Overview'
		}
)