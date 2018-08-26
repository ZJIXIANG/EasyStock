import React, {Component} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {createStackNavigator, } from 'react-navigation';
import Barcode from 'react-native-vector-icons/MaterialCommunityIcons'
import Search from 'react-native-vector-icons/Feather'
import ItemStyles from './ItemStyles.js'
import needData from '../../data.json'
//头部

class HeaderTopContent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={ItemStyles.headerContent}>
                <Barcode name='barcode-scan' size={25} color='white'/>
                <Text style={{fontSize:25,color:'white'}}>Items</Text>
                <Search name='plus' size={25} color='white' onPress={() => navigate('AddItem')}/>
                <Search name='search' size={25} color='white' onPress={() => navigate('SearchItem')}/>
            </View>
        )
    }
}

// FatherRoot.root = Children.root
class HeaderBottomContent extends Component{

    render(){
        return(
            <View style={{position:"absolute",width:375,height:30,top:50}}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Text>Groups</Text>
                    <Text>Amount</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                    <Text>Samples</Text>
                    <Text>3</Text>
                </View>
                
            </View>
        )
    }
}

//item展示区域


class ShowItems extends Component{
    constructor(props){
        super(props)
    }

    _renderItem = ({item}) => {
        return(
            <View>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
            </View>
        )
    }

    render(){
        const items = this.props.data.items
        console.log(items)
        return(
            <FlatList
                data={items}
                keyExtractor={(item,index) => index}
                renderItem={this._renderItem}
            >
                {items.map((item,index) => {
                            <View key={index}>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                            </View>
                        }
                    )
                }
            </FlatList>
        )
    }
}

class ShowGroups extends Component{
    render(){
        const groups = needData.groups
        return(
            <ScrollView
            horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true} ref='ScrollView'
            >
                {groups.map((group,index) => {
                            return (
                                <View
                                style={{flexDirection:'row', justifyContent:"space-between",alignItems:"center", width:375, height:300,backgroundColor:'red'}}
                                key={index}
                                >
                                <ShowItems data={group}></ShowItems>
                                </View>
                            )
                        }
                    )
                }
            </ScrollView>    
        )
    }
}

//创建导航路由
class SearchItem extends Component{
    static navigationOptions = {
        title:'搜索'
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text>搜索</Text>
            </View>
        )
    }
}

class AddItem extends Component{
    static navigationOptions = {
        title:'添加'
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text>添加items</Text>
            </View>
        )
    }
}

class ItemRoot extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return (
            <View style={{flex:1,width:375,marginTop:20}}>
                <Image style={{width:375, height:100, backgroundColor:'black'}} source={require('../../images/choicecoupon.png')}/>
                <HeaderTopContent navigation={this.props.navigation}></HeaderTopContent>
                <HeaderBottomContent></HeaderBottomContent>
                <ShowGroups></ShowGroups>
            </View>
        )   
    }
} 

const ItemStack = createStackNavigator(
    {
        ItemRoot,
        SearchItem,
        AddItem,
    },
    {
        initialRouteKey:'ItemRoot',
    }
)

export default class Items extends Component{
    render(){
        return <ItemStack/>
    }
}