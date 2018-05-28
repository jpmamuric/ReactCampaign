import * as types from './types'

export const toggleModal =  isOpen => ({ type: types.TOGGLE_MODAL, payload: isOpen });

export const toggleSidebar = isOpen => ({ type: types.TOGGLE_SIDEBAR, payload: isOpen });

// export const temporaryClose = () => ({ type: type.})
