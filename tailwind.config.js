// tailwind.config.js
module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8', // Bright blue for primary accents
        secondary: '#f97316', // Orange for complementary accents
        accent: '#14b8a6', // Teal for buttons and special elements
        neutral: '#f3f4f6', // Light neutral background color
        gray: {
          800: '#1f2937', // Dark gray for text on light backgrounds
        },
      },
      fontFamily: {
        sans: ['"PT Sans"', 'Arial', 'sans-serif'], // For body text
        serif: ['"Baskervville"', 'serif'], // For headings and emphasis
        display: ['"Prata"', 'serif'], // For display use, like large titles
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0, 0, 0, 0.1)', // Custom shadow for cards and elements
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards', // Animation for fading in elements
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
