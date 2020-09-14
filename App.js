import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.containerDark}>
      <TouchableOpacity onPress={() => navigation.navigate("NuevoJuego")}>
        <Text style={{ fontSize: 20, textTransform: "uppercase", margin: 25, color: "#E0D3DE" }}>
          Iniciar Nuevo Juego
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 20, textTransform: "uppercase", margin: 25, color: "#E0D3DE" }}>
          Multijugador
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 20, textTransform: "uppercase", margin: 25, color: "#E0D3DE" }}>Tienda</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 20, textTransform: "uppercase", margin: 25, color: "#E0D3DE'" }}>
          Mis Mazos
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function NuevoJuego({ navigation }) {
  return (
    <View style={styles.containerDark}>
      <Text style={{ fontSize: 20, color: "#E0D3DE" }}>Iniciando nuevo juego...</Text>
      <ActivityIndicator size="large" color="#B3001B" style={{ margin: 15 }} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NuevoJuego" component={NuevoJuego} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#30362F",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;

registerRootComponent(App);
