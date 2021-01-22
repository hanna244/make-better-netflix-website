const SCROLL_SHOW_STATE_CLASSNAME = 'scrolling--show'
const fixedHeaderNode = document.querySelector('.header--fixed')

// 헬퍼 함수
var scrollShow = function (target, Ypos = 0, className) {
  if (window.scrollY >= Ypos && !target.classList.contains(className)) {
    target.classList.add(className)
  }
}

const scrollHide = function (target, Ypos = 0, className) {
  if (window.scrollY < Ypos && target.classList.contains(className)) {
    target.classList.remove(className)
  }
}

const handleScrollShowHide = function () {
  scrollShow(fixedHeaderNode, 30, SCROLL_SHOW_STATE_CLASSNAME)
  scrollHide(fixedHeaderNode, 30, SCROLL_SHOW_STATE_CLASSNAME)
}

window.addEventListener('scroll', handleScrollShowHide)
