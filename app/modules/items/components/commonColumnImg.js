import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, FlatList} from 'react-native';
import needData from '../../../data.json'
import HasImgColumnForItem from '../../../CommonComponents/hasImgColumnForItem'


export  class CommonColumnImg extends Component{
    render(){
        return(
            <FlatList
                    data = {needData.searchResut}
                    renderItem = {(item => this._renderItem(item))}
                >
                </FlatList>
        )
    }

    _renderItem(item){
        return (<HasImgColumnForItem data={item.item}></HasImgColumnForItem>)
    }
}