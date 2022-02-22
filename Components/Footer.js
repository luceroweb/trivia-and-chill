import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';

function Footer(){
    return(
        <View style={styles.container}>
            <Text>
                SETTINGS |  INSTRUCTIONS
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(Footer);