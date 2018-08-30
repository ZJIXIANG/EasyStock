import React,{Component} from 'react'
import {View, Text, StyleSheet, SectionList, Image, Modal, TouchableOpacity} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform'
import needData from '../../../data.json'
import TextEditing from '../../../CommonComponents/textEditing'
import ListEditing from '../../../CommonComponents/listEditing'


class DeleteModal extends Component{
    _onRequestClose(){
        console.log('关闭')
    }
    render(){
        return(
            <Modal 
                visible = {true}
                animationType = {'slide'}
                transparent = {true}
                onRequestClose = { () => {this._onRequestClose()}}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.topModal}>
                        <Text style={styles.topModalTopText}>Delete this item?</Text>
                        <View style={styles.topModalView}></View>
                        <Text style={styles.topModalBottomText}>OK</Text>
                    </View>   
                    <View style={styles.bottomModal}>
                        <Text style={styles.bottomModalText}>Cancel</Text>
                    </View>
                </View>
            </Modal>
        )
    }
}

class EditList extends Component{
    constructor(props){
        super(props)
        const {navigate} = this.props
        this.state={
            navigate,
        }
    }
    _renderSection(info){
        return(
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>{info.section.key}</Text>
            </View>
        )
    }
    _choicePageType(title){
        const a = ['Name','Group'];
        for(let i=0; i<2 ; i++){
            if (a[i] == title) {
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


    render(){
        console.log(this.state.navigate)
        return(
            <SectionList 
                sections = {needData.editLidt}
                renderItem = {(info) => this._renderItem(info)}
                renderSectionHeader = {(info) => this._renderSection(info)}
                ListFooterComponent = {() => this._footComponent()}
                ItemSeparatorComponent = {() => <View><Text style={styles.itemSepara}></Text></View>}
                keyExtractor = {(item,index) => item.title}
            >

            </SectionList>
        )
    }
}

class HeaderColumn extends Component{
    render(){
        return(
            <View style={styles.HeaderColumnContainer}>
                <Text style={styles.HeaderTextLeft}>Cancel</Text>
                <Text style={styles.HeaderTextMidd}>New Item</Text>
                <Text style={styles.HeaderTextRight}>Done</Text>
            </View>
        )
    }
}

class AddItemRoot extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <View>
                {/* <DeleteModal></DeleteModal> */}
                <HeaderColumn></HeaderColumn>
                <EditList navigate={navigate}></EditList>
            </View>
        )
    }
}

const AddItemStack = createStackNavigator(
    {
        AddItemRoot,
        TextEditing,
        ListEditing,
    },
    {
        initialRouteName:'AddItemRoot',
    }
) 

export default AddItemStack


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
    modalContainer:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.4)',
        alignItems:'center',
    },
    bottomModal:{
        width:toDeviceSize(710),
        height:toDeviceSize(114),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:toDeviceSize(10),
        position:'absolute',
        bottom:toDeviceSize(20),
        opacity:1,
    },
    bottomModalText:{
        // fontFamily: '.SFNSDisplay'
        fontSize : toDeviceSize(40),
        color : '#007AFF',
        textAlign :'center',
        letterSpacing : toDeviceSize(0.76),
        lineHeight:toDeviceSize(47)
    },
    topModal:{
        width:toDeviceSize(710),
        height:toDeviceSize(203),
        paddingTop:toDeviceSize(26),
        paddingBottom:toDeviceSize(33),
        alignItems:'center',
        backgroundColor:'#fff',
        opacity:1,
        justifyContent:'space-between',
        position:'absolute',
        bottom:toDeviceSize(150),
        borderRadius:toDeviceSize(10),
    },
    topModalTopText:{
        // fontFamily: 'SFProDisplay-Regular'
        fontSize : toDeviceSize(26),
        color : '#969CA1',
        textAlign :'center',
        letterSpacing : 0,
        lineHeight:toDeviceSize(36)
    },
    topModalView:{
        width:toDeviceSize(710),
        height:toDeviceSize(1),
        backgroundColor:'#969CA1',
        position:'absolute',
        bottom:toDeviceSize(114)
    },
    topModalBottomText:{
        // fontFamily: 'SFProDisplay-Regular'
        fontSize : toDeviceSize(40),
        color : '#007AFF',
        textAlign :'center',
        letterSpacing : toDeviceSize(1),
    }
})