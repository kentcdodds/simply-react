// make it easier to navigate the slides via the keyboard
document.body.tabIndex = '-1'
window.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    document.body.focus()
  }
})
