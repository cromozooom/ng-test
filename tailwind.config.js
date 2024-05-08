// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    fontSize: {
      "9xl": "179.26%",
      "8xl": "168.00%",
      "7xl": "157.45%",
      "6xl": "147.57%",
      "5xl": "138.30%",
      "4xl": "129.62%",
      "3xl": "121.48%",
      "2xl": "113.85%",
      xl: "106.70%",
      base: "100%",
      sm: "93.72%",
      xs: "87.84%",
    },
    colors: {
      brand: {
        1: "#fdfdfe",
        2: "#f7f9ff",
        3: "#edf2fe",
        4: "#dfeaff",
        5: "#d0dfff",
        6: "#bdd1ff",
        7: "#a6bff9",
        8: "#87a5ef",
        9: "#3d63dd",
        10: "#3657c3",
        11: "#395bc7",
        12: "#1d2e5c",
      },
      brandDark: {
        1: "#0c111c",
        2: "#111725",
        3: "#172448",
        4: "#1d2e61",
        5: "#243974",
        6: "#2d4484",
        7: "#375098",
        8: "#405eb2",
        9: "#3d63dd",
        10: "#3f5cb0",
        11: "#93b4ff",
        12: "#d5e2ff",
      },
    },

    extend: {},
  },
  plugins: [],
};
