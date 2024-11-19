# Next.js Todo App

A responsive web-based task management application built with Next.js. Users can create, update (mark as done/undone), and delete tasks. The app supports both light and dark mode for better usability.

This project is designed as a portfolio piece to demonstrate proficiency with modern web development practices.

---

## Features

- **Task Management:** Add, update (mark as done/undone), and delete tasks.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Modern Stack:** Built with Next.js 15.0.3 App Router, React, and Tailwind CSS.

---

## Technologies Used

### Core Frameworks and Libraries

- **Next.js 15.0.3**
- **React 19.0.0**

### Styling

- **Tailwind CSS 3.4.1**

### Code Quality

- **ESLint** with `eslint-config-next`

---

## Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js** (version 18 or newer)
- **npm** (or **yarn**) for dependency management

---

## Getting Started

Follow these steps to run the app locally:

### 1. Clone the Repository

````bash
git clone https://github.com/shagaranasution/next-todo-app.git
cd next-todo-app

### 2. Install Dependencies
```bash
nmp install

### 3. Run the Development Server
```bash
npm run dev

Access the app at http://localhost:3000.

---

## Disclaimer
This app uses `data.json` for task storage, which is intended for demonstration purposes only. It is not suitable for production use.

---

## Known Limitations
- Data is not persisted across sessions since tasks are stored in a local file (data.json).
- This app is not intended for deployment in a production environment.

---

## Future Improvements
- Add database integration (e.g., MongoDB, PostgreSQL) for task storage.
- Implement user authentication.
- Enhance accessibility features (e.g., keyboard navigation, ARIA roles).
````
