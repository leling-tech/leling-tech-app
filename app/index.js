/**
 * Application Entry Point File
 *
 * @dev leling-tech
 */
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://www.leling-tech.com/img/logo.svg" }}
      />
      <Text style={styles.welcome}>欢迎使用乐龄科技！</Text>
      <TextInput
        style={styles.email}
        placeholder="邮箱*"
        keyboardType="email"
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {}}
      >
        <Text style={styles.btnText}>登录</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  welcome: {
    fontWeight: "bold",
  },
  email: {
    marginVertical: 20,
    width: "80%",
    height: 36,
    borderWidth: 1,
    borderRadius: 9,
    padding: 3,
  },
  loginBtn: {
    width: "36%",
    height: 40,
    backgroundColor: "#00B074",
    borderRadius: 4,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center"
  },
  btnText: {
    color: "#fff",
  }
});
