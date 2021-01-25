// tailwind.config.js
module.exports = {
  theme: {
    purge: [
      './src/**/*.js'
    ],
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      colors: {
        skeColors: {
          darkBlue: '#223048',
          blue: '#3D9BFF',
          lightBlue: '#E4EEF1',
          lightGrey: '#C4C4C4',
          grey: '#8D8383'
        }
      }
    }
  }
}