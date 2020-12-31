/* Promotion input에 입력한 정보를 감지하여 유효한 상태인지 아닌지를 감지 --------------------------- */

const emailContainerNode = document.querySelectorAll('.emailContainer__block')
const emailInputNode = document.querySelectorAll('input[type="email"]')
const INVALID_CLASS = 'emailContainer__block--invalid'
const VALID_CLASS = 'emailContainer__block--valid'

for (var i = 0; i < emailInputNode.length; i++) {
  emailInputNode[i].addEventListener('input', (e) => {
    const isInvalid = e.target.matches(':invalid')

    for (var j = 0; j < emailContainerNode.length; j++) {
      if (isInvalid) {
        // 유효하지 않은 상태
        emailContainerNode[j].classList.remove(VALID_CLASS)
        emailContainerNode[j].classList.add(INVALID_CLASS)
      } else {
        // 유효한 상태
        emailContainerNode[j].classList.remove(INVALID_CLASS)
        emailContainerNode[j].classList.add(VALID_CLASS)
      }

      // 사용자가 입력한 정보의 글자 개수가 빈 공백을 지우고 나서 0일 때 valid 상태가 아님을 인지
      if (e.target.value.trim().length === 0) {
        emailContainerNode[j].classList.remove(VALID_CLASS)
      }
    }
  })
}

// input이 포커스 상태가 아닐 때, 사용자가 입력한 정보의 글자 개수가 빈 공백을 지우고 나서 0일 때  valid 상태가 아님을 인지
// [focusout 와 blur 의 차이점] https://mygumi.tistory.com/321
for (var i = 0; i < emailInputNode.length; i++) {
  emailInputNode[i].addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
      promotionEmailContainerNode.classList.remove(VALID_CLASS)
    }
  })
}

// label의 text가 선택되는 것을 방지 하기 위해 포커스 이벤트에 시간 추가
for (var i = 0; i < emailInputNode.length; i++) {
  emailInputNode[i].addEventListener('focus', (e) => {
    if (e.target.value.trim().length === 0) {
      window.setTimeout(() => e.target.select())
    }
  })
}
