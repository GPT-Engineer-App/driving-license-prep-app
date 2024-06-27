# driving-license-prep-app

i want a react native app
User Story:
As a user preparing for the Category B driving license exam, I want an app that provides comprehensive preparation tools, including official quizzes with various review options, statistics, and a manual with argument-based decks. This will help me study efficiently, track my progress, and review my mistakes to improve my chances of passing the exam.

As an admin, I want an app that allows me to manage quizzes, review user progress, and update content, ensuring that users have access to the most accurate and helpful study materials.

Tasks Breakdown
User Interface (UI)
User Interface for Users
Registration & Login:

Task 1.1: Create registration page
Task 1.2: Create login page
Task 1.3: Implement authentication
Official Quiz Section:

Task 2.1: Create quiz dashboard
Task 2.2: Implement simulation exam interface
Subtask 2.2.1: Design 30 decks for simulation exam
Subtask 2.2.2: Implement choices for each deck (True: Sure, Not Sure, Don't Know; False: Sure, Not Sure, Don't Know)
Task 2.3: Implement quiz by arguments interface
Task 2.4: Implement statistics view for quizzes
Task 2.5: Implement review errors quiz interface
Manual by Arguments:

Task 3.1: Create manual dashboard
Task 3.2: Implement decks by arguments
Task 3.3: Implement choices for each deck (I remember, I don't remember, I'm not sure)
Quiz Response Management:

Task 4.1: Implement response handling and categorization
Task 4.2: Implement review scheduling based on response types (priority-based review)
User Interface for Admins
Admin Dashboard:
Task 5.1: Create admin login page
Task 5.2: Implement admin dashboard
Task 5.3: Implement quiz management interface
Task 5.4: Implement user progress review interface
Task 5.5: Implement content update interface
Backend Development
User Management
User Authentication & Authorization:
Task 6.1: Set up user authentication
Task 6.2: Implement user role management (user/admin)
Quiz and Deck Management
Quiz Management:

Task 7.1: Implement database schema for quizzes and decks
Task 7.2: Create API for quiz operations (CRUD)
Task 7.3: Implement logic for quiz simulation and argument-based quizzes
Response and Review Management:

Task 8.1: Implement response recording and categorization logic
Task 8.2: Implement review scheduling logic based on response priority
Testing and Documentation
Testing:

Task 9.1: Write unit tests for frontend components
Task 9.2: Write integration tests for frontend-backend interaction
Task 9.3: Write end-to-end tests for user flows
Documentation:

Task 10.1: Create project documentation
Task 10.2: Document API endpoints
Task 10.3: Write user guide
Task 10.4: Write admin guide
Project Management
Project Planning:

Task 11.1: Outline project scope
Task 11.2: Define timelines and milestones
Task 11.3: Allocate resources
Monitoring and Updates:

Task 12.1: Regularly review progress
Task 12.2: Conduct user testing and gather feedback
Task 12.3: Implement updates based on feedback


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn/ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/driving-license-prep-app.git
cd driving-license-prep-app
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
