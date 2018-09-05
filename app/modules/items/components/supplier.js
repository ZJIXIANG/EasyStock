import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal, Dimensions, FlatList} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {HeaderColumn} from '../../../CommonComponents/listEditing'
import {supplierData} from '../../../data.json'
import {toDeviceSize} from '../../../utils/sizeTransform'
import NoResult from '../../../CommonComponents/noResult'

const titleheight = toDeviceSize(128)
const noSearchHeight = Dimensions.get("window").height - titleheight

class SelectGroup extends Component{

    _onRequestClose(){
        console.log('关闭')
    }

    _renderItem(item,index){
        console.log(item)
        return(
        <View style={styles.modalList} key={index}>
            <Text style={styles.modalText}>{item.group}</Text>
        </View>
        )
    }

    render(){
        return(
            <Modal
                visible = {true}
                animationType = {'slide'}
                transparent = {false}
                onRequestClose = { () => {this._onRequestClose()}}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeadText}>Group</Text>
                    </View>
                    {
                        supplierData.map((item,index) => this._renderItem(item,index))
                    }
                </View>

            </Modal>
        )
    }
}


class SupplierInfoHeader extends Component{
    render(){
        return(
            <View style={styles.HeaderContainer}>
                <TouchableOpacity  activeOpacity={1} style={styles.headerBack}>
                    <Image source={require('../../../images/nav_返回icon.png')} style={{width:7.5,height:16}}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Supplier</Text>
            </View>
        )
    }
}



export class SupplierInfo extends Component{
    static navigationOptions ={
        header:null
    }
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <SelectGroup/>
                <SupplierInfoHeader/>
                <View style={styles.choseSupplier}>
                    <Text style={styles.groups}>Supplier</Text>
                    <Image source={require('../../../images/items_更多icon.png')}></Image>
                </View>
                <View style={styles.choseSupplier}>
                    <Text style={styles.groups}>Cost</Text>
                    <Text style={styles.choseDoller}>$</Text>
                </View>
            </View>
        )
    }
}



class SupplierList extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
    }

    _renderItem(item){
        return(
            <View>
                <View style={styles.container}>
                    <Text style={styles.groups}>{item.item.group}</Text>
                    <Text style={styles.prince}>{item.item.prince}</Text>
                    <Text style={styles.doller}>$</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SupplierInfo')}>
                        <Image source={require('../../../images/items_更多icon.png')} style={styles.img}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render(){
        return(
            <FlatList
                data = {supplierData}
                renderItem ={(item) => this._renderItem(item)}
                keyExtractor ={(item,index) => item.id}
            >

            </FlatList>
        )
    }
}



export default class Supplier extends Component{
    static navigationOptions = {
        header:null,
        title:'232323'
    }
    render(){
        const {navigation} = this.props
        const supplierList = supplierData.length == 0 ? <NoResult text={navigation.getParam('title')}/> : <SupplierList navigation={navigation}/>
        return(
            <View style={{width:toDeviceSize(750),height:noSearchHeight,backgroundColor:'white'}}>
                <HeaderColumn navigation={navigation}></HeaderColumn>
                {supplierList}
            </View>
        )
    }
}





const styles = StyleSheet.create({
    container:{
        width:toDeviceSize(750),
        height:toDeviceSize(100),
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(33),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:toDeviceSize(1),
        borderColor:'#E6E6E6',
        borderStyle:'solid'
    },
    groups:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        lineHeight: toDeviceSize(34),
    },
    prince:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'right',
        lineHeight: toDeviceSize(34),
        position:'relative',
        left:toDeviceSize(30)
    },
    doller:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'right',
        lineHeight: toDeviceSize(34),
    },
    img:{
        width:toDeviceSize(24),
        height:toDeviceSize(24),
    },
    choseSupplier:{
        width:toDeviceSize(750),
        height:toDeviceSize(100),
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(33),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:toDeviceSize(1),
        borderColor:'#E6E6E6',
        borderStyle:'solid',
        backgroundColor:'white'
    },
    choseDoller:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(32),
        color : '#969CA1',
        textAlign :'right',
    },
    HeaderContainer:{
        width : toDeviceSize(750),
        height : toDeviceSize(128),
        paddingTop : toDeviceSize(63),
        paddingLeft : toDeviceSize(30),
        paddingRight : toDeviceSize(30),
        paddingBottom : toDeviceSize(22),
        flexDirection : 'row',
        backgroundColor : '#00ADED',
        alignItems:'center', 
    },
    headerText:{
        width:toDeviceSize(148),
        height:toDeviceSize(43),
        // fontFamily: 'SFProText-Semlbold'
        fontSize : toDeviceSize(36),
        color : '#FFFFFF',
        textAlign :'center',
        lineHeight:toDeviceSize(43),
        marginLeft:toDeviceSize(254)
    },
    modalContainer:{
        backgroundColor:'white',
        width:toDeviceSize(750),
        position:'absolute',
        bottom:0
    },
    modalHeader:{
        width:toDeviceSize(750),
        height:toDeviceSize(100),
        justifyContent:'center',
        alignItems:'center'
    },
    modalHeadText:{
        // fontFamily: 'SFProText-Medium'
        fontSize : toDeviceSize(32),
        color : '#464646',
        textAlign :'center',
        lineHeight:toDeviceSize(38),
        letterSpacing:0
    },
    modalList:{
        width:toDeviceSize(750),
        height:toDeviceSize(88),
        borderColor:'#E6E6E6',
        borderStyle:'solid',
        borderBottomWidth:toDeviceSize(1),
        justifyContent:"center",
        alignItems:"center"
    },
    modalText:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'center',
        lineHeight:toDeviceSize(38),
        letterSpacing:0
    }
})
