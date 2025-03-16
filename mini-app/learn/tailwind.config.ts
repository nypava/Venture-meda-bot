import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark"],
  plugins: [
      require('@tailwindcss/typography')
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        tg: {
          "bg": "var(--tg-theme-bg-color)",
          "text": "var(--tg-theme-text-color)",
          "hint": "var(--tg-theme-hint-color)",
          "link": "var(--tg-theme-link-color)",
          "btn": "var(--tg-theme-button-color)",
          "btn-text": "var(--tg-theme-button-text-color)",
          "secondary-bg": "var(--tg-theme-secondary-bg-color)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "var(--tg-theme-hint-color)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "var(--tg-theme-secondary-bg-color)",
        lightgrey: "#708499",
        foreground: "var(--tg-theme-text-color)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "var(--tg-them-hint-color)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "var(--tg-theme-bg-color)",
          foreground: "var(--tg-theme-text-color)"
        },
        popover: {
          DEFAULT: "var(--tg-theme-bg-color)",
          foreground: "var(--tg-theme-text-color)"
        },
        card: {
          DEFAULT: "var(--tg-theme-bg-color)",
          foreground: "var(--tg-theme-text-color)"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: [...fontFamily.sans]
      }
    }
  },
};

export default config;
