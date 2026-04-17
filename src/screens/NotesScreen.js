import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { theme } from '../theme';

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Notes & To-Do</Text>
      <Text variant="bodyLarge">Phase 2: Coming Soon</Text>
      <FAB
        icon="note-plus"
        style={styles.fab}
        onPress={() => console.log('Add note')}
      />
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
    marginBottom: theme.spacing.small,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
  },
});
