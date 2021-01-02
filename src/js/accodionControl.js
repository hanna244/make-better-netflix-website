// 개선 사항 Gitbook 참고
// https://app.gitbook.com/@shhn0509/s/make-better-netflix-website/interaction/javascript/accordion-control

const ACCORDION_ITEM_ACTIVE_CLASS = 'AccordionItem--open'
const accordionNode = document.querySelector('.Accordion')
const accordionItemNodeList = accordionNode.querySelectorAll('.AccordionItem')

const accordionArr = Array.from(accordionItemNodeList)

const handleToggleAccordionBody = function (e) {
  // accordionItem 값이 존재하면 accordionItem의 값을 반환한다.
  const accordionItemNode = e.target.closest('.AccordionItem')

  // closest()의 값이 null이 되는 경우를 고려해서 조건문을 만든다.
  if (accordionItemNode !== null) {
    accordionItemNode.classList.toggle(ACCORDION_ITEM_ACTIVE_CLASS)
  } else {
    console.error(
      '클릭한 버튼의 부모노드 중 일치하는 대상이 없습니다. closest 메서드에 전달된 인자를 확인하세요.'
    )
  }
}

accordionArr.forEach(function (item) {
  item.addEventListener('click', handleToggleAccordionBody)
})
