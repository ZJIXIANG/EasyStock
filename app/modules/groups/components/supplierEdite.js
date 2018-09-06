import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, SectionList, Dimensions, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform'
import {editGroupList,currencyList} from '../../../data.json'
import {createStackNavigator} from 'react-navigation'
import { SearchGroup, } from './categories'
import {groupSupplierData} from '../../../data.json'
import TextEditing from '../../../CommonComponents/textEditing'
import Contact from './contact'
import Address from './address'



class HeaderColumn extends Component{
    render(){
        return(
            <View style={styles.HeaderColumnContainer}>
                <Text style={styles.HeaderTextLeft}>Cancel</Text>
                <Text style={styles.HeaderTextMidd}>supplier</Text>
                <Text style={styles.HeaderTextRight}>Done</Text>
            </View>
        )
    }
}


export class EditList extends Component{

    constructor(props){
        super(props)
    }

    _renderSection(info){
        return(
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>{info.section.key}</Text>
            </View>
        )
    }
    _choicePageType(title){
        const a = ['Name',];
        const b = ['Telephone', 'Email'];
        const c = ['Address 1',];
        for(let i=0; i<a.length ; i++){
            if (a[i] === title) {
                this.props.navigate('TextEditing',{title,})
            } else if(b[i] === title){
                this.props.navigate('Contact',{title,})
            } else if(c[i] === title){
                this.props.navigate('Address',{title,})
            } 
        }
        
      
    }
    _renderItem(info){
        const title = info.item.title
        const value = info.item.value
        return(
            <View style={styles.itemContainer}>
                <Text style={styles.itemLeftText}>{ title}</Text>
                <Text style={styles.itemRightText}>{ value}</Text>
                <TouchableOpacity onPress={() => this._choicePageType(title)}>
                    <Image source={require('../../../images/items_更多icon.png')} style={styles.itemImg}/>
                </TouchableOpacity>
            </View>
        )
    }
    _footComponent(){
        return(
            <View style={styles.footContainer}>
                <View style={styles.footDelete}>
                    <Text style={styles.footText}>Delete item</Text>
                </View>
            </View>
        )
    }

    _extraUniqueKey(item, index){
       console.log(tem.key)
    }

    render(){
        const {editList} = this.props
        return(
            <SectionList 
                sections = {editList}
                renderItem = {(info) => this._renderItem(info)}
                renderSectionHeader = {(info) => this._renderSection(info)}
                ListFooterComponent = {() => this._footComponent()}
                ItemSeparatorComponent = {() => <View><Text style={styles.itemSepara}></Text></View>}
                keyExtractor = {(item, index) => index}
            >

            </SectionList>
        )
    }
}

class Supplier extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        return(
            <View>
                <HeaderColumn/>
                <EditList editList={groupSupplierData} navigate={navigation.navigate}/>
            </View>
        )
    }
}


const SupplierStack = createStackNavigator(
    {
        Supplier,
        TextEditing,
        Contact,
        Address,
    },
    {
        navigationOptions:{
            header:null
        }
    }
)

export default SupplierStack

const styles = StyleSheet.create({
    itemContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(102),
        paddingTop:toDeviceSize(34),
        paddingBottom:toDeviceSize(34),
        paddingRight:toDeviceSize(30),
        paddingLeft:toDeviceSize(30),
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative'
    },
    itemLeftText:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#969ca1',
        textAlign :'left',
    },
    itemRightText:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'right',
        position:'absolute',
        right:toDeviceSize(69),
    },
    itemImg:{
        width:toDeviceSize(24),
        height:toDeviceSize(24)
    },
    sectionContainer:{
        width : toDeviceSize(750),
        height : toDeviceSize(89),
        backgroundColor: '#F5F7F7',
        paddingTop : toDeviceSize(30),
        paddingBottom : toDeviceSize(20),
        paddingLeft : toDeviceSize(30)
    },
    sectionText:{
        // fontFamily: 'SFProText-Medium'
        fontSize : toDeviceSize(32),
        color : '#969CA1',
        textAlign :'left',
        letterSpacing : 0,
    },
    itemSepara:{
        backgroundColor:"#E6E6E6",
        flex:1,
        height:toDeviceSize(1)
    },
    footContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(220),
        backgroundColor:'#F5F7F7',
        paddingTop:toDeviceSize(110),
        paddingBottom:toDeviceSize(30),
        paddingLeft:toDeviceSize(30),
        paddingRight:toDeviceSize(30),
    },
    footDelete:{
        width:toDeviceSize(690),
        height:toDeviceSize(80),
        backgroundColor:'#00ADED',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: toDeviceSize(7)
    },
    footText:{
        // fontFamily: 'SFProText-Medium'
        fontSize : toDeviceSize(34),
        color : '#FFFFFF',
        textAlign :'center',
        letterSpacing : 0,
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
    HeaderTextLeft:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(34),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'left',
    },
    HeaderTextMidd:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
    },
    HeaderTextRight:{
        // fontFamily: 'SFProText-Semibold'
        fontSize : toDeviceSize(34),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'right',
        opacity : 0.6,
    },
})