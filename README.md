# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Tic-Tac-Toe

A classic Tic Tac Toe (X & O) game built with **React** and **Tailwind CSS**.

## Features

- **2-Player Mode:** Play locally with a friend.
- **Modern UI:** Glassmorphic game board with a beautiful background image.
- **Responsive Design:** Works great on desktop and mobile.
- **Win Detection:** Instantly highlights the winning line and announces the winner.
- **Draw Detection:** Detects and announces draws.
- **Smooth Animations:** Subtle transitions and effects for a polished experience.
- **Restart Option:** Quickly start a new game with a single click.

## Screenshots

![Tic Tac Toe Screenshot](./public/abstract-fire-ice-element-against-vs-each-other-background-heat-cold-concept_1071931-34516.avif)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/1408Keshu/Tic-Tac-Toe.git
   cd Tic-Tac-Toe
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  component/
    TicTacToe.jsx   # Main game component
  index.css         # Tailwind and custom styles
  App.jsx           # App entry point
public/
  ...               # Static assets (background image, etc.)
```

## Customization

- **Background Image:** Replace the image in the `public` folder to use your own background.
- **Styling:** Modify `index.css` or use Tailwind classes to further customize the look.

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is open source and available under the [MIT License](LICENSE).
