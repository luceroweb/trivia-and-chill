import { View, Text, StyleSheet } from "react-native";
import { useFonts, Limelight_400Regular } from "@expo-google-fonts/limelight";

const DeveloperCredits = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.credits}>
                <Text style = {styles.textStyle}>CREDITS</Text>
                <Text style = {styles.textStyle}>In Alphabetical order</Text>                
            </View>
            <View style={styles.contentLayout} >
                <View style = {styles.names}>
                    <Text style = {styles.textStyle}>Grace Aranico (she/her)</Text>
                    <Text style = {styles.textStyle}>Paidamoyo-Janet "Myles" Azehko (she/her/they/them)</Text>
                    <Text style = {styles.textStyle}>Hiwot Beshe (she/her)</Text>
                    <Text style = {styles.textStyle}>Darla Brown (she/her)</Text>
                    <Text style = {styles.textStyle}>Habteab Firezgi (he/him)</Text>
                    <Text style = {styles.textStyle}>Garet Hough (he/him)</Text>
                    <Text style = {styles.textStyle}>Eyob Legese (he/him)</Text>
                    <Text style = {styles.textStyle}>Juan Lucero (he/him)</Text>
                    <Text style = {styles.textStyle}>Albert Martinez (he/him)</Text>
                    <Text style = {styles.textStyle}>Xavier Mercado (he/him)</Text>
                    <Text style = {styles.textStyle}>Sam Rosenberg (he/him)</Text>
                    <Text style = {styles.textStyle}>Jason Smith (he/him)</Text>
                    <Text style = {styles.textStyle}>Tesfa Worku (he/him)</Text>                    
                </View>
                <View style = {styles.titles}>
                    <Text style = {styles.textStyle}>Developer</Text>
                    <Text style = {styles.textStyle}>Developer</Text>
                    <Text style = {styles.textStyle}>Team Lead</Text>
                    <Text style = {styles.textStyle}>Developer</Text>
                    <Text style = {styles.textStyle}>Developer</Text>
                    <Text style = {styles.textStyle}>Team Lead</Text>
                    <Text style = {styles.textStyle}>Developer</Text>
                    <Text style = {styles.textStyle}>Owner/Client</Text>
                    <Text style = {styles.textStyle}>Developer</Text>
                    <Text style = {styles.textStyle}>Team Lead</Text>
                    <Text style = {styles.textStyle}>Team Lead</Text>
                    <Text style = {styles.textStyle}>Developer</Text>
                    <Text style = {styles.textStyle}>Developer</Text>                
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#292840",
    },
    credits: {
        alignItems: "center",
        padding: 20,
    },
    contentLayout: {        
        justifyContent: "center",        
        textAlign: "center",
        flexDirection: "row-reverse",              
    },
    names: {
        textAlign: "left",
        marginLeft: "10px",
    },
    titles: {
        textAlign: "right",
        marginRight: "10px",
        paddingLeft: "120px",
    },
    textStyle: {
        color: "#F2D379",
        fontFamily: "Limelight_400Regular",
    }
});

export default DeveloperCredits;