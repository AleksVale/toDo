import { View, Image } from "react-native";
import { StyleSheet } from "react-native";


export function Header(){
    return(
        <View style= {styles.container}>
           <Image source = {require('../../assets/Logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        backgroundColor: "#0D0D0D",
        padding: 40,
        alignItems: "center",
    },
})