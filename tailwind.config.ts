import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import { ButtonConfig, HeadingConfig, LinkConfig } from "./tailwind";
import { styleguidePlugin } from "./tailwindPlugin"

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'header-hover': 'rgba(10, 10, 10, 0.6)',
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'default': '15px',
      },
      fontFamily: {
        primary: "serif",
        secondary: "'Arial','Helvetica','sans-serif','system'",
        catamaran: "'Catamaran', arial",
      },
      fontSize: {
        sm: ["14px", "22px"],
        base: ["16px", "24px"],
        lg: ["20px", "24px"],
        xl: ["32px", "40px"],
        desc: ["24px", "32px"],
        core: ["20px", "30px"],
        sectionTitle: ["40px", "48px"],
        header: ["21px", "21px"],
        promoMessage: ["28px","34px"],
      },
      colors: {
        text: "black",
        "deep-navy": "#0B1C33",
        "light-navy": "#12243A",
        "light-gray": "#F3F4F6",
        "medium-gray": "#E5E7EB",
        "navy-text": "#001F3F",
        "light-button": "#1E3A8A",
        "light-button-hover": "#153E75",
        "dark-button": "#4F6999",
        "dark-button-hover": "#3D547A",
        "light-text-muted": "#868E96",
        "dark-text-muted": "#D1D5DB",
        "logo-pink": "#EC1D8F",
        "dark-pink": "#B0186F",
        "light-pink-bg": "#F9D2E8",
      },
      buttons: (theme: PluginAPI["theme"]): ButtonConfig => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: `${theme("spacing.2")} ${theme("spacing.6")}`,
        fontWeight: theme("fontWeight.bold"),
        variants: {
          light: {
            backgroundColor: theme("colors.light-button"),
            color: "white",
            fontSize: "28px",
            fontWeight: 400,
            borderRadius: "48px",
            padding: "12px 24px",
            justifyContent: "center",
            display: "inline-flex",
            "&:hover": {
              backgroundColor: theme("colors.light-button-hover"),
            },
          },
          dark: {
            backgroundColor: theme("colors.dark-button"),
            color: "white",
            fontSize: "28px",
            fontWeight: 400,
            borderRadius: "48px",
            padding: "12px 24px",
            justifyContent: "center",
            display: "inline-flex",
            "&:hover": {
              backgroundColor: theme("colors.dark-button-hover"),
            },
          },
        },
      }),
      headings: (theme: PluginAPI["theme"]): HeadingConfig => ({
        fontFamily: theme("fontFamily.primary"),
        fontWeight: theme("fontWeight.bold"),
        variants: {
          sub: {
            fontSize: "32px",
            lineHeight: "37px",
            color: theme("colors.brand-primary-green"),
            fontWeight: theme("fontWeight.normal"),
            fontFamily: theme("fontFamily.psp"),
            "@screen sm": {
              fontSize: "1.5rem",
              lineHeight: "1.25",
            },
          },
          head: {
            fontSize: "2.125rem",
            lineHeight: "1.18",
            "@screen sm": {
              fontSize: "2.5rem",
              lineHeight: "1.33",
            },
          },
          primary: {
            fontSize: "54px",
            lineHeight: "1.14",
            textTransform: "uppercase",
            fontFamily: theme("fontFamily.psp"),    
            color: theme("colors.brand-primary-green"),
            "@screen sm": {
              fontSize: "70px",
              lineHeight: "1.33",
            },      
          },
          lead: {
            fontSize: "2rem",
            lineHeight: "1.14",
            color: theme("colors.brand-secondary"),
            fontWeight: theme("fontWeight.normal"),
            fontFamily: theme("fontFamily.psp"),

          },
          directorySub: {
            fontSize: "1.75rem",
            lineHeight: "1.14",
            color: "#252525",
            fontFamily: theme("fontFamily.psp"),
          },
          directory: {
            fontSize: "2rem",
            lineHeight: "1",
            color: theme("colors.brand-primary-green"),
            fontFamily: theme("fontFamily.psp"),
            "@screen md": {
              fontSize: "3rem",
              lineHeight: "1",
            },
          },
          offering: {
            fontSize: "1.75rem",
            lineHeight: "1",
            color: theme("colors.brand-secondary-gold"),
            letterSpacing: "0.03em",
            fontWeight: theme("fontWeight.bold"),
            fontFamily: theme("fontFamily.psp"),
          }
        },
      }),
      links: (theme: PluginAPI["theme"]): LinkConfig => ({
        variants: {
          primary: {
            color: "black",
            "&:hover": {
              // color: theme("colors.brand-secondary-gold"),
              textDecoration: "underline",
            },
          },
          secondary: {
            color: theme("colors.brand-secondary-gold"),
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "none",
            },
          },
          breadcrumbs: {
            color: "black",
            fontWeight: theme("fontWeight.bold"),
          },
          underline: {
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "none",
            },
          },
          underlineInverse: {
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
          headerPhone: {
            color: theme("colors.brand-gray2"),
            fontWeight: theme("fontWeight.bold"),
            "&:hover": {
              textDecoration: "underline",
            },
          },
          designers: {
            color: theme("colors.brand-gray2"),
            textDecoration: "underline",
            lineHeight: "1.5",
            "&:hover": {
              textDecoration: "none",
            },
          },
          lightFooter: {
            color: theme("colors.navy-text"),
            "&:hover": {
              color: theme("colors.dark-button"),
            }
          },
          darkFooter: {
            color: theme("colors.white"),
            "&:hover": {
              color: theme("colors.medium-gray"),
            }
          }
        },
      }),
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      boxShadow: {
        "brand-shadow": "0 -1px 0 0 #CCC inset",
        "brand-box": "0 0 6px 2px rgba(10,10,10,0.1)",
        "brand-box-navy": "0 0 6px 2px rgba(249, 210, 232, 0.1)",
      },
    },
  },
  plugins: [styleguidePlugin()],
};
export default config;

