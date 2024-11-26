import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },                                                                        

      screens: {
  			sm: '429px',
  			md: '700px',
  			'max-lg': {
  				'max': '428px'
  			}
  		},
    },
  },
  plugins: [],
} satisfies Config;
