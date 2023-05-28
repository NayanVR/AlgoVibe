/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2667FF',
        'primary-dark': '#3B28CC',
        'secondary': '#FFC700',
        'secondary-dark': '#F2A000',
        'tertiary': '#4CC700',
        'tertiary-dark': '#0C9B00',
        'error': '#FF4542',
      },
      fontFamily: {
        heading: ['Epilogue', 'sans-serif'],
        text: ['Space Grotesk', 'sans-serif']
      },
    },
    plugins: [],
  }
}
