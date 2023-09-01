import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffffff',
          200: '#84A98C',
          300: '#5c5c5c',
          400: '#282828',
          500: '#111',
          600: '#18262e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

//f39a28