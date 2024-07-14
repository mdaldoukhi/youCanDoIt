import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
<View style={styles.logoContainer}>
<Image  style={ styles.logo}source={require('../assets/logo-red.png')}/>
<Text style={styles.tagline}>Sell what you dont need</Text>

</View>
<View style={styles.btnContainer}>
<AppButton title={"login"} onPress={() => console.log("tapped")}/>
<AppButton title={"Register"}  color = "secondary" onPress={() => console.log("tapped")}/>

</View>
    </ImageBackground>
    
  );
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background : { flex :1 ,
        justifyContent : "flex-end",
        alignItems : "center"
    } ,
    tagline :{
        fontSize : 25,
        fontWeight : "600" ,
        paddingVertical : 20,
    },
    loginBtn : {
        width : "100%" ,
        height : 70,
        backgroundColor : '#fc5c65',
    },
    btnContainer : {
        padding : 20 ,
        width : "100%",
    },
    RegBtn : {
        width : "100%" ,
        height : 70,
        backgroundColor : '#4ecdc4',
    },
    logo : {
        width : 100,
        height : 100,
       
    },
    logoContainer : {
        position : "absolute",
        top : 70,
        alignItems : "center"
    }

})