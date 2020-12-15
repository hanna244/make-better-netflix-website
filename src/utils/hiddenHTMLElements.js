/* 함수 값이 없을 경우 console에 오류가 떠서 수정 */
function hiddenHTMLlements(selector) {
  if (!selector) return
  const hiddenContents = document.querySelectorAll(selector)
  hiddenContents.forEach(
    (content) => (content.style.cssText = 'display: none !important')
  )
}

/* 함수 값이 있을 때(공백 X) */
// function hiddenHTMLlements(selector) {
//   const hiddenContents = document.querySelectorAll(selector)
//   hiddenContents.forEach((selector) =>
//     selector.setAttribute('hidden', 'hidden')
//   )
// }
