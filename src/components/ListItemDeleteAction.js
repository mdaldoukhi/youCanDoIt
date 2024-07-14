import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppText from './AppText';

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback style={styles.bigwrap} onPress={onPress}>

    <View style={styles.Container}>
        <MaterialCommunityIcons name='trash-can' size={35} color={colors.white}/>
    </View>

    </TouchableWithoutFeedback >

  )
}

const styles = StyleSheet.create({
    bigwrap : {flex :1 ,
         height : "100%"},
    Container : {
     flex : 1 ,
        backgroundColor  : colors.danger , 
        height : "100%" , 
        width : 70 ,
        height: "auto", 
        alignItems : "center",
        justifyContent : "center"

    }
})