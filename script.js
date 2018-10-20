if (typeof document !== 'undefined') {
  require('style-loader!css-loader!codemirror/lib/codemirror.css')
  require('style-loader!css-loader!./cm-night-owl.css')
  require('style-loader!css-loader!./styles.css')
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/jsx/jsx')

  // make it easier to navigate the slides via the keyboard
  document.body.tabIndex = '-1'
  window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      document.body.focus()
    }
  })
}
