import { Action } from '../../../lib/types/action'
import { ById } from '../../../../utils'
import { Theme } from '../../../../services/rebrickable/types'
import { factory } from '../../../lib/factory'

type LoadThemesSuccessPayload = {
  data: ById<Theme>
}

export type LoadThemesSuccessAction = Action<
  'LOAD_THEMES_SUCCESS',
  LoadThemesSuccessPayload
>

export const [loadThemesSuccess, isLoadThemesSuccess] = factory<
  LoadThemesSuccessAction
>('LOAD_THEMES_SUCCESS')
