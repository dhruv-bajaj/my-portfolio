/** @type {impor('tailwindcss').Config} */
export default{
  darkMode:'class',
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme:{
    extend:{ 
      height: {
        '100vh': '100vh',
      },
      width: {
        '80vw': '80vw',
      },
      colors:{
        'dark-mode-bg':"#18181B",
        'light-mode-bg':"#FAFAFA"
      },
    },
  },
  plugins:[]
}