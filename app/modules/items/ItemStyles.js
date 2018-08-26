import {StyleSheet} from 'react-native'

const ItemStyles = StyleSheet.create({
    headerContent:{
        width:375,
        height:40,
        flexDirection:'row',
        justifyContent:"space-between", 
        alignItems:'center',
        borderStyle:'solid',
        borderColor:'red',
        borderWidth:1,
        backgroundColor:'blue',
        position:'absolute',
    }
})

export default ItemStyles