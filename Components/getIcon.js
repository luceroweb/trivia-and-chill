import { FontAwesome } from "@expo/vector-icons";
import {Text} from "react-native";
export const getIcon = (button) => {
    if (typeof selectedAnswer === "undefined") {
        return <FontAwesome name="star" size={12} color="#401323" />;
    }
    if (button !== answer) {
        return <FontAwesome name="close" size={16} color="#CA3D45" />;
    }
    if (button === answer) {
        return <FontAwesome name="check" size={16} color="green" />;
    }
};

export const getColorT = (button) => {
    if (typeof selectedAnswer === "undefined") {
        return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"black"}}>True </Text>;
    }
    if (button !== answer) {
        return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "line-through",color:"red"}}>True </Text>;
    }
    if (button === answer) {
        return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"green"}}>True </Text>;
    }
};
export const getColorF = (button) => {
    if (typeof selectedAnswer === "undefined") {
        return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"black"}}>False </Text>;
    }
    if (button !== answer) {
        return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "line-through",color:"red"}}>False </Text>;
    }
    if (button === answer) {
        return <Text style={{ marginRight: 20, marginLeft: 20 ,textDecorationLine: "none",color:"green"}}>False </Text>;
    }
};