import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
const icon=require('./assets/icon.png')
export default function App() {
    return (
        <View style={styles.container}>
            <Image source={icon} style={{width:100, height:100}} />
            <Text>Open up App.js to start working on your app!</Text>
            <TouchableHighlight onPress={() => alert("hola")} style={{backgroundColor:'green', borderRadius:3 }} >
                 <Text>Boton</Text>
            </TouchableHighlight>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});