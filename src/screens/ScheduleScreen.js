import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, FAB, Portal, Modal, TextInput, Button, Card, IconButton, SegmentedButtons } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../theme';

const STORAGE_KEY = '@campusconnect_schedule';
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function ScheduleScreen() {
  const [schedule, setSchedule] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  
  // Form State
  const [subject, setSubject] = useState('');
  const [time, setTime] = useState('');
  const [room, setRoom] = useState('');
  const [selectedDay, setSelectedDay] = useState('Mon');

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedData) setSchedule(JSON.parse(storedData));
    } catch (e) {
      console.error('Failed to load schedule', e);
    }
  };

  const saveSchedule = async (newSchedule) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newSchedule));
      setSchedule(newSchedule);
    } catch (e) {
      console.error('Failed to save schedule', e);
    }
  };

  const addClass = () => {
    if (!subject.trim() || !time.trim() || !room.trim()) {
      Alert.alert('Missing Fields', 'Please fill in all fields (Subject, Time, Room).');
      return;
    }

    const newClass = {
      id: Date.now().toString(),
      subject,
      time,
      room,
      day: selectedDay,
    };

    const updatedSchedule = [...schedule, newClass];
    saveSchedule(updatedSchedule);

    // Reset Form
    setSubject('');
    setTime('');
    setRoom('');
    setSelectedDay('Mon');
    setModalVisible(false);
  };

  const deleteClass = (id) => {
    Alert.alert('Delete Class', 'Are you sure you want to remove this class?', [
      { text: 'Cancel', style: 'cancel' },
      { 
        text: 'Delete', 
        style: 'destructive',
        onPress: () => {
          const updatedSchedule = schedule.filter(item => item.id !== id);
          saveSchedule(updatedSchedule);
        }
      }
    ]);
  };

  // Group schedule by day
  const groupedSchedule = DAYS.map(day => ({
    day,
    classes: schedule.filter(item => item.day === day)
  })).filter(group => group.classes.length > 0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {groupedSchedule.length === 0 ? (
          <View style={styles.emptyState}>
            <Text variant="bodyLarge" style={{ color: theme.colors.muted }}>
              No classes heavily scheduled yet. Tap + to add!
            </Text>
          </View>
        ) : (
          groupedSchedule.map((group) => (
            <View key={group.day} style={styles.dayGroup}>
              <Text variant="titleMedium" style={styles.dayHeader}>{group.day}</Text>
              {group.classes.map((cls) => (
                <Card key={cls.id} style={styles.card} mode="elevated">
                  <Card.Title 
                    title={cls.subject} 
                    titleVariant="titleMedium"
                    titleStyle={{ fontWeight: 'bold' }}
                    subtitle={`${cls.time} • ${cls.room}`}
                    right={(props) => (
                      <IconButton {...props} icon="delete-outline" iconColor={theme.colors.error} onPress={() => deleteClass(cls.id)} />
                    )}
                  />
                </Card>
              ))}
            </View>
          ))
        )}
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      />

      <Portal>
        <Modal visible={isModalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={styles.modalContainer}>
          <Text variant="headlineSmall" style={styles.modalTitle}>Add New Class</Text>
          
          <SegmentedButtons
            value={selectedDay}
            onValueChange={setSelectedDay}
            buttons={DAYS.map(day => ({ value: day, label: day }))}
            style={styles.segmentedButtons}
          />

          <TextInput
            label="Subject (e.g. Math 101)"
            value={subject}
            onChangeText={setSubject}
            mode="outlined"
            style={styles.input}
            activeOutlineColor={theme.colors.primary}
          />
          <TextInput
            label="Time (e.g. 08:00 AM)"
            value={time}
            onChangeText={setTime}
            mode="outlined"
            style={styles.input}
            activeOutlineColor={theme.colors.primary}
          />
          <TextInput
            label="Room (e.g. Room A10)"
            value={room}
            onChangeText={setRoom}
            mode="outlined"
            style={styles.input}
            activeOutlineColor={theme.colors.primary}
          />

          <View style={styles.modalActions}>
            <Button mode="text" onPress={() => setModalVisible(false)} textColor={theme.colors.muted}>Cancel</Button>
            <Button mode="contained" onPress={addClass} buttonColor={theme.colors.primary}>Save Class</Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.medium,
    paddingBottom: 100, // Space for FAB
  },
  emptyState: {
    paddingTop: 50,
    alignItems: 'center',
  },
  dayGroup: {
    marginBottom: theme.spacing.large,
  },
  dayHeader: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
    marginLeft: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  card: {
    marginBottom: theme.spacing.small,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.roundness,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 24,
    margin: 20,
    borderRadius: theme.roundness,
  },
  modalTitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.primary,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  segmentedButtons: {
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    gap: 8,
  }
});
