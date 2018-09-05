import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {HeaderColumn} from '../../../CommonComponents/listEditing'
import {groups} from '../../../data.json'
import BigText from '../../../CommonComponents/bigtextEditing'
import ItemsGroup from './itemsGroup'

class GroupInfo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {item} = this.props
        const borderColor =['red','blue','yellow','green']
        const id = item.id
        const itemColor = borderColor[id]
        const {navigation} = this.props
        return(
            <View style={[styles.GroupInfoContainer,{borderLeftColor:itemColor}]}>
                <View style={styles.titleColumn}>
                    <Text style={[styles.titleColumnText,{color:itemColor}]}>{Object.keys(item)[0]}</Text>
                    <TouchableOpacity onPress={ () => navigation.navigate('BigText',{title:'Group propertites'})}>
                        <Image source={require('../../../images/items_更多icon.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.nums}>
                    <Text style={[styles.numsStyle,{width:toDeviceSize(98)}]}>9</Text>
                    <Text style={[styles.numsStyle,{width:toDeviceSize(140)}]}>19</Text>
                    <Text style={[styles.numsStyle,{width:toDeviceSize(98)}]}>9</Text>
                    <Text style={[styles.numsStyle,{width:toDeviceSize(140)}]}>9</Text>
                </View>
                <View style={styles.classify}>
                    <Text style={[styles.classifyStyle,{width:toDeviceSize(98)}]}>items</Text>
                    <Text style={[styles.classifyStyle,{width:toDeviceSize(140)}]}>categories</Text>
                    <Text style={[styles.classifyStyle,{width:toDeviceSize(98)}]}>storage</Text>
                    <Text style={[styles.classifyStyle,{width:toDeviceSize(140)}]}>supplier</Text>
                </View>
            </View>
        )
    }
}

class GroupsListRoot extends Component{
    static navigationOptions = {
        header:null
    }

    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        return(
            <View>
                <HeaderColumn navigation={navigation} direction='ItemsGroup'/>
                {
                    groups.map( (item,index) => <GroupInfo key={index} item={item} navigation={navigation}/> )
                }
            </View>
        )
    }
}

const GroupsList = createStackNavigator(
    {
        GroupsListRoot,
        BigText,
        ItemsGroup
    },
    {   
        initialRouteName:'ItemsGroup',
        navigationOptions:{
            header:null
        }
    }
)

export default GroupsList

const styles = StyleSheet.create({
    GroupInfoContainer:{
        width:toDeviceSize(710),
        height:toDeviceSize(227),
        marginLeft:toDeviceSize(20),
        marginTop:toDeviceSize(20),
        borderLeftWidth:toDeviceSize(8),
        borderStyle:'solid',
        borderRadius:toDeviceSize(5),
        paddingVertical:toDeviceSize(30),
        backgroundColor:'white',
        alignItems:'center',
    },
    titleColumn:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#E6E6E6',
        borderStyle:'solid',
        borderBottomWidth:toDeviceSize(1),
        height:toDeviceSize(54),
        width:toDeviceSize(640)
    },
    nums:{
        width:toDeviceSize(640),
        height:toDeviceSize(40),
        marginTop:toDeviceSize(24),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    numsStyle:{
         // fontFamily: 'SFProText-Regular'
         fontSize : toDeviceSize(34),
         color : '#464646',
         textAlign :'left',
         letterSpacing:0,
         textAlign:'center'
    },
    classify:{
        marginTop:toDeviceSize(14),
        width:toDeviceSize(640),
        height:toDeviceSize(34),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-around",
    },
    classifyStyle:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#969CA1',
        textAlign :'left',
        letterSpacing:0,
        lineHeight:toDeviceSize(34),
        textAlign:'center'
    }


})