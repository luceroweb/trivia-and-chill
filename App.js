import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import { store } from "./Utils/store";
import Badge from "./Components/Badge";
import FetchApi from "./Utils/FetchApi";

export default function App() {
  return (
    <>
    {/* <FetchApi /> */}
      <Provider store={store}>
        <Badge />
        <Nav />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
