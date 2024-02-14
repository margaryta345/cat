/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // основний шрифт для тексту
      serif: ["Georgia", "Cambria", "Times New Roman", "serif"], // для заголовків
      mono: ["Menlo", "Monaco", "Consolas", "monospace"], // для коду або моноширинний текст
    },
  },
  plugins: [],
};
