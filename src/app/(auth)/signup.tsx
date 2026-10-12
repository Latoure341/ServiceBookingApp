import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign Up To Get Started</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
            autoCapitalize="none"
            style={styles.input}
          />

          <TouchableOpacity onPress={() => {
            alert("Sign In button pressed");
          }}
          style={styles.button}>
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            router.replace("./login");
          }} 
          style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Already have an account? <Text style={styles.linkButtonTextBold}>Sign in</Text></Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    flex: 1,
    justifyContent: "center",
    
    padding: 50,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 2,
  },
  subtitle: {
    alignSelf: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 10,
    alignSelf: "center",
  },
  linkButtonText: {
    color: "#666",
    fontSize: 14,
  },
  linkButtonTextBold: {
    fontWeight: "bold",
    color: "black",
  },
});
