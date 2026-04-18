# CampusConnect: Comprehensive Project Report 📑

## 1. Project Overview
**CampusConnect** is a professional-grade Smart Campus mobile application designed specifically for the students of Informatics College Consolacion. The goal of the project was to create a unified digital interface that replaces fragmented physical processes (like paper schedules and bulletin boards) with a real-time, cloud-synced mobile experience.

---

## 2. Technical Stack
The application is built using a modern, scalable JavaScript architecture:

- **Core Framework**: [React Native](https://reactnative.dev/) with [Expo SDK 50+](https://expo.dev/).
- **UI System**: [React Native Paper](https://callstack.github.io/react-native-paper/) (implementing Material Design 3).
- **Backend-as-a-Service (BaaS)**: [Firebase](https://firebase.google.com/).
    - **Authentication**: Email/Password flow.
    - **Database**: Cloud Firestore (NoSQL Document Store).
- **Icons**: `@expo/vector-icons` (Material Community Icons).
- **Navigation**: [React Navigation 6](https://reactnavigation.org/).
- **External API**: [OpenWeatherMap REST API](https://openweathermap.org/api) for live local weather data.

---

## 3. Architecture & Data Flow

### Service-Oriented Logic
The app logic is decoupled from the UI layer. All external integrations live in `src/services/`:
- **`firebase.js`**: Centralized initialization of Firebase Auth and Firestore.
- **`weatherService.js`**: Encapsulates the network logic for fetching weather data.

### Real-Time Data Synchronization
- **Announcements**: Uses Firestore `onSnapshot` listeners. When a school admin adds a new announcement in the Firebase Console, it appears on every student's phone instantly without a page refresh.
- **Personal Data**: Schedules and Notes are saved in a private user document: `users/{user_uid}`. This ensures that even if a student logs in on a different device, their data follows them.

### Guarded Navigation (Security)
The `App.js` entry point implements a conditional rendering pattern:
- **Unauthenticated State**: Shows a `Stack.Navigator` containing only the Login and Register screens.
- **Authenticated State**: Swaps the entire root view for a `Tab.Navigator`, granting access to the internal campus features.

---

## 4. Feature Summary

### Basic Features (Phase 1-4)
1. **Class Schedule**: Custom multi-day selector (grid layout) allowing classes to be assigned to M/T/W/Th/F/Sa.
2. **Notes / To-Do**: Interactive checklists with persistent cloud storage.
3. **Announcements**: Digital bulletin board feed.
4. **Campus Map**: Google Maps deep-linking with local landmark "human-friendly" directions.

### Advanced Features (Phase 5-7)
1. **Firebase Authentication**: Secure user management.
2. **Cloud Firestore Integration**: Global data persistence and per-user privacy.
3. **Weather Widget**: Live temperature and conditions for Mandaue/Consolacion integrated into the dashboard.

---

## 5. Deployment Strategy
The project is configured for **Expo EAS (Expo Application Services)**:
- **Branch-based Updates**: Allows pushing hotfixes directly to the "main" branch.
- **EAS Build**: Configured to generate `.apk` (Android) or `.ipa` (iOS) files in the cloud, removing the need for a local heavy development environment during the final build phase.

---

## 6. Developer Information
- **Developer**: Junlee Marc M Pepito
- **Class**: App Dev Yr 2
- **Website**: [JUNL.EE](https://junl.ee)
- **Year**: 2026

---
> This report serves as the technical documentation for the final project submission.
