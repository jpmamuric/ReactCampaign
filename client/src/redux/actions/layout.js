import * as types from './types'

export const toggleBackdrop =  isOpen => ({ type: types.TOGGLE_BACKDROP, payload: isOpen });

export const toggleSidebar = isOpen => ({ type: types.TOGGLE_SIDEBAR, payload: isOpen });

// export const temporaryClose = () => ({ type: type.})
