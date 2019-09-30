import { Action } from '../../../lib/types/action'
import { factory } from '../../../lib/factory'

type LoadSetsInitPayload = {
  themeId: number
}

export type LoadSetsInitAction = Action<'LOAD_SETS_INIT', LoadSetsInitPayload>

export const [loadSetsInit, isLoadSetsInit] = factory<LoadSetsInitAction>(
  'LOAD_SETS_INIT'
)
