/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:'#e8f5f4',100:'#c5e5e3',200:'#9fd3d0',300:'#72bfbb',
          400:'#4aaca8',500:'#2a9490',600:'#1a7a75',700:'#0f5b57',
          800:'#0a3d3a',900:'#052624',950:'#031a18'
        },
        gold: {300:'#e8d08a',400:'#d4af5a',500:'#c9a84c',600:'#b8943b',700:'#9a7a2e'},
      },
      fontFamily: {
        sans: ['Pretendard Variable','Pretendard','-apple-system','BlinkMacSystemFont','system-ui','Apple SD Gothic Neo','Noto Sans KR','Malgun Gothic','sans-serif'],
      },
      boxShadow: {
        card:'0 4px 24px rgba(0,0,0,0.06)',
        'card-hover':'0 12px 40px rgba(0,0,0,0.12)',
        gold:'0 8px 24px rgba(201,168,76,0.25)',
        primary:'0 8px 24px rgba(15,91,87,0.25)',
      },
    },
  },
  plugins:[],
}
