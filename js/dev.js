// const COLOR_SCHEME = {
//   red: '#E50914',
//   black: '#010101',
// }

/* -------------------------------------------------------------------------- */

// const { red, black } = COLOR_SCHEME

// console.log(
//   '%cMake Better! Netflix Website Homepage',
//   'color: white; font-size: 1rem; background: #E50914; padding: 0.45em 0.82em'
// )
// console.log(
//   '%cHanna244(hanna244@euid.dev)',
//   'color: white; font-size: 0.2rem; background: #111; padding: 1em 2em'
// )

printConsole({
  title: '넷플릭스 프로젝트',
  author: 'Hanna244^^',
})
/* -------------------------------------------------------------------------- */

// const hiddenContents = document.querySelectorAll(
//   'main > *:not(.ourStory), footer'
// )

// hiddenContents.forEach((content) => content.setAttribute('hidden', 'hidden'))

// function htmlHidden(content) {
//   hiddenContents.forEach((content) => content.setAttribute('hidden', 'hidden'))
// }

// function htmlHidden(content) {
//   hiddenContents.forEach(function (content) {
//     content.setAttribute('hidden', 'hidden')
//   })
// }

hiddenHTMLlements('main > *:not(.ourStory), footer')

/* -------------------------------------------------------------------------- */

const emailContainer = document.querySelector('.promotion__emailContainer')
const emailInput = emailContainer.querySelector('input')

// emailInput.addEventListener('focus', () => console.log('focus'))
// emailInput.addEventListener('blur', () => console.log('blur focus'))

emailInput.addEventListener('focus', () =>
  emailContainer.classList.add('promotion__emailContainer--focused')
)
emailInput.addEventListener('blur', () =>
  emailContainer.classList.remove('promotion__emailContainer--focused')
)
