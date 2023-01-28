/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#030E21',
        'background': '#FFF8E1',
        'Unselected': '#9E9E9E',
        'color1': '#131415',
        'color2': '#222228',
        'color3': '#D6D3D3',
        'color4': 'rgba(242, 244, 247, 0.84)',
        'color5': '#8054FF',
        'color6': '#667085',
        'color7': '#FF9898',
        'color8': '#3A3A47',
        'color9': '#D6D3D3',
        'color10': '#FFE5F1',
        'color11': '#F8F9F8',
        'stroke1': '#ADA2FF',
        'stroke2': '#D6D3D3',
        'stroke3': 'rgba(214, 211, 211, 0.50)',
      },
      width: {
        '0.2': '0.2px',
        '62': '250px',
        '450': '450px',
        '560': '560px',
        '660': '660px',
        '760': '760px',
      },
      height: {
        '0.2': '0.2px',
        '380': '380px',
        '550': '550px',
        '650': '590px',
      },
      fontSize: {
        'xs': '13px',
        'sm': '14px',
        'md': '.9rem',
        '0base': '15px',
        'base': '16px',
        '1base': '17px',
        'lg': '20px',
        'xl': '24px',
        '2lg': '21px',
        '3lg': '22px',
      },
      screens: {
        'xs': '400px',
        'sm': '540px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '19': '4.5rem',
      },
      borderRadius: {
        '1lg': '10px',
      }
    },
  },
  plugins: [],
}
