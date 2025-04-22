import { View, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";


export default function Register() {

const[ showPassword, setShowPassword] = useState<boolean>(false);
const [email, setEmail] = useState<string>("");
const[password, setPassword] = useState<string>("");



const _onHandleShowPassword = () => {
  setShowPassword((prevState) => !prevState);
};

const _onHandleSignUp = () => {
  alert("You have been SignedUp")
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Register Page</Text>
      <View style={styles.register}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Enter your email" style={styles.Input} keyboardType="email-address" onChangeText={text => setEmail(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Enter your Password" style={styles.Input} secureTextEntry={!showPassword} onChangeText={text => setPassword(text)}/>
          <Pressable onPress={_onHandleShowPassword} style={styles.showPassword}>
            <Text style={styles.showPasswordTxt}>{showPassword ? "HIDE" : "SHOW"}</Text>
          </Pressable>
        </View>

        <Pressable style={styles.signupBtn} onPress={_onHandleSignUp}>
          <Text style={styles.btnTxt}>Sign Up</Text>
        </Pressable>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap:20,
    backgroundColor: "#16a085",
  },
  heading:{
    fontWeight: "bold",
    fontSize: 30,
    color: "white",                                         
  },
  register:{
    justifyContent: "center",
    alignItems: "center",
  },
  Input:{
    flex:1,
    paddingHorizontal: 10,
  },
  inputContainer:{
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent:"center",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    height: 48,
    margin: 10,
    overflow: "hidden"
  },
  signupBtn:{
    backgroundColor:"#34495e",
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5
  },
  btnTxt:{
    color: "white",
    fontWeight: "400",
    fontSize: 17,
  },
  showPassword:{
    paddingHorizontal: 5,
    justifyContent: "center"
  },
  showPasswordTxt:{
    color:"grey"
  }
 

});
