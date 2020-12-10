/* console.log 실행 ----------------------------------------------------------- */
printConsole({
  title: '넷플릭스 고정형 프로젝트입니다!',
  author: 'Hanna244@euid.dev',
})

/* hiddenHTMLlements 실행 ----------------------------------------------------- */
/* main, footer과 같은 태그는 `.`과 같은 클래스 선택자를 붙이지 않는다. */
hiddenHTMLlements('footer')

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

/* 사용자의 입력을 검토(감지)하여 유효 또는 무효한 상태를 감지하는 스크립팅 --------------------- */
const promotionEmailContainerNode = document.querySelector(
  '.promotion__emailContainer'
)
const emailInputNode = promotionEmailContainerNode.querySelector(
  'input[type="email"]'
)
const INVALID_CLASS = 'promotion__emailContainer--invalid'
const VALID_CLASS = 'promotion__emailContainer--valid'

// change 이벤트는 텍스트를 입력하고 커서가 인풋에서 나와야지만 동작이 감지된다. (별로 좋지 않음, 바로 인식하기를 바람)
// input 텍스트를 입력 할 때마다 동작을 감지한다.
// invalid 전송할 때 이벤트 동작 감지
// matches() 메서드를 사용해서 엘리먼트의 입력한 값이 옳은지 확인.
emailInputNode.addEventListener('input', (e) => {
  const isInvalid = e.target.matches(':invalid')
  const invalid = e.target.matches(':valid')
  if (isInvalid) {
    promotionEmailContainerNode.classList.remove(VALID_CLASS)
    promotionEmailContainerNode.classList.add(INVALID_CLASS)
  } else {
    promotionEmailContainerNode.classList.remove(INVALID_CLASS)
    promotionEmailContainerNode.classList.add(VALID_CLASS)
  }

  // if (emailInputNode.value.trim().length === 0) {
  //   promotionEmailContainerNode.classList.remove(VALID_CLASS)
  // }
})

emailInputNode.addEventListener('blur', (e) => {
  if (e.target.value.trim().length === 0) {
    promotionEmailContainerNode.classList.remove(VALID_CLASS)
  }
})

emailInputNode.addEventListener('focus', (e) => {
  if (e.target.value.trim().length === 0) {
    window.setTimeout(() => e.target.select())
  }
})
