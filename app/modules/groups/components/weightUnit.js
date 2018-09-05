import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, SectionList, TouchableOpacity} from 'react-native'
import {weightUnitData, sizeUnitData} from '../../../data.json'
import {ChoiceList} from '../../../CommonComponents/listEditing'
import {HeaderColumn} from '../components/currency'



export default class weightUnit extends Component {
    render() {
        const {navigation} = this.props
        const Title = navigation.getParam('title')
        if( Title == 'Size unit'){
            needData = {sizeUnitData}
        } else{
            needData = {weightUnitData}
        }
        return (
        <View>
                <HeaderColumn navigation={navigation}/>
                <ChoiceList navigation={navigation} data={sizeUnitData}/>
        </View>
        )
    }
}
