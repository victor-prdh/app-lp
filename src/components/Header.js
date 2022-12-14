import { Text, View } from "react-native";
import Style from "../Style";
import { Title } from "./Text/Title";

export default function Header({children, title}) {
    return (
    <View style={Style.header}>
        <Title title={title} />
    </View>
    )
}
