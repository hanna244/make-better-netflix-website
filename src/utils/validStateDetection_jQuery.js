jQuery(function ($) {
  const $emailContainer = $('.emailContainer__block')
  const $emailInput = $('input[type="email"]')
  const INVALID_CLASS = 'emailContainer__block--invalid'
  const VALID_CLASS = 'emailContainer__block--valid'

  let $el = null
  let $parent = null

  $emailInput
    .on('input', function (e) {
      $el = $(e.target)
      $parent = $el.parent()
      const isInvalid = $el.is(':invalid')

      if (isInvalid) {
        $parent.removeClass(VALID_CLASS).addClass(INVALID_CLASS)
      } else {
        $parent.removeClass(INVALID_CLASS).addClass(VALID_CLASS)
      }

      if ($el.val().trim().length === 0) {
        $parent.removeClass(VALID_CLASS)
      }
    })

    .on('blue', function (e) {
      if ($el && $el.val().trim().length === 0) {
        $parent.removeClass(VALID_CLASS)
      }
    })

    .on('focus', function (e) {
      if ($el && $el.val().trim().length === 0) {
        window.setTimeout(() => e.target.select())
      }
    })
})
