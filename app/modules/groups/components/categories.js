import React,{Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform.js'
import SortColumnItem from './sortColumnForGroup'
import {createStackNavigator} from 'react-navigation'
import {sortListForGroup} from '../../../data.json'
import AddCategory from './addCategory'

const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight


export class HeaderColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} =this.props
        return(
            <View style={styles.HeaderColumnContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../images/nav_返回icon.png')} style={styles.leftImg}></Image>
                </TouchableOpacity>
                <Text style={styles.HeaderTextMidd}>{navigation.getParam('title')}</Text>
                <TouchableOpacity style={styles.rightImg} onPress={() => navigation.navigate('AddCategory',{title:'Storages'})}>
                    <Image source={require('../../../images/nav_添加icon.png')} style={styles.rightImg}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

export class SearchGroup extends Component{
    render(){
        return(
            <View style={styles.searchContainer}>
                <View style={styles.searchInner}>
                    <Image style={styles.inenrImg} source={require('../../../images/search_icon.png')}/>
                    <Text style={styles.innerText}>Search</Text>
                </View>
            </View>
        )
    }
}



class Category extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
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

const CategoryStack = createStackNavigator(
    {
        Category,
        AddCategory
    },
    {
        navigationOptions:{
            header:null
        }
    }
)

export default CategoryStack

const styles = StyleSheet.create({
    BgColor:{
        width:toDeviceSize(750),
        height:noSearchHeight,
        backgroundColor:'white'
    },
    searchContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(89),
        borderBottomWidth:toDeviceSize(1),
        borderBottomColor:'#E6E6E6',
        borderStyle:'solid',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    searchInner:{
        width:toDeviceSize(690),
        height:toDeviceSize(56),
        backgroundColor:'#F5F7F7',
        borderRadius:toDeviceSize(12),
        paddingBottom:toDeviceSize(12),
        paddingTop:toDeviceSize(10),
        paddingLeft:toDeviceSize(20),
        flexDirection:'row',
        alignItems:'center',
    },
    inenrImg:{
        width:toDeviceSize(23),
        height:toDeviceSize(23),
    },
    innerText:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#D7DADB',
        textAlign :'left',
        lineHeight: toDeviceSize(34),
        marginLeft:toDeviceSize(20),
    },
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
})