# React + TypeScript + Vite Authentication App 🚀

Welcome to the **React + TypeScript + Vite Authentication App**! This project demonstrates how to integrate **Auth0** for authentication in a React application, using TypeScript for type safety and Vite for blazing-fast development. 🎉

## Features ✨

- **Authentication with Auth0**: Secure login and logout functionality.
- **Protected Routes**: Guarded pages accessible only to authenticated users.
- **Session Storage Management**: Save and clear session data with ease.
- **Responsive Design**: Built with Bootstrap for a clean and modern UI.
- **TypeScript Support**: Enjoy type safety and better developer experience.
- **Vite-Powered**: Fast development server and optimized builds.

---

## Project Structure 📂

Here's a quick overview of the key files and their roles:

### Core Components
- **`App.tsx`**: The main application component that defines routes and integrates Auth0.
- **`Auth0Provider.tsx`**: Wraps the app with Auth0 context for authentication.
- **`AuthenticationGuard.tsx`**: Protects routes and redirects unauthenticated users to the login page.

### Pages
- **`HomePage.tsx`**: The landing page with login and logout buttons.
- **`ProfilePage.tsx`**: Displays user profile information after login.
- **`ProtectedPage.tsx`**: A page accessible only to authenticated users.
- **`ContentPage.tsx`**: Includes a form to manage session storage.
- **`CallbackPage.tsx`**: Handles the Auth0 login callback.

### Utilities
- **`SessionStorageForm.tsx`**: A form to save and clear session storage data.
- **`NavBar.tsx`**: A navigation bar that adapts based on authentication state.
- **`NavBarButtons.tsx`**: Login and logout buttons for the navigation bar.

---

## Getting Started 🛠️

Follow these steps to get the app up and running:

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-auth.git
   cd react-auth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
1. Update the **Auth0 settings** in `Auth0Provider.tsx`:
   - Replace `your_domain` with your Auth0 domain.
   - Replace `your_client_id` with your Auth0 client ID.
   - Ensure the `redirectUri` matches your development server URL (e.g., `http://localhost:5173/callback`).

### Running the App
Start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## Expanding the ESLint Configuration 🧹

This project includes a basic ESLint setup. For production-grade applications, consider enabling type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also add React-specific lint rules with the following plugins:
- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

---

## Available Scripts 📜

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run lint`**: Run ESLint to check for code quality issues.

---

## Key Highlights 🔑

### Authentication with Auth0
- **Login**: Users can log in securely using Auth0.
- **Logout**: Users can log out and clear their session.
- **Protected Routes**: Pages like `/profile`, `/protected`, and `/content` are accessible only to authenticated users.

### Session Storage Management
The `ContentPage` includes a form to:
- Save key-value pairs to session storage.
- Clear all session storage data.

---

## Screenshots 📸

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Profile Page
![Profile Page](https://via.placeholder.com/800x400?text=Profile+Page)

---

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

---

## License 📄

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments 🙌

- [Auth0](https://auth0.com/) for providing a robust authentication solution.
- [React](https://reactjs.org/) for the amazing UI library.
- [Vite](https://vitejs.dev/) for the fast development experience.
- [Bootstrap](https://getbootstrap.com/) for the responsive design.

---

Happy coding! 💻✨

## Author
Dub5991
```