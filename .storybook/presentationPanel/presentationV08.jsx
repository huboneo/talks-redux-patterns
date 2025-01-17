import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

export const PresentationV08 = () => {
  return (
    <div>
      <ReactMarkdown
        source={`
### In version 8 we...

* introduce notion of "consequences"
* rewrite all thunks into consequences

### Rationale

* get rid of the "dispatching non-action" hack
* the consequence chain is more clear

### Notes

* ...we aren't done yet! :)
`}
      />
    </div>
  )
}
