module.exports = {
    content: ['./src/**/*.{html,js}'],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other": {'min':'340px', 'max': '1200px'},
        },
        colors: {
          darkbg: "#1E293B", // usage example: className='dark:bg-darkbg' notice the bg- prefix.
          blue: {
            850: "#7dd3fc" // Add another color in an already defined color pallete. Usage: bg-blue-850
          }
        }
      },
    },
    plugins: []
}