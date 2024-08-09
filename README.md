# SpaceX Dragon Rocket Web Application

## Overview

This project was developed as a test assignment to create a web application that displays detailed information about the SpaceX Dragon rocket. The application fetches data from the SpaceX API and presents it according to a design provided in Figma.
[DEMO](https://vasyl-pavlenko.github.io/banxso-tt/)

## Test Assignment Description

The task was to develop a web application that:
- **Displays Information about the SpaceX Dragon Rocket**: Fetch and show details about the Dragon rocket from the SpaceX [API](https://api.spacexdata.com/v4/dragons).
- **Design**: Implement the UI based on the design available at [Figma Design](https://www.figma.com/design/JTokTA6Xfcy9Kb62xRBRKv/Test-Junior?nodeid=0-1&t=wRYLyztnat6ev1i1-0).

## Features

- **Image Carousel**: A dynamic image carousel using Swiper.
- **Data Caching**: Data fetched from APIs is cached in `localStorage` to improve performance.
- **Pull to Refresh**: Users can pull down to refresh the content.
- **CI/CD**: Configured with GitHub Actions for automated testing, building, and deployment.

## Technologies Used

### Frontend

- **React**
- **React Router**
- **React Scroll**
- **Swiper** (for the image carousel)
- **React Pull to Refresh** (for pull-to-refresh functionality)

### State Management & API

- **Axios** (for HTTP requests)
- **Classnames** (for conditional CSS class handling)

### Development Tools

- **Vite** (for fast builds and development server)
- **TypeScript** (for static typing)
- **SASS** (for styling)
- **ESLint** (for code linting)
- **GitHub Actions** (for CI/CD pipelines)

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://vasyl-pavlenko.github.io/banxso-tt/
   cd your-repository
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

The project is deployed using GitHub Actions. The CI/CD pipeline automatically builds and deploys the project whenever changes are pushed to the main branch.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

### Happy coding
I hope you enjoy exploring and contributing to my project. If you have any questions or feedback, feel free to reach out. Let's build amazing experiences together!
