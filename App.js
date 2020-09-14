import { registerRootComponent }  from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <TouchableOpacity>
      <Text style={{ fontSize: 20, textTransform: "uppercase" }}>Iniciar Nuevo Juego</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{ fontSize: 20, textTransform: "uppercase" }}>Multijugador</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{ fontSize: 20, textTransform: "uppercase" }}>Tienda</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{ fontSize: 20, textTransform: "uppercase" }}>Mis Mazos</Text>
      </TouchableOpacity>
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

registerRootComponent(App);
