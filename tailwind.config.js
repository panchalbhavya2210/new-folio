/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "lime-yellow": "#e6fc00",
      "light-cyan": "#00f8b4",
      "dimmed-cyan": "#52b79f",
      "nav-color": "#2A372D",
      "text-black": "#000",
    },
    extend: {
      spacing: {
        "nav-20": "70px",
      },
    },
  },
  plugins: [],
};
