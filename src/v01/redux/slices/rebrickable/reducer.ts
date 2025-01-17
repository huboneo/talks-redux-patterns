import { RebrickableState } from './types/state'
import { AppAction } from '../../types/appAction'
import { RebrickableActionNames } from './types/actionNames'
import { initialRebrickableState } from './initialState'

export const rebrickableReducer = (
  state: RebrickableState = initialRebrickableState,
  action: AppAction
): RebrickableState => {
  switch (action.type) {
    case RebrickableActionNames.LOAD_THEMES_INIT:
      return {
        ...state,
        themes: {
          error: null,
          loading: true,
          data: null
        }
      }
    case RebrickableActionNames.LOAD_THEMES_ERROR: {
      const { error } = action.payload
      return {
        ...state,
        themes: {
          ...state.themes,
          loading: false,
          error
        }
      }
    }
    case RebrickableActionNames.LOAD_THEMES_SUCCESS: {
      const { data } = action.payload
      return {
        ...state,
        themes: {
          ...state.themes,
          loading: false,
          data
        }
      }
    }
    case RebrickableActionNames.LOAD_SETS_INIT: {
      const themeId = action.payload
      return {
        ...state,
        themes: {
          ...state.themes,
          data: {
            ...state.themes.data,
            [themeId]: {
              ...state.themes.data![themeId],
              sets: {
                loading: true,
                error: null,
                data: null
              }
            }
          }
        }
      }
    }
    case RebrickableActionNames.LOAD_SETS_ERROR: {
      const { themeId, error } = action.payload
      return {
        ...state,
        themes: {
          ...state.themes,
          data: {
            ...state.themes.data,
            [themeId]: {
              ...(state.themes.data || {})[themeId],
              sets: {
                ...(state.themes.data || {})[themeId].sets,
                loading: false,
                error
              }
            }
          }
        }
      }
    }
    case RebrickableActionNames.LOAD_SETS_SUCCESS: {
      const { data, themeId } = action.payload
      return {
        ...state,
        themes: {
          ...state.themes,
          data: {
            ...state.themes.data,
            [themeId]: {
              ...(state.themes.data || {})[themeId],
              sets: {
                ...(state.themes.data || {})[themeId].sets,
                loading: false,
                data
              }
            }
          }
        }
      }
    }
    default:
      return state
  }
}
