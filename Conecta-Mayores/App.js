
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaConfirEliminar from './screens/PantallaConfirEliminar';
import PantallaUsuario from './screens/PantallaUsuario';
const Stack = createNativeStackNavigator();
const icon=require('./assets/icon.png')
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Usuario" component={PantallaUsuario} />
                <Stack.Screen name="ConfirmarEliminar" component={PantallaConfirEliminar} />
            </Stack.Navigator>
        </NavigationContainer>
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