
# Appointment Planner App

## Overview

The Appointment Planner is a simple and intuitive web application built with React that allows users to manage their contacts and schedule appointments. The app features a clean and user-friendly interface, ensuring that all contact information and appointments are organized efficiently.

## Features

- **Contact Management:** Add and manage contacts with essential details like name, phone number, and email.
- **Appointment Scheduling:** Schedule appointments by selecting contacts and specifying the date and time.
- **Duplicate Detection:** Prevents duplicate contacts by checking for existing names during the contact creation process.
- **Dynamic UI:** The app dynamically updates the list of contacts and appointments, ensuring the latest information is always displayed.

## Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/yourusername/appointment-planner.git
   \`\`\`

2. **Navigate to the project directory:**

   \`\`\`bash
   cd appointment-planner
   \`\`\`

3. **Install the dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

4. **Run the application:**

   \`\`\`bash
   npm start
   \`\`\`

   The app will run in development mode and can be accessed at `http://localhost:3000`.

## Project Structure

- **`App.js`:** The main component that sets up the router and manages the state for contacts and appointments.
- **`ContactsPage.js`:** Manages the logic for adding new contacts and displays the list of contacts.
- **`AppointmentsPage.js`:** Handles appointment creation and displays the list of scheduled appointments.
- **`ContactForm.js`:** A form component used for adding new contacts.
- **`AppointmentForm.js`:** A form component for scheduling new appointments.
- **`ContactPicker.js`:** A dropdown component for selecting a contact when scheduling an appointment.
- **`Tile.js`:** A component that displays individual pieces of contact or appointment information.
- **`TileList.js`:** A component that renders a list of `Tile` components, either for contacts or appointments.

## Usage

- **Adding Contacts:** Navigate to the "Contacts" section, fill out the form with the contact's name, phone, and email, and click "Add Contact". The contact will appear in the list below.
- **Scheduling Appointments:** Go to the "Appointments" section, fill out the form with the appointment details (title, date, time, and contact), and click "Add Appointment". The appointment will be listed in the section below.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Router:** Used for routing between different pages within the app.
- **CSS:** Used for basic styling.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch for your feature or bugfix, and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
