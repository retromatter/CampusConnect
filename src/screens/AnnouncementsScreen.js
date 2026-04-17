import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { theme } from '../theme';

const STATIC_ANNOUNCEMENTS = [
  {
    id: '1',
    title: 'Welcome to CampusConnect!',
    date: 'August 28, 2026',
    body: 'We are thrilled to launch the new CampusConnect app. Explore the features and start organizing your school life today.',
  },
  {
    id: '2',
    title: 'Midterm Schedules Posted',
    date: 'September 5, 2026',
    body: 'Please check your portal for the updated midterm examination schedules. Make sure to note any room reassignments.',
  },
  {
    id: '3',
    title: 'Campus Wi-Fi Maintenance',
    date: 'September 12, 2026',
    body: 'The IT department will be conducting scheduled maintenance on the campus Wi-Fi network this Saturday from 12:00 AM to 4:00 AM.',
  },
  {
    id: '4',
    title: 'Library Extended Hours',
    date: 'September 18, 2026',
    body: 'To support students during midterms, the main library will remain open until 11:00 PM on weekdays.',
  }
];

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {STATIC_ANNOUNCEMENTS.map((announcement) => (
          <Card key={announcement.id} style={styles.card} mode="elevated">
            <Card.Content>
              <Text variant="titleMedium" style={styles.cardTitle}>
                {announcement.title}
              </Text>
              <Text variant="labelSmall" style={styles.cardDate}>
                {announcement.date}
              </Text>
              <Text variant="bodyMedium" style={styles.cardBody}>
                {announcement.body}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
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
  card: {
    marginBottom: theme.spacing.medium,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.roundness,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  cardDate: {
    color: theme.colors.muted,
    marginBottom: 8,
  },
  cardBody: {
    color: theme.colors.text,
    lineHeight: 20,
  },
});
