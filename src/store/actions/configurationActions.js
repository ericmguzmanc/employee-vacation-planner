import { 
  DARK_MODE_SET,
  SIDEBAR_MENU_EXPANDED
} from '../../utils/constants/actions.constants';

export function setDarkMode(payload) {
  return {
    type: DARK_MODE_SET,
    payload: payload
  }
}

export function sidebarExpanded(payload) {
  return {
    type: SIDEBAR_MENU_EXPANDED,
    payload: payload
  }
}


export function toggleDarkMode() {
  return dispatch => {
    dispatch(setDarkMode());
  }
}

export function toggleSidebarExpanded() {
  return dispatch => {
    dispatch(sidebarExpanded());
  }
}