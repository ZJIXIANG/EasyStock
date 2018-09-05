import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, FlatList} from 'react-native';
import {storageList} from '../../../data.json'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {HeaderColumn} from '../../../CommonComponents/listEditing'
import NoResult from '../../../CommonComponents/noResult'



export default class Storage extends Component{

    static navigationOptions = {
        header:null
    }

    constructor(props){
        super(props)
    }

    _renderItem(item,index){
        return(
            <View key={index} style={styles.listContainer}>
                <Text style={styles.listTitle}> {item.title} </Text>
                <Text style={styles.listNums}>{item.nums}</Text>
                <Image style={styles.listImg} source={require('../../../images/nav_添加icon.png')}/>
            </View>
        )
    }

    render(){
        const {navigation} = this.props
        const showStorage = storageList.length == 0 ? <NoResult text='Storage'/> : storageList.map( (item,index) => this._renderItem(item,index))
        return(
            <View>
                <HeaderColumn navigation={navigation}/>
                {
                    showStorage
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(100),
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(34),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomWidth:toDeviceSize(1),
        borderStyle:'solid',
        borderBottomColor:'#E6E6E6'
    },
    listTitle:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        letterSpacing:0
    },
    listNums:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'right',
        letterSpacing:0,
        position:'absolute',
        right:toDeviceSize(69)
    },
    listImg:{
        width:toDeviceSize(24),
        height:toDeviceSize(24)
    }


})