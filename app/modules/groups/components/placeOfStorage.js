import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, SectionList, Dimensions} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {editGroupList,currencyList} from '../../../data.json'
import {createStackNavigator} from 'react-navigation'
import TextEditing from '../../../CommonComponents/textEditing'
import {HeaderColumn, SearchGroup, } from './categories'
import {sortListForGroup} from '../../../data.json'


const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight

export default class PlaceStorage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} =this.props
        return(
            <View style={styles.BgColor}>
                <HeaderColumn navigation={navigation}/>
                <SearchGroup/>
                {
                    sortListForGroup.map( (item,index) => <SortColumnItem data = {item}/>)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BgColor:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'white'
    },
})