import {
    FlatList,
    Modal,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAnswer } from '../App';
import GameOver from '../Components/GameOver'
import WinningModal from './WinningModal';

const setAnswer = (question, answer) => ({ type: 'SET_ANSWER', payload: { question: { ...question, selectedAnswer: answer }, answer } })
const getBorderColor = (question) => {
    if (!question.selectedAnswer) {
        return '#00f';
    }
    if (question.correctAnswer.id !== question.selectedAnswer.id) {
        return '#f00';
    }

    if (
        question.correctAnswer.id === question.selectedAnswer.id &&
        question.correctAnswer.value === question.selectedAnswer.value
    ) {
        return '#0f0';
    }
};

const AnswerScreen = ({ questions, dispatch }) => {

    const [showGameOverModal, setShowGameOverModal] = useState(false);
    const [showWinningModal, setShowWinningModal] = useState(false)

    return (
        <View style={styles.container}>

            <Modal visible={showGameOverModal}>
                <GameOver hideModal={() => setShowGameOverModal(false)} />
            </Modal>

            <Modal visible={showWinningModal} >
                <WinningModal hideModal={() => setShowWinningModal(false)} />
            </Modal>

            <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                renderItem={({ item: question }) => (
                    <View>
                        <Text>{question.question}</Text>
                        <View
                            style={[
                                styles.options,
                                {
                                    borderColor: getBorderColor(question),
                                },
                            ]}
                        >
                            {question.answerOptions.map((option) => (
                                <Pressable
                                    key={option.id}
                                    style={[styles.option]}
                                    onPress={() => {
                                        dispatch(setAnswer(question, option));
                                        if (question.correctAnswer.value === option.value) {
                                            setShowWinningModal(true)
                                        } else {
                                            setShowGameOverModal(true)
                                        }
                                    }
                                    }
                                >
                                    <Text>{option.value.toString()}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const mapStateToProps = (state) => ({
    questions: state.questions
});

export default connect(mapStateToProps)(AnswerScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20, // StatusBar.currentHeight,
        paddingHorizontal: 20,
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        marginVertical: 8,
    },
    option: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        margin: 8,
        backgroundColor: '#afafaf',
    },
});
