import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {toDeviceSize} from '../../utils/sizeTransform'
import {ItemColumn} from '../groups/groups'
import {overviewData} from '../../image'
import {overViewBottomList} from '../../data'
import Slideshow from './component/slideshow'
import Statistics from './component/statistics'
import ChangeLog from './component/changelog'
import History from './component/history'


class TextColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {item} = this.props
        return(
            <View style={styles.TextColumnContainar}>
                <Text style={styles.TextColumnTitle}>{item.title}</Text>
                <Image style={styles.TextColumnImg} source={require('../../images/items_更多icon.png')}/>
            </View>
        )
    }
}

class OverviewRoot extends Component{
    render(){
        const {navigation} = this.props
        return(
            <View>
                <ImageBackground source={require('../../images/items_bg.png')} style={styles.BgStyle}>
                    <View style={styles.firstColumn}>
                        <View style={{width:toDeviceSize(30),height:toDeviceSize(43)}}></View>
                        <Text style={styles.title}>Overview</Text>
                        <Image source={require('../../images/nav_搜索icon.png')} style={styles.searchImg}/>
                    </View>
                    <View style={styles.secondColumn}>
                        <Text style={[styles.secondText,{textAlign:'left'}]}>Group</Text>
                        <Text style={[styles.secondText,{textAlign:'right'}]}>Amount</Text>
                    </View>
                    <View style={styles.thirdColumn}>
                        <Text style={styles.groupInfo}>Sample Group</Text>
                        <Image style={styles.groupMore} source={require('../../images/items_下拉分组icon.png')}/>
                        <Text style={styles.groupNums}>3</Text>
                    </View>
                </ImageBackground>
                <View>
                    {
                        overviewData.map( (item,index) => <ItemColumn item={item} key={item.id} navigation ={navigation}/> )
                    }
                </View>
                <View style={styles.segmention}>
                    {
                        overViewBottomList.map( (item,index) => <TextColumn item={item}/>)
                    }
                </View>
            </View>
        )
    }
}

const OverviewStack = createStackNavigator(
    {
        OverviewRoot,
        Slideshow,
        Statistics,
        ChangeLog,
        History
    },
    {
        navigationOptions:{
            header:null
        }
    }
) 

export default OverviewStack

const styles = StyleSheet.create({
    BgStyle:{
        width:toDeviceSize(750),
        height:toDeviceSize(278),
    },
    firstColumn:{
        width:toDeviceSize(750),
        height:toDeviceSize(43),
        paddingHorizontal:toDeviceSize(30),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:toDeviceSize(63)
    },
    title:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
        letterSpacing : 0,
    },
    searchImg:{
        width:toDeviceSize(30),
        height:toDeviceSize(43),
    },
    secondColumn:{
        marginTop:toDeviceSize(58),
        width:toDeviceSize(750),
        height:toDeviceSize(31),
        paddingLeft:toDeviceSize(80),
        paddingRight:toDeviceSize(124),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    secondText:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(26),
        color : '#D4F2Fe',
        letterSpacing : 0,
    },
    thirdColumn:{
        marginTop:toDeviceSize(14),
        width:toDeviceSize(750),
        height:toDeviceSize(38),
        paddingLeft:toDeviceSize(80),
        paddingRight:toDeviceSize(124),
        flexDirection:'row',
        alignItems:'center',
    },
    groupInfo:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(32),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign:'left',
        lineHeight:toDeviceSize(32)
    },
    groupMore:{
        // width:toDeviceSize(20),
        // height:toDeviceSize(20),
        marginLeft:toDeviceSize(18)
    },
    groupNums:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(32),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign:'left',
        marginLeft:toDeviceSize(207),
        lineHeight:toDeviceSize(32)
    },
    TextColumnContainar:{
        width:toDeviceSize(750),
        height:toDeviceSize(101),
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(33),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomColor:'#E6E6E6',
        borderStyle:'solid',
        borderBottomWidth:toDeviceSize(1),
    },
    TextColumnTitle:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        letterSpacing : 0,
        textAlign:'left',
        lineHeight:toDeviceSize(28),
    },
    TextColumnImg:{
        width:toDeviceSize(24),
        height:toDeviceSize(24)
    },
    segmention:{
        marginTop:toDeviceSize(20)
    }
})