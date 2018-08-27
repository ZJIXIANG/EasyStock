import React,{Component} from 'react'
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import needData from '../../../data.json'

export class ShowItems extends Component{
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

export class ShowGroups extends Component{
    render(){
        const groups = needData.groups
        return(
            <ScrollView
            horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true} ref='ScrollView'
            >
                {groups.map((group,index) => {
                            return (
                                <View
                                style={styles.showGroups}
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

const styles = StyleSheet.create({
    showGroups:{
        flexDirection:'row', 
        justifyContent:"space-between",
        alignItems:"center", 
        width:375, 
        height:300,
        backgroundColor:'red'
    }
})