const SCROLL_SHOW_STATE_CLASSNAME = 'scrolling--show'
const fixedHeaderNode = document.querySelector('.header--fixed')

// 헬퍼 함수
var scrollShow = function (target, Ypos = 0, className) {
  if (window.scrollY < Ypos && !target.classList.contains(className)) {
    target.classList.add(className)
  }
}

const scrollHide = function (target, Ypos = 0, className) {
  if (window.scrollY >= Ypos && target.classList.contains(className)) {
    target.classList.remove(className)
  }
}

const handleScrollShowHide = function () {
  scrollShow(fixedHeaderNode, 30, SCROLL_SHOW_STATE_CLASSNAME)
  scrollHide(fixedHeaderNode, 30, SCROLL_SHOW_STATE_CLASSNAME)
}

window.addEventListener('scroll', handleScrollShowHide)

// const scrollShowHide = function (target, Ypos = 0) {
//   if (window.scrollY >= Ypos && !hasShowClass) {
//     addClass(target, SCROLL_SHOW_STATE_CLASSNAME)
//   }

//   if (SY < Ypos && hasShowClass) {
//     removeClass(target, SCROLL_SHOW_STATE_CLASSNAME)
//   }
// }

// const scrollShowHide = function (target, Ypos = 0) {
//   if (
//     window.scrollY >= Ypos &&
//     !target.classList.contains(SCROLL_SHOW_STATE_CLASSNAME)
//   ) {
//     target.classList.add(SCROLL_SHOW_STATE_CLASSNAME)
//   }

//   if (
//     window.scrollY < Ypos &&
//     target.classList.contains(SCROLL_SHOW_STATE_CLASSNAME)
//   ) {
//     target.classList.remove(SCROLL_SHOW_STATE_CLASSNAME)
//   }
// }
