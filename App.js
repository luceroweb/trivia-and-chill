import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import { store } from "./Utils/store";

export default function App() {
  return (
    <Provider store={store}>
      <Nav />
      <StatusBar style="auto" />
    </Provider>
  );
}
