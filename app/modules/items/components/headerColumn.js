import React,{Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {toDeviceSize, width} from '../../../utils/sizeTransform'


export class HeaderTopColumn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigate('ScanCode')} activeOpacity={1} style={styles.scanCode}>
                    <Image source={require('../../../images/nav_icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>Items</Text>
                <TouchableOpacity onPress={() => navigate('SearchItem')} activeOpacity={1} style={styles.search}>
                    <Image source={require('../../../images/nav_搜索icon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('AddItem')} activeOpacity={1} style={styles.addItem}>
                    <Image source={require('../../../images/nav_添加icon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}


export class ItemCount extends Component{

    render(){
        return(
                <View style={styles.itemCount}>
                    <Text style={styles.itemCountTextLeft}>Groups</Text>
                    <Text style={styles.itemCountTextRight}>Amount</Text>
                </View>
        )
    }
}

export class ItemInfo extends Component{
    render(){
        return(
            <View style={styles.itemInfo}>
                <Text style={styles.itemInfoLeft}>Sample Group</Text>
                <Image style={styles.itemInfoImg} source={require('../../../images/items_下拉分组icon.png')}></Image>
                <Text style={styles.itemInfoRight}>3</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    headerContent:{
        width:toDeviceSize(750),
        height:toDeviceSize(43),
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        top:toDeviceSize(63),
        paddingRight:toDeviceSize(30),
        paddingLeft:toDeviceSize(30),
        justifyContent:"space-between"
    },
    // scanCode:{
    //     marginLeft:toDeviceSize(30),
    //     position:'absolute',
    //     left:toDeviceSize(30),
    //     height:toDeviceSize(65),
    //     width:toDeviceSize(65)
    // },
    title:{
        width:toDeviceSize(99),
        height:toDeviceSize(43),
        // fontFamily:'SFProText-Semibold',
        fontSize:toDeviceSize(36),
        color:'#FFFFFF',
        textAlign:'center',
    },
    search:{
        position:'absolute',
        left:toDeviceSize(552),

    },
    // addItem:{
    //     position:'absolute',
    //     // left:toDeviceSize(687-33),
    //     right:toDeviceSize(30)
    // },
    itemCount:{
        width:toDeviceSize(750),
        height:toDeviceSize(31),
        flexDirection:'row', 
        alignItems:'center',
        position:'absolute',
        top:toDeviceSize(161),
    },
    itemCountTextLeft:{
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(26),
        color: '#D4F2FE',
        letterSpacing: 0,
        marginLeft:toDeviceSize(80),
    },
    itemCountTextRight:{
        height:toDeviceSize(31),
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(26),
        color: '#D4F2FE',
        letterSpacing: 0,
        position:'absolute',
        left:toDeviceSize(539)
        
    },
    itemInfo:{
        height:toDeviceSize(38),
        width,
        position:'absolute',
        top:toDeviceSize(206),
        flexDirection:'row',
        alignItems:'center',
    },
    itemInfoLeft:{
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(32),
        color: '#FFFFFF',
        letterSpacing: 0,
        marginLeft:toDeviceSize(80)
    },
    itemInfoImg:{
        marginLeft:toDeviceSize(18),
    },
    itemInfoRight:{
        position:'absolute',
        left:toDeviceSize(539),
        // fontFamily: 'SFProDisplay-Regular',
        fontSize: toDeviceSize(32),
        color: '#FFFFFF',
        letterSpacing: 0,

    }
})



// import React,{Component} from 'react'
// import {View, Text, StyleSheet} from 'react-native'
// import Barcode from 'react-native-vector-icons/MaterialCommunityIcons'
// import Search from 'react-native-vector-icons/Feather'

// import {createStore} from 'redux'
// import reducer from '../../../stateManager/reducers/grouping.js'
// import {change} from '../../../stateManager/actions/index.js'
// import {Provider} from 'react-redux'

// const store = createStore(reducer)
// store.subscribe(() => console.log('State updated!', store.getState()) )


//在子组件里面
// const mapStateToProps = (state) => {
//     return{
//         needProp = state
//     }
// }

// export default connect(mapStateToProps)(FatherComponent) 
//这样就能将父组件的state传递给子组件

// export class HeaderTopColumn extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         const {navigate} = this.props.navigation
//         return(
//             <View style={styles.headerContent}>
//                 <Barcode name='barcode-scan' size={25} color='white' onPress={() => navigate('ScanCode')}/>
//                 <Text style={{fontSize:25,color:'white'}}>Items</Text>
//                 <Search name='plus' size={25} color='white' onPress={() => navigate('AddItem')}/>
//                 <Search name='search' size={25} color='white' onPress={() => navigate('SearchItem')}/>
//             </View>
//         )
//     }
// }


// export class HeaderBottomColumn extends Component{

//     render(){
//         return(
//             <View style={{position:"absolute",width:375,height:30,top:50}}>
//                 <View style={{flexDirection:'row',justifyContent:"space-between"}}>
//                     <Text>Groups</Text>
//                     <Text>Amount</Text>
//                 </View>
//                 <View style={{flexDirection:'row',justifyContent:"space-between"}}>
//                     <Text onPress={() => store.dispatch(change())}>Samples</Text>
//                     <Text>3</Text>
//                 </View>
                
//             </View>
//         )
//     }
// }


// const styles = StyleSheet.create({
//     headerContent:{
//         width:375,
//         height:40,
//         flexDirection:'row',
//         justifyContent:"space-between", 
//         alignItems:'center',
//         borderStyle:'solid',
//         borderColor:'red',
//         borderWidth:1,
//         backgroundColor:'blue',
//         position:'absolute',
//     }
// })