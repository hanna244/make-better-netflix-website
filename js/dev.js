/* console.log 실행 ----------------------------------------------------------- */
printConsole({
  title: '넷플릭스 고정형 프로젝트입니다!',
  author: 'Hanna244@euid.dev',
})

/* hiddenHTMLlements 실행 ----------------------------------------------------- */

hiddenHTMLlements('main > *:not(.ourStory), footer')

/* input label 인터렉션 --------------------------------------------------------- */
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
