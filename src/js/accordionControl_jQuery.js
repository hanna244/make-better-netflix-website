// Accordion 컨트롤 with jQuery 라이브러리

jQuery(function ($) {
  $('.Accordion').click(function (e) {
    $(e.target).closest('.AccordionItem').toggleClass('AccordionItem--open')
  })
})
