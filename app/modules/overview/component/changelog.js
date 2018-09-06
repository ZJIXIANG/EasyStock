import React,{Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform.js'
import HeaderCoulumn from './HeaderCoulumn'
import DoubleColumn from './doubleColumn'
import {SearchGroup} from '../../groups/components/categories'

export default  class ChangeLog extends Component{
    constructor(){
        super()
    }
    render(){
        <View>
            <HeaderCoulumn/>
            <SearchGroup/>
            <DoubleColumn/>
        </View>
    }
}