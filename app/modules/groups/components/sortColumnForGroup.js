import React,{Component} from 'react'
import {View, Text, StyleSheet, SectionList, Image, Modal, TouchableOpacity} from 'react-native'
import {toDeviceSize} from '../../../utils/sizeTransform.js'


class FirstSort extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title} = this.props
        return(
            <View>
                <View style={styles.inner}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.nums}>2 items</Text>
                    <Image source={require('../../../images/items_更多icon.png')}/>
                </View>
            </View>
        )
    }
}

class SecondSort extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title} = this.props
        return(
            <View>
                <View style={styles.inner}>
                    <View style={styles.secondHorizontalLine}></View>
                    <Text style={styles.secondtitle}>{title}</Text>
                    <Text style={styles.nums}>2 items</Text>
                    <Image source={require('../../../images/items_更多icon.png')}/>
                </View>
            </View>
        )
    }
}

class ThirdSort extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title} = this.props
        return(
            <View>
                <View style={styles.inner}>
                    <View style={styles.thirdHorizontalLine}></View>
                    <Text style={styles.thirdtitle}>{title}</Text>
                    <Text style={styles.nums}>2 items</Text>
                    <Image source={require('../../../images/items_更多icon.png')}/>
                </View>
            </View>
        )
    }
}

class FourthSort extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title} = this.props
        return(
            <View style={styles.segmentation}>
                <View style={styles.inner}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.nums}>2 items</Text>
                    <Image source={require('../../../images/items_更多icon.png')}/>
                </View>
                {/* <View style={styles.segmentation}></View> */}
            </View>
        )
    }
}


export default class SortColumnItem extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {sort, title} = this.props.data
        if( sort === 1 ){

            return (
                <View style={styles.container}>
                    <FirstSort title={title}/>
                </View>
            )

        }else if( sort === 2 ){

            return (
                <View style={styles.container}>
                    <SecondSort title={title}/>
                </View>
            )
            
        }else if( sort === 3 ){

            return (
                <View style={styles.container}>
                    <ThirdSort title={title}/>
                </View>
            )

        }else if( sort === 4 ){

            return (
                <View style={styles.container}>
                    <FourthSort title={title}/>
                </View>
            )
        }
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
        borderBottomColor:'#E6E6E6',
        borderStyle:'solid',
    },
    title:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        lineHeight: toDeviceSize(34),
    },
    inner:{
        width:toDeviceSize(690),
        height:toDeviceSize(34),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative',
    },
    secondHorizontalLine:{
        width:toDeviceSize(44),
        height:toDeviceSize(3),
        backgroundColor:'#D7DADB',
        borderRadius:toDeviceSize(2),
    },
    secondtitle:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        lineHeight: toDeviceSize(34),
        position:'absolute',
        left:toDeviceSize(64)
    },
    thirdHorizontalLine:{
        width:toDeviceSize(44),
        height:toDeviceSize(3),
        backgroundColor:'#D7DADB',
        borderRadius:toDeviceSize(2),
        position:'relative',
        left:toDeviceSize(40)
    },
    thirdtitle:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'left',
        lineHeight: toDeviceSize(34),
        position:'absolute',
        left:toDeviceSize(104)
    },
    nums:{
        // fontFamily: 'SFProText-Regular'
        fontSize : toDeviceSize(28),
        color : '#464646',
        textAlign :'right',
        lineHeight: toDeviceSize(34),
        position:'absolute',
        right:toDeviceSize(69)
    },
}) 