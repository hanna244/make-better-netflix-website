const INVALID_CLASS = 'emailContainer__block--invalid'
const VALID_CLASS = 'emailContainer__block--valid'

jQuery(($) => {
  let $el = null
  let $parent = null

  $('.emailContainer input[type="email"]')
    .on('focus', (e) => {
      if ($el && $el.val().trim().length === 0) {
        window.setTimeout(() => e.target.select())
      }
    })
    .on('input', (e) => {
      $el = $(e.target)
      $parent = $el.parent()

      $el.is(':invalid')
        ? $parent.removeClass(VALID_CLASS).addClass(INVALID_CLASS)
        : $parent.removeClass(INVALID_CLASS).addClass(VALID_CLASS)

      if ($el.val().trim().length === 0) {
        $parent.removeClass(VALID_CLASS)
      }
    })
    .on('blur', (e) => {
      if ($el && $el.val().trim().length === 0) {
        $parent.removeClass(VALID_CLASS)
      }
    })
})
