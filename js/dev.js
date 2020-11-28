const COLOR_SCHENE = {
  red: '#E50914',
  black: '#010101',
}

/* -------------------------------------------------------------------------- */

const { red, black } = COLOR_SCHENE

console.log(
  '%cMake Better! Netflix Website Homepage',
  'color: white; font-size: 1rem; background: #E50914; padding: 0.45em 0.82em'
)
console.log(
  '%cHanna244(hanna244@euid.dev)',
  'color: white; font-size: 0.2rem; background: #111; padding: 1em 2em'
)
/* -------------------------------------------------------------------------- */

const hiddenContents = document.querySelectorAll('main, footer')
hiddenContents.forEach((content) => content.setAttribute('hidden', 'hidden'))
