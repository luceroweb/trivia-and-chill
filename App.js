import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Nav from "./Layout/Nav";
import { store } from "./Utils/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Nav />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>
  );
}
