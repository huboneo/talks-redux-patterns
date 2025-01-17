import { ById } from '../../../../utils'
import { Action } from '../../../lib/types/action'
import { Set } from '../../../../services/rebrickable/types'
import { factory } from '../../../lib/factory'

type LoadSetsSuccessPayload = {
  data: ById<Set>
  themeId: number
}

export type LoadSetsSuccessAction = Action<
  'LOAD_SETS_SUCCESS',
  LoadSetsSuccessPayload
>

export const [loadSetsSuccess, isLoadSetsSuccess] = factory<
  LoadSetsSuccessAction
>('LOAD_SETS_SUCCESS')
