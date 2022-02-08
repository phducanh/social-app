module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  // These paths are just examples, customize them to match your project structure
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
    colors:{
      primary: "#3BDEC1"
    },
  },
  plugins: [],
}
