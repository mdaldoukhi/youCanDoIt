import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
<View style={styles.closeIcone}>
    <MaterialCommunityIcons name="close" color="white" size={30} />
</View>
<View style={styles.deleteIcone}>
<MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />

</View>

        <Image  resizeMode="contain" style={styles.img} source={require("../assets/chair.jpg")}/>

    </View>
    
  )
}

const styles = StyleSheet.create({
    closeIcone : {
       
        position : "absolute",
        top : 40,
        left :30,
    },
    deleteIcone : {
        
        position : "absolute",
        top : 40,
        right :30,
    },
    container : {
        backgroundColor : colors.black,
    
    },
    
    img : {
        width : "100%",
        height : "100%"
    },
    
})