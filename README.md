# XAI-Mental-Health
## Motivation

XAI-Mental-Health is a pioneering project developed for the Institute of Business Analytics at Ulm University. This survey website tests various XAI (Explainable Artificial Intelligence) explanation methods in the context of mental health. Its purpose is to explore how different explanations can affect user understanding and trust in AI-driven mental health evaluations.

## Frameworks and Technologies Used

XAI-Mental-Health utilizes the MERN stack, complemented by Next.js for improved SSR capabilities, and Docker for environment consistency.

### MERN Stack

- **MongoDB:** Handles data storage with flexibility to manage diverse survey data.
- **Express.js:** Simplifies backend API development for efficient data operations.
- **React:** Ensures a dynamic and responsive user interface for survey participants.
- **Node.js:** A server-side runtime environment that allows for backend code execution in JavaScript.
- **Next.js:** Provides server-side rendering to enhance the performance and SEO of the application.

### Docker
Docker containers are used to encapsulate the project's environment, ensuring that it runs uniformly across all machines.

### Installation Instructions

Clone the repository and set up both frontend and backend services using Docker:

```bash
# Clone the repository
git clone https://github.com/ulm-university/XAI-Mental-Health.git

# Navigate to the project directory
cd XAI-Mental-Health

# Run Docker Compose to set up the entire stack
docker-compose up --build
