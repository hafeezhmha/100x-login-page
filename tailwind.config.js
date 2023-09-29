/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'neutral-50': '#F9F9F9',
        'neutral-100': '#F4F4F4',
        'neutral-200': '#E4E4E4',
        'neutral-300': '#D3D3D3',
        'neutral-400': '#A2A2A2',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        'neutral-950': '#0A0A0A',
        'neutral-1000': '#000000',
        'twitter-blue': '#1D9BF0',
        'twitter-blue-disabled': '#1E5D87',
        'twitter-blue-hover': '#1871CA',
        'blue-wash': '#75BEEF33',
        'card-fill': '#16181C',
        'green-success': '#00BE74',
        'red-error': '#8B141A',
        'red-like': '#F4245E',
        'searchbar-fill': '#212327',
        'stroke-#1D9BF03D': '#1D9BF03D',
        'stroke-#FFFFFF3D': '#FFFFFF3D',
        '#FFFFFF1F': '#FFFFFF1F',
        'Twitter-White-100': '#FFFFFF',
        '#040404': '#040404',
      },
      boxShadow: {
        'custom-shadow': "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",

      },
      width:{
        334:'334px',
        442: '442px',
        598: '598px',
        139: '139px',

      },

      height:{
        58:'58px',
        3: '3px',
        38: '38px',

      },

      borderRadius:{
        65: '65px',
        30: '30px',
        9999:'9999px'

      }, 

      fontSize: {
        15: '15px',

      },

      backdropBlur:{ 
        'custom-blur': '23.668209075927734px'
      },

      padding:{
        15:'15px',
        93:'93px',

      },


    },
  },
  plugins: [],
}
