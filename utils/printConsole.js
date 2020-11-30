function printConsole({
  title = 'Make Better! Netflix Website Homepage',
  author = 'Hanna244(hanna244@euid.dev)',
  red = '#E50914',
  black = '#111',
  white = '#fefefe',
} = {}) {
  console.log(
    '%c%s',
    `color: ${white}; font-size: 1rem; background: ${red}; padding: 0.45em 0.82em`,
    title
  )
  console.log(
    '%c%s',
    `color: ${white}; font-size: 0.2rem; background: ${black}; padding: 1em 2em`,
    author
  )
}
