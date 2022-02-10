import { StatusBar } from 'expo-status-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Badge from './Components/Badge';
import FetchApi from './Utils/FetchApi';

export default function App() {

  const initialState = {
    winningStreak: 0
  }

  const reducer = (state = initialState, action) => {
    switch(action.type){
      case 'INCREASE_WINNING_STREAK':
        return {
          winningStreak: state.winningStreak + 1
        }
      case 'RESET_WINNING_STREAK':
        return {
          winningStreak: 0
        }
    }
    return state;
  }

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Badge />
      {/* <Home /> */}
      <FetchApi />
      <StatusBar style="auto" />
    </Provider>
  );
}
