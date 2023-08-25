/**
 * Application Entry Point File
 *
 * @dev leling-tech
 */
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.welcome}>欢迎使用乐龄科技App！</Text>
      <TextInput
        style={styles.email}
        placeholder="邮箱*"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.loginBtn} onPress={() => {Alert.alert("请联系系统管理员申请账户！\n邮箱：info@leling-tech.com")}}>
        <Text style={styles.btnText}>登录</Text>
      </TouchableOpacity>
      <View style={styles.delimiter}></View>
      <TouchableOpacity style={styles.oauth} onPress={() => {}}>
        <Image style={styles.oauthImg} source={require("../assets/google.png")} />
        <Text>使用谷歌登录{"   "}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.oauth} onPress={() => {}}>
        <Image style={styles.oauthImg} source={require("../assets/linkedin.jpg")} />
        <Text>使用领英登录{"   "}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.oauth} onPress={() => {}}>
        <Image style={styles.oauthImg} source={require("../assets/twitter.png")} />
        <Text>使用推特登录{"   "}</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>隐私条款</Text>
        <Text>|</Text>
        <Text style={styles.footerText}>免责声明</Text>
      </View>
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
    fontSize: 18
  },
  email: {
    marginVertical: 20,
    width: "80%",
    height: 48,
    borderWidth: 1,
    borderRadius: 9,
    padding: 10,
  },
  loginBtn: {
    width: "48%",
    height: 42,
    backgroundColor: "#00B074",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
  },
  delimiter: {
    marginVertical: 30,
    width: "90%",
    height: 1,
    backgroundColor: "#F1F1F1",
  },
  oauth: {
    width: "80%",
    height: 48,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  oauthImg: {
    width: 26,
    height: 26,
    marginRight: 22
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    textAlign: "center",
    paddingVertical: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  footerText: {
    marginHorizontal: 8,
  },
});
