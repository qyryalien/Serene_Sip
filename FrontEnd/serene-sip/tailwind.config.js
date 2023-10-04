/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        'lightest': '#FDFCFA',
        'light': '#F7EDE2',
        'light-3': '#F2E7C9',
        'yellow': '#F6BD60',
        'brightyellow': '#FE9A22',
        'green': '#B7C69C',
        'darkgreen': '#6C745E',
        'lightpink': '#F28482',
        'brightpink': '#E6626D',
        'grey-1': '#DAD9E2',
        'grey-2': '#B7B6BF',
        'grey-3': '#5B5B5B',
        'dark': '#32373B',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      screens: {
        'xxs': '320px',
        // => @media (min-width: 320px) { ... }

        'xls': '375px',
        // => @media (min-width: 375px) { ... }

        'xs': '480px',
        // => @media (min-width: 480px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'max-md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'mdl': '992px',
        // => @media (min-width: 992px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        
        'max-lg': {'max': '1024px'},
        // => @media (max-width: 767px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px'
      },
      gap: {
        '15': '3.75rem',
      },
      spacing: {
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
}

