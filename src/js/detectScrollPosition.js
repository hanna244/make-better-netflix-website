const SCROLL_SHOW_STATE_CLASSNAME = 'scrolling--show'
const fixedHeaderNode = document.querySelector('.header--fixed')

const scrollShowHide = function (target, Ypos = 0) {
  if (
    window.scrollY >= Ypos &&
    !target.classList.contains(SCROLL_SHOW_STATE_CLASSNAME)
  ) {
    target.classList.add(SCROLL_SHOW_STATE_CLASSNAME)
  }

  if (
    window.scrollY < Ypos &&
    target.classList.contains(SCROLL_SHOW_STATE_CLASSNAME)
  ) {
    target.classList.remove(SCROLL_SHOW_STATE_CLASSNAME)
  }
}

const handleScrollShowHide = function () {
  scrollShowHide(fixedHeaderNode, 30)
}

window.addEventListener('scroll', handleScrollShowHide)
