
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1A1F2C",
        foreground: "#F8F9FA",
        primary: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FEC6A1",
          hover: "#FDB088",
          foreground: "#2D3436",
        },
        accent: {
          DEFAULT: "#D946EF",
          hover: "#C026D3",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#F97316",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#E5DEFF",
          foreground: "#2D3436",
        },
        popover: {
          DEFAULT: "#FDE1D3",
          foreground: "#2D3436",
        },
        card: {
          DEFAULT: "#F2FCE2",
          foreground: "#2D3436",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
