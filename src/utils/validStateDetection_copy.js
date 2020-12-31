/* Promotion input에 입력한 정보를 감지하여 유효한 상태인지 아닌지를 감지 --------------------------- */

const emailContainerNode = document.querySelectorAll('.emailContainer__block')
const emailInputNode = document.querySelectorAll('input[type="email"]')
const INVALID_CLASS = 'emailContainer__block--invalid'
const VALID_CLASS = 'emailContainer__block--valid'

const emailInputNodeArr = Array.from(emailInputNode)

emailInputNodeArr.forEach(function (item, index) {
  item.addEventListener('input', (e) => {
    const isInvalid = e.target.matches(':invalid')
    const targetParentNode = e.target.parentNode

    if (isInvalid) {
      // 유효하지 않은 상태
      targetParentNode.classList.remove(VALID_CLASS)
      targetParentNode.classList.add(INVALID_CLASS)
    } else {
      // 유효한 상태
      targetParentNode.classList.remove(INVALID_CLASS)
      targetParentNode.classList.add(VALID_CLASS)
    }

    // 사용자가 입력한 정보의 글자 개수가 빈 공백을 지우고 나서 0일 때 valid 상태가 아님을 인지
    if (e.target.value.trim().length === 0) {
      targetParentNode.classList.remove(VALID_CLASS)
    }
  })

  item.addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
      e.target.parentNode.classList.remove(VALID_CLASS)
    }
  })

  item.addEventListener('focus', (e) => {
    if (e.target.value.trim().length === 0) {
      window.setTimeout(() => e.target.select())
    }
  })
})
