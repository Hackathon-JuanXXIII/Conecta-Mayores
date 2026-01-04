
import { View, Text, Image, TouchableHighlight, StyleSheet,Button } from 'react-native';
const icon = require('../assets/icon.png');

export default function PantallaConfirEliminar({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={icon} style={{ width: 100, height: 100 }} />
            <Text style={{margin:10}}>¿Está seguro de eliminar?</Text>
            <View style={{ flexDirection: 'row', gap: 15 }}>
                <TouchableHighlight 
                    onPress={() => navigation.navigate('')} 
                    style={{ backgroundColor: '#CDE861', borderRadius: 3, padding: 10 }}
                >
                    <Text>Si</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => navigation.navigate('Usuario')} 
                    style={{ backgroundColor: 'red', borderRadius: 3, padding: 10 }}
                >
                    <Text>No</Text>
                </TouchableHighlight>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:10
    },
});