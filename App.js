import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import { store } from "./Utils/store";
import Badge from "./Components/Badge";

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
