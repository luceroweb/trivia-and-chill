import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import Nav from "./Components/Nav";
import { store } from "./Utils/store";
import GenerateQuestion from "./Components/GenerateQuestion";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <View style={styles.layout}>
          <Nav />
          <GenerateQuestion />
        </View>
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
