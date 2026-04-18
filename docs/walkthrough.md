# CampusConnect: Application Walkthrough 🚶‍♂️

Welcome to the visual walkthrough of the **CampusConnect** mobile app. This guide explains how to navigate and use the key features of the application.

---

## 🔐 1. Authentication Area
The entry point of the application is guarded by a secure login system.

### Login Screen
- **Visuals**: A clean, primary-colored background with a centered white card.
- **Header**: Includes a white **(i)** info icon in the top right corner. Clicking this reveals the "About CampusConnect" modal with version and developer details.
- **Fields**: Email Address (Outlined) and Password (Secure/Hidden).
- **Actions**: "Log In" button and a "Register" link for new users.

### "About App" Modal
- **Trigger**: Tapped the info icon on the Login/Register screen.
- **Content**: Detailed breakdown of the app purpose, features, version (1.0.0), and developer credits.

---

## 🗓️ 2. Class Schedule Screen
The primary hub for organizing your school week.

### The Feed
- **Layout**: Grouped by day (Mon, Tue, Wed, Thu, Fri, Sat).
- **Visuals**: Each class is displayed as an elevated card showing the **Subject**, **Time**, and **Room**.
- **Empty State**: Displays a friendly message if no classes are added for a particular day.

### Adding a Class
- **Action**: Tap the floating **[+] FAB (Floating Action Button)** in the bottom right.
- **Multi-Day Grid**: Features a 3x2 grid of buttons (Mon-Sat). You can select multiple days (e.g., TTh) for a single class entry.
- **Details**: Input fields for Subject Name, Time, and Room number.

---

## 📝 3. Notes / To-Do Screen
Your personal assistant for tracking assignments and tasks.

### Features
- **Visuals**: A vertical list of tasks with interactive checkboxes.
- **Interactions**: 
    - Tap a checkbox to "strike through" a completed task.
    - Tap the **Delete (Bin)** icon to remove a task entirely.
- **Persistence**: All notes are saved to the cloud, so you'll never lose your to-do list.

---

## 📢 4. Announcements & Dashboard
The "Heart" of the campus information feed.

### Weather Widget (Dashboard)
- **Visuals**: A vibrant sky-blue card at the top of the feed.
- **Data**: Displays live Temperature and Weather conditions (e.g., "30°C • Partly Cloudy") for Mandaue/Consolacion.

### Announcement Feed
- **Source**: Fetched live from Firestore.
- **Content**: Cards containing the Title, Date, and Body of campus updates (e.g., "Midterm Schedules", "Holiday Notice").

---

## 📍 5. Campus Map Screen
Never get lost in Building A.

### Navigation Card
- **Description**: An easy-access card labeled "Open in Navigation App".
- **Action**: Tapping "Open Google Maps" triggers a deep-link that auto-searches the campus location.
- **Smart Note**: Includes a bold reminder that the campus is located right beside **Paengs Chicken**, helping you find the physical entrance even if the GPS pin is slightly off.

### Key Locations List
- **Layout**: A structured list of major offices:
    - Main Library (Building A)
    - Student Canteen (Building A)
    - Admin Office (Building A)
    - IT Department (Building A)

---
> **End of Walkthrough**  
> *CampusConnect v1.0.0*
