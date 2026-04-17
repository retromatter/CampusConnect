import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { theme } from '../theme';

export default function AnnouncementsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text variant="headlineMedium" style={styles.title}>Announcements</Text>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Welcome to CampusConnect</Text>
          <Text variant="bodyMedium">Phase 3: Real-time announcements coming soon.</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.medium,
  },
  title: {
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    marginBottom: theme.spacing.medium,
    backgroundColor: theme.colors.surface,
  },
});
