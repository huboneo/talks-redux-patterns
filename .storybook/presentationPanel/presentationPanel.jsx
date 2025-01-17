import React, { useEffect } from 'react'

import './presentationPanel.css'
import { useAddonState } from '@storybook/api'
import { ButtonGroup, Button } from '@blueprintjs/core'

import { PresentationV00 } from './presentationV00'
import { PresentationV01 } from './presentationV01'
import { PresentationV02 } from './presentationV02'
import { PresentationV03 } from './presentationV03'
import { PresentationV04 } from './presentationV04'
import { PresentationV05 } from './presentationV05'
import { PresentationV06 } from './presentationV06'
import { PresentationV07 } from './presentationV07'
import { PresentationV08 } from './presentationV08'
import { PresentationV09 } from './presentationV09'
import { PresentationV10 } from './presentationV10'
import { PresentationV11 } from './presentationV11'
import { PresentationV99 } from './presentationV99'

const pages = [
  ['hello!', PresentationV00],
  ['start', PresentationV01],
  ['immer', PresentationV02],
  ['test', PresentationV03],
  ['factory', PresentationV04],
  ['thunk', PresentationV05],
  ['guard', PresentationV06],
  ['deps', PresentationV07],
  ['cons', PresentationV08],
  ['sender', PresentationV09],
  ['reducer', PresentationV10],
  ['cons II', PresentationV11],
  ['bye!', PresentationV99]
]

export const Panel = props => {
  const [page, setPage] = useAddonState('edumentab/presentation', 0)
  useEffect(() => {
    document.body.addEventListener(
      'keydown',
      e => e.key === 'q' && toggleFullScreen()
    )
  }, [])
  if (!props.active) return null
  const [title, Page] = pages[page]
  return (
    <div className="presentationPanel bp3-ui-text">
      <div style={{ transform: 'scale(0.7, 0.7)', transformOrigin: 'left' }}>
        <ButtonGroup>
          {pages.map(([title], n) => (
            <Button
              key={n}
              onClick={() => setPage(n)}
              active={n === page}
              text={title}
            />
          ))}
        </ButtonGroup>
      </div>
      <div className="pageContent">
        <Page />
      </div>
    </div>
  )
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
