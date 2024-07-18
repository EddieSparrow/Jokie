import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#0E0E0E',
        beige: '#EBDFD2',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom, rgba(255, 184, 0, 0.2), rgba(255, 184, 0, 0.05))',
      },
    },
  },
  plugins: [],
};
export default config;
