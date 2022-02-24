import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import { store } from "./Utils/store";
import Badge from "./Components/Badge";
import { useFonts, Limelight_400Regular } from '@expo-google-fonts/limelight';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Badge />
        <Nav />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
