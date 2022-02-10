import { StatusBar } from 'expo-status-bar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import AnswerScreen from './Components/AnswerScreen';
// import store from './redux/store'

const initialState = {
  winningStreak: 0,
  questions: [
    {
      id: '1',
      question: 'Spider man far from home was released in 2022. Is it correct?',
      correctAnswer: {
        value: false, id: '2'
      },
      answerOptions: [{ id: '1', value: true }, { id: '2', value: false }],
      selectedAnswer: undefined
    }]
}

export default function App() {

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_WINNING_STREAK':
        return {
          winningStreak: state.winningStreak + 1
        }
      case 'RESET_WINNING_STREAK':
        return {
          winningStreak: 0
        }

      case 'SET_ANSWER':
        return { ...state, questions: state.questions.map(question => question.id === action.payload.question.id ? action.payload.question : question) }
    }
    return state;
  }

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      {/* <Home /> */}
      <AnswerScreen />
      <StatusBar style="auto" />
    </Provider>
  );
}
