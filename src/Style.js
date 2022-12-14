import { StyleSheet } from "react-native";
import { Colors } from "./helper/Colors";

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    subTitle: {
        color: Colors.textLight,
        fontSize: 24,
    }
});