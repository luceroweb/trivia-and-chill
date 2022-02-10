import { StatusBar } from 'expo-status-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Badge from './Components/Badge';
import Timer from './Components/Timer';

export default function App() {

  const initialState = {
    winningStreak: 0,
    timerCount: 10
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
      case 'COUNTDOWN_TIMER':
        return {
          timerCount: setInterval(state.timerCount, -1)
        }
    }
    return state;
  }

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Timer />
      <Badge />
      <Home />
      <StatusBar style="auto" />
    </Provider>
  );
}
