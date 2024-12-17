import { Text, View , Image, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source = {require("../assets/images/react-logo.png")} style={styles.logo}/>
      <Text style={styles.Text}>Hello World!</Text>
      <Text>My First ReactNAtive cross platform app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:200,
    height:200,
    borderStyle: "solid",
    borderWidth : 2,
    borderColor: "blue"
  },
  Text:{
    color: "red",
    fontSize : 30
  }
})
