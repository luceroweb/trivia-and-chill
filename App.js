import { StatusBar } from 'expo-status-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { StyleSheet, View } from "react-native";
import Nav from "./Components/Nav";
import { store } from "./Utils/store";
import Badge from "./Components/Badge";
import Timer from "./Components/Timer";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.layout}>
        <Timer />
        <Badge />
        <Nav />
      </View>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
