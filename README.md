# CINEPEEK

CINEPEEK is a mobile application built with React Native and The Movie Database (TMDb) API, allowing users to search for movies and view their details.

## 🚀 Features
- Enables users to search for movies.
- Fetches real-time movie data using the TMDb API.
- Provides detailed information about movies with a user-friendly interface.
- Displays movie posters and ratings.
- Allows users to view in-depth details of selected movies.

## 🛠️ Third-Party Libraries Used

### 1️ **axios**
- **Why was it used?**
  - Facilitates HTTP requests to communicate with the TMDb API.
  - Provides a promise-based structure for handling asynchronous data fetching.
  - Helps with error management and efficient response handling.

### 2️ **expo-linear-gradient**
- **Why was it used?**
  - Enhances the background of the movie details screen with smooth transition effects.
  - Improves UX/UI design by increasing readability through transparent overlays.

## 🔧 Installation and Running the Project

1. **Clone the repository:**
   ```sh
   git clone https://github.com/halilcanuyanik/CinePeek.git
   cd CinePeek
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the project:**
   ```sh
   npm start
   ```
   or
   ```sh
   npx expo start
   ```

4. **Run on a device:**
   - For Android: `npm run android`
   - For iOS: `npm run ios`

> **Note:** Make sure to add your API key in a `.env` file before running the project.

## ⏳ Development Timeline
The project workflow was distributed as follows:

1️ **Research & API Integration (2 hours)**
- Reviewing TMDb API documentation.
- Implementing API requests using axios.

2️ **UI Design (3 hours)**
- Designing the search screen.
- Creating the movie details screen.
- Implementing dynamic sizing for responsive design.

3️ **State & Error Management (1 hours)**
- Managing data flow using useState and useEffect.
- Handling loading states and error messages.

4️ **Testing & Optimization (1 hours)**
- Optimizing API calls.
- Performance testing.
- Enhancing UI/UX for better user experience.

## 📌 Notes
- **API keys are not shared in this project.** Users must add their own TMDb API key.
- The application was developed using Expo, so an Expo environment is required.

## 📜 License
