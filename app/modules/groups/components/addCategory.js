import React,{Component} from 'react'
import {View, Text, StyleSheet, SectionList, Image, Modal, TouchableOpacity} from 'react-native'
import {storagesList} from '../../../data.json'
import {HeaderColumn} from '../../../CommonComponents/textEditing'
import {createStackNavigator} from 'react-navigation'
import {toDeviceSize} from '../../../utils/sizeTransform'
import TextEditing from '../../../CommonComponents/textEditing'
import ParentStorage from './parentStorage'



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
        const b = ['Parent storage'];
        // const c = ['Weight unit','Size unit'];
        // const d = ['Photo'];
        // const e = ['Group propertites']
        for(let i=0; i<a.length ; i++){
            if (a[i] === title) {
                this.props.navigate('TextEditing',{title,})
            } else if(b[i] === title){
                this.props.navigate('ParentStorage',{title,})
            } 
            // else if(c[i] === title){
            //     this.props.navigate('WeightUnit',{title,})
            // } else if(d[i] === title){
            //     this.props.navigate('ImgEditing',{title,})
            // } 
            // else{
            //     this.props.navigate(title,{title,})
            // }
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

class AddCategory extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigation} = this.props
        const {navigate} = navigation
        return(
            <View>
                <HeaderColumn navigation={navigation}/>
                <EditList editList={storagesList} navigate={navigate}/>
            </View>
        )
    }
}

const AddCategoryStack = createStackNavigator(
    {
        AddCategory, 
        TextEditing,
        ParentStorage
    },
    {
        navigationOptions:{
            header:null
        }
    }

)

export default AddCategoryStack


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
})