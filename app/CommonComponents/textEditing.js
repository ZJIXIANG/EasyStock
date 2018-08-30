import React,{Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'



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

export default class TextEditing extends Component{
    static navigationOptions = {
        header:null
    }
    constructor(props){
        super(props)
        this.state={
            editing:false,
        }
    }

    isEditing(){
        this.setState({
            editing:true,
        })
    }

    deleteEdite(){
        this.refs.editInput.clear()
    }

    changeText(text){
        this.setState({
            editText:text
        })
    }
    render(){
        const deleteImg = this.state.editing ? (
                <TouchableOpacity onPress={() => this.deleteEdite()}>  
                    <Image style={styles.inputImg} source={require('../images/search_搜索框内删除icon.png')}></Image>
                </TouchableOpacity>
            ) : null ;
        return(
            <View>
                <HeaderColumn></HeaderColumn>
                <View style={styles.inputContainer}>
                    <TextInput 
                        ref = 'editInput'
                        style={styles.textInput} 
                        underlineColorAndroid="transparent"
                        onFocus={() => this.isEditing()}
                        onChangeText={(text) => this.changeText(text)}
                        value = {this.state.editText}
                    >
                    </TextInput>
                    {deleteImg}
                </View>
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
    HeaderTextLeft:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(34),
        color : '#FFFFFF',
        letterSpacing : 0,
        textAlign :'left',
    },
    HeaderTextMidd:{
        // fontFamily: 'SFProText-Semibold'
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
    inputContainer:{
        width:toDeviceSize(750),
        height:toDeviceSize(102),
        backgroundColor:'#FFFFFF',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:toDeviceSize(1),
        paddingHorizontal:toDeviceSize(30),
        paddingVertical:toDeviceSize(34),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    textInput:{
        padding:0,
        width:toDeviceSize(650),
        height:toDeviceSize(34),
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
    },
    inputImg:{
        // width:toDeviceSize(32),
        // height:toDeviceSize(32),
        // backgroundColor: '#D7DADB',
        borderRadius: toDeviceSize(2),
    }
    
})