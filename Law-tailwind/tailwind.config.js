/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'kafte': '#503C3C',
        'kremt': '#7E6363',
        'kremtqelte': '#A87C7C',
        'kremtxt': '#3E3232',
        'bardhe': '#F6F5F2',
        'mbyllet': '#322C2B',
      },
      fontFamily: {
        'sans': [],
      },
      backgroundImage: {
        'top-logo': "url('file:///C:/Users/Lenovo%20P51/Desktop/logo2.png')",
        'b-img': "url('https://www.trademarkedu.com/uploads/course/1709183609-law.jpg')",
      },
      screens: {
          'phone': '400px',
          // => @media (min-width: 400px) { ... }
    
          'tablet': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
      
    },
  },
  plugins: [],
}

