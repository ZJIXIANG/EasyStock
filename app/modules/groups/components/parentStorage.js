import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, SectionList, Dimensions} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {sortList} from '../../../data.json'
import {createStackNavigator} from 'react-navigation'
import TextEditing from '../../../CommonComponents/textEditing'
import {HeaderColumn} from './currency'
import {SortList} from '../../../CommonComponents/sortEditing'


const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight


export default class ParentStorage extends Component{
    render(){
        const {navigation} = this.props
        return(
            <View style={styles.Bg}>
                <HeaderColumn navigation={navigation}/>
                <SortList data={sortList}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Bg:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'white'
    }
})

