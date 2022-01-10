module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        profile: "url('/Pictures/Backdrop/triangle.png')",
        string: "url('/Pictures/Backdrop/string.png')",
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
  corePlugins: {
    preflight: true,
  },
};
