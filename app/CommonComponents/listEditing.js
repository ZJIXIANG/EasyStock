import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'
import {ForExample} from '../data.json'
import NoImgColumnForItm from './noImgColumnForItm'
import NoResultComponent from './noResult'


const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight

class ChoiceList extends Component{
    _renderItem(item){
        return <NoImgColumnForItm data={item}></NoImgColumnForItm>
    }
    render(){
        return(
            <View style={styles.listBg}>
                <FlatList
                    data = {ForExample}
                    renderItem = {(item => this._renderItem(item))}
                    keyExtractor = {(item,index) => item.title}
                >
                </FlatList>
            </View>
        )
    }
}


class HeaderColumn extends Component{
    render(){
        return(
            <View style={styles.HeaderColumnContainer}>
                <TouchableOpacity>
                    <Image source={require('../images/nav_返回icon.png')} style={styles.leftImg}></Image>
                </TouchableOpacity>
                <Text style={styles.HeaderTextMidd}>Group</Text>
                <TouchableOpacity>
                    <Image source={require('../images/nav_添加icon.png')} style={styles.rightImg}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class ListEdite extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        const ShowChoiceList = ForExample.length == 4 ? <NoResultComponent text='Add a group'/> : <ChoiceList/> ;
        return(
            <View>
                <HeaderColumn></HeaderColumn>
                {ShowChoiceList}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HeaderColumnContainer:{
        width : toDeviceSize(750),
        height : toDeviceSize(128),
        paddingTop : toDeviceSize(63),
        paddingLeft : toDeviceSize(30),
        paddingRight : toDeviceSize(30),
        paddingBottom : toDeviceSize(22),
        flexDirection : 'row',
        justifyContent : 'space-between' ,
        backgroundColor : '#00ADED',
        alignItems:'center',        
    },
    HeaderTextMidd:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
        lineHeight: toDeviceSize(36),
    },
    listBg:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'#FFFFFF',
    },
    
})