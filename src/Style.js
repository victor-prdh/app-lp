import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 38
    },
    subTitle: {
        color: '#d0a85c',
        fontSize: 24,
    }
});