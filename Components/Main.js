import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { connect } from 'react-redux';

function Main(){
    return(
        
        <>
            <View>
                <Image
                    style={{ width: 700, height: 100 }}
                    source={require('../Images/bw-header-logo.png')} />
            </View>
            <View>
                    <Image
                        style={{ width: 500, height: 100 }}
                        source={require('../Images/teammvp-header-logo.png')} />
            </View>
            <View>
                    <Image
                        style={{ width: 500, height: 100 }}
                        source={require('../Images/presents-header-logo.png')} />
            </View>
            <View>
                    <Image
                        style={{ width: 500, height: 500 }}
                        source={require('../Images/gtm-header-logo.png')} />
            </View>
            
            </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(Main);