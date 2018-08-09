export const aprocalypse = `
const accordionItems = [
  {
    title: '🐴',
    openTitle: '🐎',
    contents: '...',
    disabled: false,
  },
  // ...
]

const ui = (
  <Accordion
    items={accordionItems}
    position="below"
    single={true}
    preventClose={true}
    openTrigger="focus"
    closeTrigger="blur"
    titleClassName="acc-title"
    contentsClassName="acc-contents"
    onTrigger={this.handleTrigger}
    closeClassName="acc-closed"
    openClassName="acc-open"
    renderExpandAllButton={true} // :-(
    // let your imagination run wild
  />
)
`.trim()
