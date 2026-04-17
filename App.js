import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from './src/theme';

// Screen Imports
import ScheduleScreen from './src/screens/ScheduleScreen';
import NotesScreen from './src/screens/NotesScreen';
import AnnouncementsScreen from './src/screens/AnnouncementsScreen';
import MapScreen from './src/screens/MapScreen';

const Tab = createBottomTabNavigator();

const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: theme.colors.primary,
    secondaryContainer: '#e8f0fe',
  },
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Schedule') iconName = 'calendar-clock';
              else if (route.name === 'Notes') iconName = 'notebook-edit';
              else if (route.name === 'Announcements') iconName = 'bullhorn';
              else if (route.name === 'Map') iconName = 'map-marker-radius';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: 'gray',
            headerStyle: { backgroundColor: theme.colors.primary },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          })}
        >
          <Tab.Screen name="Schedule" component={ScheduleScreen} />
          <Tab.Screen name="Notes" component={NotesScreen} />
          <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
