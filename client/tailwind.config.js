module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#222222',
        border: '#e5e7eb', // default Tailwind gray-200
      },
    },
  },
  plugins: [],
};
