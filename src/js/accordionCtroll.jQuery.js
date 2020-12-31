jQuery(function ($) {
  $('.Accordion').click(function (event) {
    const accordionItem = event.target.closest('.AccordionItem')
    $(accordionItem).toggleClass('AccordionItem--open')
  })
})
