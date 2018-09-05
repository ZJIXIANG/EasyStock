import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'
import {ForExample} from '../data.json'
import NoImgColumnForItm from './noImgColumnForItm'
import NoResultComponent from './noResult'
import AddCategory from '../modules/groups/components/addCategory'


const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight

export class ChoiceList extends Component{
    constructor(props){
        super(props)
    }
    _renderItem(item){
        console.log(item)
        return <NoImgColumnForItm data={item}></NoImgColumnForItm>
    }
    render(){
        const {data} = this.props
        return(
            <View style={styles.listBg}>
                <FlatList
                    data = {data}
                    renderItem = {(item => this._renderItem(item))}
                    keyExtractor = {(item,index) => index}
                >
                </FlatList>
            </View>
        )
    }
}


export class HeaderColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        const title = navigation.getParam('title')
        const {direction} = this.props
        return(
            <View style={styles.HeaderColumnContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../images/nav_返回icon.png')} style={styles.leftImg}></Image>
                </TouchableOpacity>
                <Text style={styles.HeaderTextMidd}>{title}</Text>
                <TouchableOpacity style={styles.rightImg} onPress={() => navigation.navigate(direction)}>
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
        const {navigation} =this.props
        const ShowChoiceList = ForExample.length == 4 ? <ChoiceList data={ForExample}/> : <NoResultComponent text={navigation.getParam('title')}/> ;
        return(
            <View>
                <HeaderColumn navigation={navigation}></HeaderColumn>
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