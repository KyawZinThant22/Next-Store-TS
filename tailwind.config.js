/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            skin: {
               jade: '#013D28',
               mute: '#EDF4F4',
               gray: '#D1DBD9',
            },
         },
      },
   },
   plugins: [],
};
