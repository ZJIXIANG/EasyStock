import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../utils/sizeTransform'

export default class NoImgColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {data} = this.props
        const showImg = data.item.show ? <Image style={styles.img} source={require('../images/Category_选择icon.png')}></Image> : null;
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>{data.item.title}</Text>
                    {showImg}
                </View>
                <View style={styles.bottomLine}></View>
            </TouchableOpacity>
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
        alignItems:'center'
    },
    text:{
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(28),
        color: '#464646',
        letterSpacing: 0,
        lineHeight:toDeviceSize(34),
        textAlign:'right'
    },
    bottomLine:{
        width:toDeviceSize(750),
        height:toDeviceSize(1),
        backgroundColor:'#E6E6E6',
    }
})