import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import { connect } from 'react-redux';

function Main(){
  const windowWidth = useWindowDimensions().width;
  console.log("window", windowWidth);

    return(
        <View>
            <View>
                <Image
                    style={{ width: "80%", aspectRatio: 7/1 }}
                    source={require('../Images/bw-header-logo.png')}
                    alt="BitWise Industries" />
            </View>
            <View>
                    <Image
                        style={{ width: "45%", aspectRatio: 5/1 }}
                        source={require('../Images/teammvp-header-logo.png')}
                        alt="Team MVP" />
            </View>
            <View>
                    <Image
                        style={{ width: "45%", aspectRatio: 5/1 }}
                        source={require('../Images/presents-header-logo.png')}
                        alt="Presents" />
            </View>
            <View>
                    <Image
                        style={{ width: "75%", aspectRatio: 1 }}
                        source={require('../Images/gtm-header-logo.png')}
                        alt="Guess The Movie" />
            </View>
            
        </View>
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