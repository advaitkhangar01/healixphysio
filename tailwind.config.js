/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F8A9E',
          dark: '#0F6C8D',
        },
        secondary: {
          DEFAULT: '#2BB7A8',
        },
        accent: {
          DEFAULT: '#F97316',
        },
        support: {
          DEFAULT: '#6BBF59',
        },
        medical: {
          white: '#F8FAFB',
          slate: '#0F172A',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '18px',
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(15, 108, 141, 0.1)',
      }
    },
  },
  plugins: [],
}
