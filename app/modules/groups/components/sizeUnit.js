import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, SectionList, TouchableOpacity} from 'react-native'
import {sizeUnitData} from '../../../data.json'
import {ChoiceList} from '../../../CommonComponents/listEditing'
import {HeaderColumn} from '../components/currency'



export default class SizeUnit extends Component {
    render() {
        const {navigation} = this.props
        return (
        <View>
                <HeaderColumn navigation={navigation}/>
                <ChoiceList navigation={navigation} data={sizeUnitData}/>
        </View>
        )
    }
}