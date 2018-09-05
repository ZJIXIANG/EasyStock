import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'
import {HeaderColumn} from '../CommonComponents/listEditing'
import {sortList} from '../data.json'
import SortColumnForItem from '../CommonComponents/sortColumnForItem'
import NoResultComponent from './noResult'




export class SortList extends Component{

    constructor(props){
        super(props)
        
    }

    _renderItem(item){
        return <SortColumnForItem data={item.item}></SortColumnForItem>
    }

    render(){
        const needData = this.props.data 
        return(
            <FlatList
                data = {needData}
                renderItem = {(item => this._renderItem(item))}
                keyExtractor = {(item,index) => item.title}
            >
            </FlatList>
        )
    }
}

export default class SortEditing extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        const {navigation} =this.props
        const title = navigation.getParam('title')
        const showList = sortList.length === 0 ? <NoResultComponent text={title}/> : <SortList data={sortList}></SortList>
        return(
            <View>
                <HeaderColumn navigation={navigation}></HeaderColumn>
                {showList}
            </View>
        )
    }
}


