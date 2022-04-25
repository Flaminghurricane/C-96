import React, { Component } from 'react'
import { FlatList } from "react-native-gesture-handler";
import TTCard from "../screens/TTCard"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


let TTData = require("../assets/TT.json");
export default class TipsandTricks extends Component {
  renderItem=({item:content})=>{
  return <TTCard TTData={content} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>{
    index.toString()
  }
  render() {
    return (
      
        <View style={{flex:1,backgroundColor:"black"}}>
         <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
            
               <Ionicons
               // style={styles.iconImage}
                    name={"american-football-outline"}
                    size={RFValue(30)}
                    color={"white"}
                  />
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                  styles.appTitleText
                }
              >
                Sports Tips and Tricks
              </Text>
            </View>
          </View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={TTData}
                renderItem={this.renderItem}
              /></View>
      
    )
  }
}

const styles=StyleSheet.create({
  name:{
      fontSize:RFValue(15),
      alignItems:"center",
      justifyContent:"center",
      fontWeight:'bold',
      fontFamily:'bubblegum-sans',
      color:"white"
  },
  container: {
      flex:1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20),
      flex:0.5
    },
    cardContainerLight: {
      margin: RFValue(13),
      backgroundColor: "white",
      borderRadius: RFValue(20),
      shadowColor: "rgb(0, 0, 0)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      shadowOpacity: RFValue(0.5),
      shadowRadius: RFValue(5),
      elevation: RFValue(2)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(30),
      justifyContent: "center",
      alignItems:'center'
    },
    titleTextContainer: {
      flex: 0.8
    },
    iconContainer: {
      flex: 0.2
    },
    titleText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      color: "white"
    },
    storyTitleTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      color: "black"
    },
    storyAuthorText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(18),
      color: "white"
    },
    storyAuthorTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(18),
      color: "black"
    },
    descriptionContainer: {
      marginTop: RFValue(5)
    },
    descriptionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(13),
      color: "white"
    },
    descriptionTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(13),
      color: "black"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButtonLiked: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeButtonDisliked: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderColor: "#eb3948",
      borderWidth: 2,
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: 25,
      marginLeft: 25,
      marginTop: 6
    },
    likeTextLight: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 25,
     
      marginLeft: 25,
      marginTop: 6
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(20),
      fontFamily: "Bubblegum-Sans"
    }
})
