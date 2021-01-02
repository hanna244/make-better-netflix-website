jQuery &&
  jQuery(function (e) {
    const $accordion = $('.Accordion')

    $accordion.click(function (e) {
      const accordion = e.target.closest('.AccordionItem')
      $(accordion).toggleClass('AccordionItem--open')
    })
  })
