/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src 내부의 모든 tsx 파일을 감시
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
