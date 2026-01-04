
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const icon = require('../assets/icon.png');

export default function PantallaUsuario({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{ width: 100, height: 100 }} />
      <Text style={{margin:10}}>Usuario</Text>
      
      <TouchableHighlight 
        onPress={() => navigation.navigate('ConfirmarEliminar')} 
        style={{ backgroundColor: '#CDE861', borderRadius: 3, padding: 10 }}
      >
        <Text>Eliminar usuario</Text>
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
    padding:10
  },
});