import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";



export default function Index() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter()
  const _onHandleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const _onHandleLogin = () => {
    alert(`${email} & ${password}`)
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.loginForm}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            
            
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your Password"
            style={styles.input}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
          />
          <Pressable
            onPress={_onHandleShowPassword}
            style={styles.showPassword}
          >
            <Text style={styles.showPasswordText}>
              {showPassword ? "HIDE" : "SHOW"}
            </Text>
          </Pressable>
        </View>
        <Pressable style={styles.loginButton} onPress={_onHandleLogin}>
          <Text style={styles.loginButtonText}>Continue</Text>
        </Pressable>

        <View style={styles.iconbar}>
          <Pressable style={styles.iconbtn} onPress={() => Alert.alert("Facebook")}>
            <Text style={styles.icon}>F</Text>
          </Pressable>
          <Pressable style={styles.iconbtn} onPress={() => Alert.alert('Google')}>
            <Text style={styles.icon}>G</Text>
          </Pressable>
          <Pressable style={styles.iconbtn} onPress={() => Alert.alert('Apple')}>
            <Text style={styles.icon}>A</Text>
          </Pressable>
        </View>

        <Pressable style={styles.registerTxt} onPress={() => router.navigate('/register')}>
          <Text style={styles.txt}>Register Now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a085",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  loginForm: {
    gap: 10,
  },
  input: {
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
    alignItems: "center",
  },
  showPassword: {
    paddingHorizontal: 5,
  },
  showPasswordText: {
    color: "gray",
  },
  loginButton: {
    height: 48,
    backgroundColor: "#2c3e50",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
  },
  iconbar:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
    
  },
  iconbtn:{
    backgroundColor: "white",
    height: 50,
    width: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  icon:{
    fontWeight: "bold",
    fontSize: 20,
    color: "blue"
  }, 
  registerTxt:{
    justifyContent: "center",
    alignItems: "center",
  },
  txt:{
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  }
});
