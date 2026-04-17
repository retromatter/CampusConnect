import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { theme } from '../theme';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Campus Map</Text>
      <View style={styles.mapPlaceholder}>
        <Text variant="bodyMedium">Map Image Placeholder</Text>
      </View>
      <Button 
        mode="contained" 
        onPress={() => console.log('Open Google Maps')}
        style={styles.button}
      >
        Open in Google Maps
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  mapPlaceholder: {
    width: '100%',
    height: 300,
    backgroundColor: '#e2e8f0',
    borderRadius: theme.roundness,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.medium,
  },
  button: {
    width: '100%',
    backgroundColor: theme.colors.primary,
  },
});
