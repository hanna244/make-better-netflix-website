function hiddenHTMLlements(selector) {
  const hiddenContents = document.querySelectorAll(selector)
  hiddenContents.forEach((selector) =>
    selector.setAttribute('hidden', 'hidden')
  )
}
