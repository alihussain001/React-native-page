import { View, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { TextInput } from "react-native";


export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Register Page</Text>
      
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
                                             
  }
 

});
