import Colors from "@/constants/Colors";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/videos/intro.jpg")}
        style={styles.video}
      >
        <Text
          style={styles.headline}
        >{`Ready to change \nthe way you \nmoney?`}</Text>
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={[styles.button,{backgroundColor:Colors.dark}]}>
            <Text style={[styles.buttonText,{color:Colors.background}]}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "space-between",
  },
  headline: {
    fontSize: 46,
    color: Colors.lightGray,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 20,
    textTransform: "capitalize",
  },
  buttonWrap: {
    // backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    borderWidth: 1,
    paddingHorizontal: 60,
    paddingVertical: 15,
    backgroundColor: Colors.background,
    marginBottom: 30,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'600',
    color:Colors.dark
  },
});
