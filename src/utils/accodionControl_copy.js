const ACCORDION_ITEM_ACTIVE_CLASS = 'AccordionItem--open'
const accordionNode = document.querySelector('.Accordion')
const accordionItemAll = accordionNode.querySelectorAll('.AccordionItem')

const accordionArr = Array.from(accordionItemAll)

const handleToggleAccordionBody = function (e) {
  const accordionItem = e.target.closest('.AccordionIte')

  // accordionItem 값이 존재하면 accordionItem의 값을 반환한다.

  if (accordionItem !== null) {
    accordionItem.classList.toggle(ACCORDION_ITEM_ACTIVE_CLASS)
  } else {
    console.error('조건을 찾을 수 없습니다.')
    console.error(
      '클릭한 버튼의 부모노드 중 일치하는 대상이 없습니다. closest 메서드에 전달된 인자를 확인하세요.'
    )
  }

  accordionItem !== null &&
    accordionItem.classList.toggle(ACCORDION_ITEM_ACTIVE_CLASS)
}
// 전달된 클래스가 아니라 클래스 이름
//

accordionArr.forEach(function (item) {
  item.addEventListener('click', handleToggleAccordionBody)
})
